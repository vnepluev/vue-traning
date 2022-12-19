<template>
  <div class="contain">
      <header>
        <!-- <nav>
          <router-link to="/" class="button">Notes</router-link> | 
          <router-link to="/stats" class="button">Stats</router-link>
        </nav> -->
        <NavBar />
      </header>

      <main>
        <div class="container is-max-desktop px-2 py-4">
          <router-view></router-view>
        </div>
      </main>
  </div>
</template>

<script setup>
import NavBar from '@/components/Layout/NavBar.vue'

</script>

<style>
@import 'bulma/css/bulma.min.css';

div#app {
  width: 100%;
  display: initial;
}

.contain {
  display: initial;
  width: 100%;
  max-width: 100%;
}

</style>