<template>
  <div>
  <div v-for="post in posts" :key="post.id" class="posts">
    <h4 class="title">{{ post.title }}</h4>
    <div class="desc">
      <p>{{ post.description }}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
data: () => ({
    posts: []
  }),

  mounted() {
    this.posts = this.$store.getters.getAllPosts
  },



}
</script>

<style>
  
  .title {
    margin-top: 50px;
  }

  .desc {
    text-align: center;
    padding: 20px;
    border: 1px solid #00ff00;
    border-radius: 4px;
    box-shadow: 1px 18px 40px -9px rgba(0, 0, 0, 0.247);
  }
</style>