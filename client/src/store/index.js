import { createStore } from 'vuex';
import axios from 'axios';
// const url = 'localhost:3030';
// const headers = { Accept: 'application/json' };
// const url = 'https://jsonplaceholder.typicode.com/posts';
export default createStore({
  state: {
    posts: [
      // {
      //   id: 1,
      //   title: "my first post",
      //   description: 'my first post'
      // }, 
      // {
      //   id: 2,
      //   title: 'docker in a high pace world',
      //   description: 'click to see more'
      // }, 
      // {
      //   id: 3,
      //   title: 'my new post',
      //   description: 'a newer post'
      // }
    ]
  },

  // actions are functions that are called throughout app that call mutations.
  actions: {
    async fetchPosts({ commit }) {
      await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => posts.data)
        .then(posts => {
          console.log(posts)
        commit('ADD_POSTS', posts)
      })
    }
  },

  // mutations are funtions that affect the STATE.
  // convention that all mutation method names are in all caps.
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
   
  modules: {},
});

