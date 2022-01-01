<template>
<!-- https://nuxtjs.org/docs/concepts/views/
  так же все вызовы в JS throw(error) будут перенаправлены на этот файл
  в котором нам нужно настроить обработчики событий
  punctuation.definition.string - кавычки
-->
<section class="not-found">
  <header1 />
  <div class="container">
    <div class="not-found__wrapper">
      <p class="title">Page Not Found!</p>
      <nuxt-link to="/">Main Page</nuxt-link>
    </div>
  </div>
</section>
</template>

<script>
import Header1 from "~/components/system/Header.vue"

export default {
  components: { Header1 }
}
</script>

<style lang="scss">
.not-found__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  font-size: 26px;
}
</style>