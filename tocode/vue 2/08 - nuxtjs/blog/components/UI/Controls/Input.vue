<template>
<div class="control">
  <label> <slot /> </label>
  <!-- https://v3.vuejs.org/guide/migration/listeners-removed.html#_2-x-syntax
    $listeners были удалены, за место них атрибуты в компоненте с приставкой on
  -->
  <input
    v-bind="$attrs"
    :value="value"
    :type="type"
    :required="required"
    @input="$emit('input', $event.target.value)"
  >
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>