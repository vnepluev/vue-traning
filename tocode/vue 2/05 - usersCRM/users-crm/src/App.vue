<!-- <script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script> -->

<template>
  <div class="wrapper">

    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">User CRM App</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <!-- <footer></footer> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Home', url: '/' },
        { title: 'Users', url: '/users' },
      ]
    }
  }
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
</style>
