import Vue from 'vue'
import Vuex from 'vuex'
import records from "@/store/modules/records";

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        records
    }
})
