import Vue from 'vue'

import vuetify from 'vuetify'
import DaySpan from 'dayspan-vuetify'

import VIcon from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/src/styles/app.scss'
import 'vuetify/dist/vuetify.css'

import { dsBind, dsDefaults, dsMergeOptions, dsMergeValidate } from 'dayspan-vuetify/src/functions'
import { default as Component } from 'dayspan-vuetify/src/component'

Vue.config.productionTip = false
Vue.use(vuetify)
Vue.use(VIcon)

// $dayspan is just another reactive component
var $dayspan = new Vue(dsMergeOptions({ }, Component))
// allow directives to access $dayspan
Vue.$dayspan = $dayspan
// allow components to access $dayspan
Vue.prototype.$dayspan = $dayspan
// allow components to pull & merge default component props into given
// component props.
Vue.prototype.$dsValidate = dsMergeValidate
Vue.prototype.$dsDefaults = dsDefaults
// allow v-bind="{$scopedSlots}"
Vue.prototype._b = dsBind(Vue.prototype._b)
// Call initialization functions
$dayspan.init()

console.log(Vue.prototype)

Vue.use(DaySpan, {
    methods: {
        getDefaultEventColor: () => '#1976d2'
    }
});

import App from './App.vue'

new Vue({
    vuetify,
    el: '#app',
    render: h => h(App)
});