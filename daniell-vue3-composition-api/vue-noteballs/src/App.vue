<template>
  <header>
    <nav>
      <router-link to="/" class="button">Notes</router-link> | 
      <router-link to="/stats" class="button">Stats</router-link>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style>
@import 'bulma/css/bulma.min.css'
</style>