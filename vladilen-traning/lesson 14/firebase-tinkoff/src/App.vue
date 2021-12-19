<template>
  <!-- <component :is="layout + '-layout'" v-if="layout" /> -->
  <h3>{{ layout }} -layout</h3>
</template>

<script>
import { useRoute, computed } from 'vue-router'
import AuthLayout from "./layout/AuthLayout.vue"
import MainLayout from "./layout/MainLayout.vue"

export default {
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {AuthLayout, MainLayout}
}
</script>

<style>

</style>
