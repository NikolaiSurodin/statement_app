import Vue from 'vue'
import Router from 'vue-router'
import {store} from "@/store"

import calendar from '@/view/calendar'
import register from "@/view/register"
import login from "@/view/login"
import notFound from '@/components/notFound'
import userList from "@/view/userList";


Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            component: register
        },
        {
            path: '/login',
            component: login
        },

        {
            path: '/calendar',
            component: calendar,
            meta: {auth: true}
        },
        {
            path: '/userList',
            component: userList,
            meta: {auth: true}
        },
        {
            path: '*',
            name: 'notFound',
            component: notFound
        },
    ]
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.auth) && !store.getters.isLoggedIn) {
        next('/register')
    } else {
        next()
    }
})

export default router