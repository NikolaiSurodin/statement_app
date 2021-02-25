<template>
  <v-app id="dayspan" v-cloak>
    <ds-calendar-app ref="app"
                     :calendar="calendar"
                     :read-only="readOnly"
                     @change="saveState">
      <template slot="title">
        Calendar Events
      </template>

      <template slot="menuRight">
        <v-btn color="info" type="button" @click="goOut">Выйти</v-btn>
      </template>

      <template slot="eventPopover" slot-scope="slotData">
        <ds-calendar-event-create-popover
            v-bind="slotData"
            :read-only="readOnly"
            @finish="saveState"
        ></ds-calendar-event-create-popover>
      </template>

      <template slot="eventCreatePopover" slot-scope="{placeholder, calendar, close}">
        <ds-calendar-event-create-popover
            :calendar-event="placeholder"
            :calendar="calendar"
            :close="$refs.app.$refs.calendar.clearPlaceholder"
            @create-edit="$refs.app.editPlaceholder"
            @create-popover-closed="saveState"
            :prompts="{
              description:  true,
              color:        true,
              location:     false,
              calendar:     false,
              busy:         false,
              icon:         false,
              guests:       false
            }"
        ></ds-calendar-event-create-popover>
      </template>

      <template slot="eventTimeTitle" slot-scope="{calendarEvent, details}">
        <div>
          <v-icon class="ds-ev-icon"
                  v-if="details.icon"
                  size="14"
                  :style="{color: details.forecolor}">
            {{ details.icon }}
          </v-icon>
          <strong class="ds-ev-title">{{ details.title }}</strong>
        </div>
        <div class="ds-ev-description">{{ getCalendarTime(calendarEvent) }}</div>
      </template>

    </ds-calendar-app>

  </v-app>

</template>

<script>
import {Calendar} from 'dayspan'

import Vue from 'vue'

export default {
  name: 'calendar',
  data: () => ({
    storeKey: 'dayspanState',
    calendar: Calendar.months(),
    readOnly: false,
    defaultEvents: [
      {
        data: {
          title: '',
          color: '#3F51B5'
        },
        schedule: {
          dayOfWeek: [],
          times: [],
          duration: null,
          durationUnit: 'minutes'
        }
      }
    ]
  }),
  mounted() {
    window.app = this.$refs.app
    this.loadState()
  },
  methods:
      {
        getCalendarTime(calendarEvent) {
          let sa = calendarEvent.start.format('a')
          let ea = calendarEvent.end.format('a')
          let sh = calendarEvent.start.format('h')
          let eh = calendarEvent.end.format('h')
          if (calendarEvent.start.minute !== 0) {
            sh += calendarEvent.start.format(':mm')
          }
          if (calendarEvent.end.minute !== 0) {
            eh += calendarEvent.end.format(':mm')
          }
          return (sa === ea) ? (sh + ' - ' + eh + ea) : (sh + sa + ' - ' + eh + ea)
        },
        saveState() { // сохранение в локалсторадже записей
          this.$store.dispatch('saveRecords', this.calendar.toInput(true))
        },
        loadState() {
          //показ при загрузке записей
          let state = {}
          try {
            if (this.savedState !== 'undefined') {
              state = this.savedState
              state.preferToday = false
            }
          } catch (e) {
            // eslint-disable-next-line
            console.log(e)
          }
          if (!state.events || !state.events.length) {
            state.events = this.defaultEvents
          }
          state.events.forEach(ev => {
            let defaults = this.$dayspan.getDefaultEventDetails()
            ev.data = Vue.util.extend(defaults, ev.data)
          })
          this.$refs.app.setState(state)
        },
        goOut() {
          this.$router.push('/')
        },

      },
  computed: {
    savedState() {
      return this.$store.getters.calendarState
    }
  }
}
</script>

<style>
body, html, #app, #dayspan {
  font-family: Roboto, sans-serif !important;
  width: 100%;
  height: 100%;
}

.v-btn--flat,
.v-text-field--solo .v-input__slot {
  background-color: #f5f5f5 !important;
  margin-bottom: 8px !important;
}
</style>