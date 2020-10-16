import axios from 'axios';
// const headers = {
//     accept: 'application/json',

// };
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
            axios.post('http://localhost:3030/authentication', user)
                .then(res => {
                console.log(res)
            })
        }
    }
}