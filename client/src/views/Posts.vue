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
  default() {
    return {
      posts: []
    }
  },
  
  mounted() {
    this.posts = this.$store.dispatch('posts/fetchPosts')
  },

  computed: mapState({
    posts: state => state.posts.all
  })

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
    padding: 5px;
    color: gray;
    border: 1px solid #00ff00;
    border-radius: 4px;
  }
  
</style>