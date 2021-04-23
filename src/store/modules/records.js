import axios from "axios"

export default {
    state: {
        savedState: JSON.parse(localStorage.getItem('calendarState')) || [],
        status: ''
    },
    actions: {
        saveRecords({commit}, payload) {
            commit('saveEvents', payload)
        }
    },
    mutations: {
        saveEvents(state, payload) {
            return new Promise((resolve, reject) => {
                axios ({
                    url:'https://vacation-api.thirty3.tools/api/v1/frontend/events',
                    data:payload,
                    method:'POST'
                })
                    .then(() => {
                        state.savedState = payload
                        localStorage.setItem('calendarState', JSON.stringify(state.savedState))
                    })
            })

        },
    },
    getters: {
        calendarState(state) {
            return state.savedState
        }
    }
}