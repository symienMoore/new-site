import { createStore } from 'vuex';
// import axios from 'axios';
// const url = 'localhost:3030';
// const headers = { Accept: 'application/json' };

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        title: "my first post",
        description: 'my first post'
      }, 
      {
        id: 2,
        title: 'docker in a high pace world',
        description: 'click to see more'
      }, 
      {
        id: 3,
        title: 'my new post',
        description: 'a newer post'
      }
    ],
    user: {}
  },

  // mutations are funtions that affect the STATE.
  // conventtion that all mutation method names are in all caps.
  mutations: {
    ADD_POST(state, post) {
      state.posts.push(post)
    }
    
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

