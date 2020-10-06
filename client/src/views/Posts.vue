<template>
  <div class="holder">
    <div v-for="post in posts" :key="post.id" class="posts">
        <h4 class="title">{{ post.title }}</h4>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted() {
    this.$store.dispatch('fetchPosts')
  },

  computed: mapState([
    'posts'
  ])

}
</script>

<style>
  
 .holder {
   display: flex;
   flex-wrap: wrap;
 }


  .posts {
    width: 300px;
    margin-top: 5%;
    margin-left: 5%;
    text-align: center;
    padding: 5px;
    color: gray;
    border-radius: 4px;
    box-shadow: 1px 18px 40px -9px rgba(0, 0, 0, 0.349);
  }
  
</style>