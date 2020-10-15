
import axios from 'axios';

export const postModule = {
    namespaced: true,

    state: {
      posts: [{id: 1, title: 'test', description: 'test'}]
    },

    mutations: {
        ADD_POSTS(state, posts) {
            state.posts = posts
          }
    },

    getters: {
        getAllPosts: state => {
            return state.posts
          }
    },

    actions: {
        async fetchPosts({ commit }) {
            await axios.get('http://jsonplaceholder.typicode.com/posts')
              .then(posts => {
              commit('ADD_POSTS', posts.data)
            })
      },
      
      myTestFunc() {
        console.log('test successful')
      }
    }
}