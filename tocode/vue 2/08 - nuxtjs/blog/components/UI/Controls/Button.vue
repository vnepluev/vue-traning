<template>
<!-- $listeners помогает нам не описывать массу событий типа click, blure и т.п.
      а принимать их в компоненте, подвешивая на нужные нам события
      https://v3.vuejs.org/guide/migration/listeners-removed.html#_2-x-syntax
      !Было удалено во Vue 3
      -->
<button
  class="btn"
  :class="btnClass"
  v-on="$listeners"
  v-bind="$attrs"
>
  <!-- слотов в UI компоненте больше чем 1 быть не должно
  по этому опускаем name="" -->
  <slot />
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: 'btnPrimary'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>