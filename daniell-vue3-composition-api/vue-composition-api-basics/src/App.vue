<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.userName }} |
    <span
      :style="{color: online ? 'green' : 'red'}"
    >{{ online ? 'online' : 'offline' }}</span>
  </div>

  <header>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/pinia">Pinia</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <router-view v-slot="{ Component }" :userData="userData">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { reactive, provide } from "vue"
import { useOnline } from '@vueuse/core'
/*
  user data
*/
const userData = reactive({
  name: 'Val',
  userName: 'valChannel'
})

const userData2 = reactive({
  name: 'Val',
  userName: 'valChannel'
})

// название параметра, данные
provide('userData2', userData2)

/*
  online status
*/
const online = useOnline()

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  position: absolute;
  background-color: beige;
  top: 0;
  right: 0;
  color: #333;
  padding: 5px;
}

</style>
