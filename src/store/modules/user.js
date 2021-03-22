import axios from "axios";

export default {
    state: {
        user: {},
        users: []
    },
    actions: {
        async infoUser({commit}) {
            return await new Promise(resolve => {
                axios
                    .get('https://vacation-api.thirty3.tools/api/v1/frontend/me?expand=profile')
                    .then(response => {
                        const user = [undefined, ...response.data.data].find(user => user) || ![].find(user => user)
                        commit('set_user', user)
                        resolve(response)
                    })
            })
        },
        async allUsers({commit}) {
            return await axios
                .get('https://vacation-api.thirty3.tools/api/v1/frontend/users?expand=profile')
                .then(response => {
                    const users = response.data.data
                    commit('all_users', users)
                })
        },
        async infoUserById({commit}, payload) {
            return await axios
                .get(`https://vacation-api.thirty3.tools/api/v1/frontend/users/${payload}?expand=profile`)
                .then(response => {
                    const user = response.data
                    commit('set_user', user)
                })
        },
        async updateUser({commit}, payload) {
            return await axios
                .patch(`https://vacation-api.thirty3.tools/api/v1/frontend/me/${payload.id}`, payload.value)
                .then(() => {
                    commit('set_user')
                })
        }
    },
    mutations: {
        set_user(state, user) {
            state.user = user
        },
        all_users(state, users) {
            state.users = users
        }
    },
    getters: {
        user: state => state.user,
        users: state => state.users
    }
}