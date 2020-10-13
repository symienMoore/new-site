
import axios from 'axios';

export const postModule = {
    namespaced: true,

    state: {
        posts: []
    },

    mutations: {
        ADD_POSTS(state, posts) {
            state.posts = posts
          }
    },

    getters: {
        getAllPosts: state => {
            console.log(state)
            return state.posts
          }
    },

    actions: {
        async fetchPosts({ commit }) {
            await axios.get('http://jsonplaceholder.typicode.com/posts')
              .then(posts => posts.data)
              .then(posts => {
                console.log(posts)
              commit('ADD_POSTS', posts)
            })
          }
    }
}