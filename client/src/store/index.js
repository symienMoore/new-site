import { createStore } from 'vuex';
import { userModule } from './authentication/user';
import { postModule } from './posts/post';
// const url = 'http://localhost:3030';
// const headers = { Accept: 'application/json' };
// const url = 'https://jsonplaceholder.typicode.com/posts';
export default createStore({
  state: {
    
  },

  // actions are functions that are called throughout app that call mutations.
  actions: {
  
  },

  // mutations are funtions that affect the STATE.
  // convention that all mutation method names are in all caps.
  mutations: {
    
    
  },


  getters: {
    
  },
   
  modules: {
    users: userModule,
    posts: postModule
  },
});

