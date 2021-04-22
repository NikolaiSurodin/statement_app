export default {
    state: {
        savedState: JSON.parse(localStorage.getItem('calendarState')) ||  [],
        status:''
    },
    actions: {
        saveRecords({commit}, payload) {
            commit('saveEvents', payload)
        },
        createEvent({commit}, payload){
            commit('createEvent', payload)
        }
    },
    mutations: {
        saveEvents(state, payload) {
            state.savedState = payload
            localStorage.setItem('calendarState', JSON.stringify(state.savedState))
        },
        createEvent(state, payload) {

        }
    },
    getters: {
        calendarState(state){
            return state.savedState
        }
    }
}
