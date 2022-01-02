<template>
<div class="wrapper">
  <Header1/>
  
  <!-- content -->
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="Admin Page">
      <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
      <nuxt-link to="/admin/new-post" class="link linkWhite">New post</nuxt-link>
    </Intro>
    <nuxt />
  </div>

</div>
</template>

<script>
import Header1 from "~/components/system/Header.vue"
import Intro from "~/components/UI/Intro.vue"

export default {
  components: { Header1, Intro }
}
</script>

<style lang="scss" scoped>

</style>