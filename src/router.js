import Vue from 'vue'
import Router from 'vue-router'
import calendar from '@/view/calendar'
import register from "@/view/register"
import login from "@/view/login"
import notFound from '@/components/notFound'

Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:register
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/calendar',
            component:calendar
        },
        {
            path:'*',
            name:'notFound',
            component:notFound
        },
    ]
})