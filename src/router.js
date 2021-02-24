import Vue from 'vue'
import Router from 'vue-router'
import calendar from '@/components/calendar'
import register from "@/components/register"
import login from "@/components/login"
import navigation from "@/components/navigation";

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
    ]
})