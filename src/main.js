import Vue from 'vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
import App from './App.vue'
import {store} from './store'
import router from "@/router"

import 'vuetify/dist/vuetify.css'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.use(DaySpanVuetify, {
    methods: {
        getDefaultEventColor: () => '#1976d2'
    }
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
});
