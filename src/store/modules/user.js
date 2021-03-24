import axios from "axios";

export default {
    state: {
        user: {},
        users: [],
        superUser: null
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
            return await axios({url: `https://vacation-api.thirty3.tools/api/v1/frontend/me/${payload.id}`, data: payload.value, method: 'PATCH'})
                .then(() => {
                    commit('set_user', payload.value)
                })
        },
        async isSuperUser({commit}) {
            return await axios
                .get('https://vacation-api.thirty3.tools/api/v1/admin/auth/me')
                .then(response => {
                    const superUser = response.data.is_superuser
                    commit('set_superUser', superUser)
                })
        }
    },
    mutations: {
        set_user(state, user) {
            state.user = user
        },
        all_users(state, users) {
            state.users = users
        },
        set_superUser(state, superUser) {
            state.superUser = superUser
        }
    },
    getters: {
        user: state => state.user,
        users: state => state.users,
        isSuperUser: state => state.superUser
    }
}