import axios from "axios";
import {store} from "@/store";


export default {
    state: {
        user: [],
        status: '',
        token: localStorage.getItem('token')
    },
    actions: {
        submitLogin({commit}, data) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'https://sel-api.justplay.gg/token/auth', data, method: 'POST'})
                    .then(response => {
                        const token = response.data.token
                        commit('auth_success', token, data)
                        this.dispatch('setAuthHeader')
                        resolve(response)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({commit}) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
                reject()
            })
        },
        setAuthHeader() {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.getters.token}`
        },
        checkAuth() {
            if (this.getters.isLoggedIn) {
                return this.dispatch('setAuthHeader')
            }
            return this.dispatch('logout')
        }

    },
    mutations: {
        auth_success(state, token, user) {
            state.status = 'success'
            store.commit('set_token', token)
            state.user = user
        },
        set_token(state, token) {
            localStorage.setItem('token', token)
            state.token = localStorage.getItem('token')
        },
        logout(state) {
            state.status = null
            state.token = null
        },
        auth_request(state) {
            state.status = 'loading'
        },
        auth_error(state) {
            state.status = 'error'
        }

    },
    getters: {
        token: state => state.token,
        isLoggedIn: state => !!state.token
    }
}