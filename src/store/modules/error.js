export default {
    state:{
        error: null
    },
    mutations:{
        set_error(state, error){
            state.error = error
        },
        remove_error(state){
            state.error = null
        }
    },
    getters:{
        error: state => state.error
    }
}