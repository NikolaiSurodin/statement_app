<template>
  <v-app id="dayspan">
    <ds-calendar-app></ds-calendar-app>
  </v-app>
</template>

<script>
import { Calendar } from 'dayspan';

export default {
  name: 'app',
  data: () => ({
    calendar: Calendar.months()
  })
}
</script>

<style lang="css">

body, html, #app, #dayspan {
  font-family: Roboto, sans-serif;
  width: 100%;
  height: 100%;
}
</style>