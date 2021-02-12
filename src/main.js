import Vue from 'vue'
import App from './App.vue'

import vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'

import VIcon from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false
Vue.use(vuetify)
Vue.use(VIcon)
Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});

new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
});
