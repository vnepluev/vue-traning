<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title align="center" class="font-bold">Sofi Tatu</q-toolbar-title>
      </q-toolbar>

      <!-- <q-tabs>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab icon="assignment" to="/some/other/route" replace label="Other Tab" />
      </q-tabs>-->
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer class="px-5">
      <q-tabs switch-indicator class="tabs-bottom">
        <q-route-tab
          v-for="(menuItems, index) in menuItems"
          :key="index"
          :icon="menuItems.icon"
          to="/your/route"
          replace
          :label="menuItems.displayName"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { menuItems } from '../data/menuItems.js'

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      menuItems,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style lang="scss">
.tabs-bottom {
  .q-tab__content {
    .q-tab__label {
      font-size: 11px;
    }
  }
}
</style>