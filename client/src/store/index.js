import { createStore } from 'vuex';
// import axios from 'axios';
// const url = 'localhost:3030';
// const headers = { Accept: 'application/json' };

export default createStore({
  state: {
    posts: [
    ]
  },

  // mutations are funtions that affect the STATE.
  // conventtion that all mutation method names are in all caps.
  mutations: {
    
  },

  // actions are functions that are called throughout app that call mutations.
  actions: {
    // async getPosts({ commit }) {
    //   const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //   console.log(posts)
    // }
  },

   
  modules: {},

  getters: {
    getAllPosts: state => state.posts
  }
});

