<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li
        v-for="post of posts"
        :key="post.id"
      >
        <router-link :to="`/postDetail/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>

    <textarea name="text-area" cols="30" rows="5" v-autofocus></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus'

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },  {
    id: 'id3',
    title: 'Post 3'
  },
])
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
</style>