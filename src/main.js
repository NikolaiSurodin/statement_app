import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'

import {store} from './store'
import axios from "axios";
import router from "@/router"

import ru from "@/locales/ru"

import 'vuetify/dist/vuetify.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'


Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(Vuetify)

Vue.use(DaySpanVuetify, {
    methods: {
        getDefaultEventColor: () => '#1976d2'
    }
})
Vue.$dayspan.supports = {
    description: true,
    color: false,
    location: false,
    calendar: false,
    busy: true,
    icon: false,
    guests: false
}


Vue.$dayspan.addLocale(['ru'], ru)
Vue.$dayspan.setLocale('ru')

new Vue({
    el: '#app',
    store,
    router,
    ru,
    render: h => h(App),
});
