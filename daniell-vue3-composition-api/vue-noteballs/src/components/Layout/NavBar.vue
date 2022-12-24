<template>
<nav class="navbar is-success container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item is-size-4 is-family-monospace">
        Noteballs
    </div>

    <a role="button" class="navbar-burger"
     :class="{ 'is-active': isShowMobileNav }"
     @click.prevent="isShowMobileNav = !isShowMobileNav"
     aria-label="menu"
     aria-expanded="false"
     data-target="navbarBasicExample"
     ref="navbarBurgerRef"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu"
    :class="{'is-active': isShowMobileNav}"
    ref="navbarMenuRef"
  >
    <div class="navbar-end">
      <router-link
       @click="isShowMobileNav = false"
       to="/"
       class="navbar-item"
       active-class="is-active"
      >
        Home
      </router-link>

      <router-link
       @click="isShowMobileNav = false"
       to="/stats"
       class="navbar-item"
       active-class="is-active"
      >
        Stats
      </router-link>
    </div>
  </div>
</nav>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

 /*
    mobile nav
 */
const isShowMobileNav = ref(false)

/**
 * click outside to close menu
 */
 const navbarMenuRef = ref(null)
 const navbarBurgerRef = ref(null)

 onClickOutside(navbarMenuRef, () => {
  isShowMobileNav.value = false
 }, {
  ignore: [navbarBurgerRef]
 })

</script>

<style>
@media screen and (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>
