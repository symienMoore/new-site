<template>
  <div class="holder">
    <button @click="callMethodByBtn">test</button>
    <div v-for="post in posts" :key="post.id" class="posts">
      <h5 class="title">{{ post.title }}</h5>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {

  computed: {
    ...mapState({
      posts: state => state.posts.posts
    })
  },

  mounted() {
    this.$store.dispatch('posts/fetchPosts')
  },

  methods: {
    ...mapActions({
      testFunc: 'posts/myTestFunc'
    }),

    callMethodByBtn() {
      this.testFunc()
    }
  }

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