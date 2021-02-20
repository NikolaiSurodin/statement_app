export default {
    state: {
        //let records = this.calendar.toInput(true);
        // let json = JSON.stringify(records);
        // localStorage.setItem(this.storeKey, json);
        record:this.calendar.toInput(true),
        records: JSON.parse(localStorage.getItem('record')) || [],
    },
    actions: {
        saveRecords({commit}, record) {
            commit('saveEvents', record)
        },
    },
    mutations: {
        saveEvents(state, payload) {
            state.records.push(payload)
            localStorage.setItem('record', JSON.stringify(state.records))
        },
        loadState() {
        },
        getters: {
            allRecord(state) {
                return state.records
            }
        }
    }
}
