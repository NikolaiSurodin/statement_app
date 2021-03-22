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
                        const user = response.data.data.find(user => user)
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