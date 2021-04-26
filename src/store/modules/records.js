import axios from "axios"
import { Event } from "@/classes/Event";
import user from "@/store/modules/user";


export default {
    state: {
        savedState: JSON.parse(localStorage.getItem('calendarState')) || [],
        status: ''
    },
    actions: {
        saveRecords({commit}, payload) {
            commit('saveEvents', payload)
        },
        getRecords({commit}){
            commit('getEvents')
        }
    },
    mutations: {
        saveEvents(state, payload) {
            return new Promise((resolve, reject) => {
                axios({
                    url: 'https://vacation-api.thirty3.tools/api/v1/frontend/events',
                    data: {
                        id : payload.id,
                        user : '0f525e87-5a7a-4457-a463-8df3915b69c0',
                        title : payload.title,
                        comment : payload.comment,
                        status : payload.status,
                        //тип события (daysoff, vacation)
                        kind : payload.kind,
                        busy : payload.busy,
                        request : payload.request,
                        date_from : '2021-04-26',
                        date_to : '2021-04-28',
                        created_at : payload.created_at,
                        updated_at: payload.updated
                    },
                    method: 'POST'
                })
                    .then(() => {
                        state.savedState = payload
                        console.log(payload)
                        localStorage.setItem('calendarState', JSON.stringify(state.savedState))
                    })
            })

        },
        getEvents(state) {
            return new Promise((resolve, reject) => {
                axios
                    .get('https://vacation-api.thirty3.tools/api/v1/frontend/events')
                    .then(response => {
                        state.savedState = response.data.data
                        console.log(state.savedState)
                        localStorage.setItem('calendarState', JSON.stringify(state.savedState))
                    })
            })
        }
    },
    getters: {
        calendarState(state) {
            return state.savedState
        }
    }
}