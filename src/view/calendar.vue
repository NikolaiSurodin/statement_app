<template>
  <div>
    <template>
      <profile
          v-if="showProfile"
          @closeProfileInfo="closeProfileInfo"
      >
      </profile>
    </template>
    <v-app id="dayspan" v-cloak>

      <ds-calendar-app ref="app" v-if="loggedIn"
                       :calendar="calendar"
                       :read-only="readOnly"
                       @change="saveState">

        <template slot="title">
          Календарь отпусков
        </template>
        <template slot="menuRight">
          <v-btn type="button" @click="showProfile = !showProfile">
            <i class="material-icons">account_circle</i>{{ user.username }}
          </v-btn>
          <v-btn href="#" class="black-text" @click.prevent="logout">
            <i class="material-icons">assignment_return</i>Выйти
          </v-btn>
        </template>
        <template slot="eventPopover" slot-scope="slotData">
          <ds-calendar-event-popover
              v-bind="slotData"
              :read-only="readOnly"
              @finish="saveState"
          ></ds-calendar-event-popover>
        </template>

        <template slot="eventCreatePopover" slot-scope="{placeholder, calendar, close}">
          <ds-calendar-event-create-popover
              :calendar-event="placeholder"
              :calendar="calendar"
              :close="$refs.app.$refs.calendar.clearPlaceholder"
              :prompts="{
              description:  true,
              color:        false,
              location:     false,
              calendar:     false,
              busy:         true,
              icon:         false,
              guests:       false
            }"
              @create-edit="$refs.app.editPlaceholder"
              @create-popover-closed="saveState"
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
        <template slot="drawerBottom">
          <div class="pa-3" v-if="superUser">
            <v-btn to="/all_users"
            >Список сотрудников
            </v-btn>
          </div>
        </template>
      </ds-calendar-app>
    </v-app>
  </div>
</template>

<script>
import {Calendar, Weekday, Month} from 'dayspan';
import Vue from 'vue';
import MessageError from "@/components/messageError";
import Profile from "@/view/profile";

export default {
  name: 'calendar',
  components: {Profile, MessageError},
  data() {
    return {
      storeKey: 'dayspanState',
      showProfile: false,
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
    }
  },
  mounted() {
    window.app = this.$refs.app
    this.loadState()
    this.$store.dispatch('infoUser')
    this.$root.$on('save', () => {
      this.$store.dispatch('infoUser')
    })
  },
  beforeMount() {
    this.$store.dispatch('isSuperUser')
  },
  methods:
      {
        getCalendarTime(calendarEvent) {
          let sa = calendarEvent.start.format('a');
          let ea = calendarEvent.end.format('a');
          let sh = calendarEvent.start.format('h');
          let eh = calendarEvent.end.format('h');
          if (calendarEvent.start.minute !== 0) {
            sh += calendarEvent.start.format(':mm');
          }
          if (calendarEvent.end.minute !== 0) {
            eh += calendarEvent.end.format(':mm');
          }
          return (sa === ea) ? (sh + ' - ' + eh + ea) : (sh + sa + ' - ' + eh + ea);
        },
        saveState() { // сохранение в локалсторадже записей
          let records = this.calendar.toInput(true);
          this.$store.dispatch('saveRecords', records)
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
        logout() {
          this.$root.$emit('logout')
        },
        closeProfileInfo() {
          this.showProfile = false
        },
      },
  computed: {
    savedState() {
      return this.$store.getters.calendarState
    },
    user() {
      return this.$store.getters.user
    },
    loggedIn() {
      return this.$store.getters.isLoggedIn
    },
    superUser() {
      return this.$store.getters.isSuperUser
    }
  },
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