<template>
  <div class="container">
  <input type="text" v-model="message">
  <div class="msg">
  {{ message }}
  </div>
    <div class="img-holder">
    <button class="btn" @click="getData">click me</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      message: " ",
      reversed: false
    }
  }, 

  methods: {
    getData() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style>
  
</style>