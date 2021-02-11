import Vue from 'vue'
import App from './App.vue'

import vuetify from 'vuetify'
import DaySpan from 'dayspan-vuetify-2'

const vuetifyOptions = {}

Vue.config.productionTip = false
Vue.use(vuetify)
Vue.use(DaySpan, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});

new Vue({
  vuetify: new vuetify(vuetifyOptions),
  el: '#app',
  render: h => h(App)
});
