import { createStore } from 'vuex';
import { userModule } from './authentication/user';
import { postModule } from './posts/post';
import { FeathersVuex } from '../feathers-client'
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './store.auth'
// const url = 'http://localhost:3030';
// const headers = { Accept: 'application/json' };
// const url = 'https://jsonplaceholder.typicode.com/posts';
Vue.use(Vuex)
Vue.use(FeathersVuex)

const requireModule = require.context(
  // The path where the service modules live
  './services',
  // Whether to look in subfolders
  false,
  // Only include .js files (prevents duplicate imports`)
  /\.js$/
)
const servicePlugins = requireModule
  .keys()
  .map(modulePath => requireModule(modulePath).default)

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
  plugins: [...servicePlugins, auth]
});

