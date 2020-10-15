import axios from 'axios';
const headers = {
    'content-type': 'application/json',

};
export const userModule = {
    namespaced: true,

    state: {
        user: {},
        token: localStorage.getItem('token') || ''
    },

    mutations: {
        ADD_USER: (state, user) => {
            state.user = user
        }
    },

    actions: {
        login(user) {
            console.log(user.email)
            axios.post('http://localhost:3030/authentication', {strategy: user.strategy, email: user.email, password: user.password}, headers)
                .then(res => {
                    console.log(res)
            })
        }
    }
}