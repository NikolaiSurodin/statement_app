import Vue from 'vue'
import App from './App.vue'

import vuetify from 'dayspan-vuetify-2/src/plugins/vuetify'
import DaySpan from 'dayspan-vuetify-2'

import VIcon from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify-2/src/styles/app.scss'

Vue.config.productionTip = false
Vue.use(vuetify)
Vue.use(VIcon)
Vue.use(DaySpan, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});

new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
});
