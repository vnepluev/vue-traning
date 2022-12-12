<template>
  <div class="post-detail">
    <h1>Post detail</h1>
    <p>Display detail {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show post ID</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Go home in 3 seconds!</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to First post</button>
    </div>
    <p><router-link to="/posts">&lt; Back</router-link></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute() // options this.$route
const router = useRouter()

const showPostId = () => {
  alert(`This post ${route.params.id}`)
}

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    router.push({name: 'home'}) // this.$router.push('/')
  }, 3000)
}

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}
</script>
