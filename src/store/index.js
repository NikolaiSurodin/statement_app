import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleEvents = {
    state:() => ({
        events:[]
    }),
    actions:{


    },
    mutations:{

    },
    getters:{
        events(state){
            return state.events
        }
    }
}