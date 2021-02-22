export default {
    state: {
        savedState: JSON.parse(localStorage.getItem('calendarState')) || null,
    },
    actions: {
        saveRecords({commit}, payload) {
            commit('saveEvents', payload)
        },
    },
    mutations: {
        saveEvents(state, payload) {
            state.savedState = payload
            localStorage.setItem('calendarState', JSON.stringify(state.savedState))
        },
        loadState() {
        },
    },
    getters: {
        calendarState(state) {
            return state.savedState
        }
    }
}
