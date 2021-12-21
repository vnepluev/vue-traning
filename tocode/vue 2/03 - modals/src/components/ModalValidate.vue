<template>
<!-- second modal -->
<Modal
  title="Second modal with form"
  @close="$emit('close')"
>
  <template v-slot:body>
    <form action="" @submit.prevent="">
      <label>Name:</label>
      <input type="text">
      <label>E-mail:</label>
      <input type="email">
      <button class="btn btnPrimary">Submit</button>
    </form>
  </template>
</Modal>
</template>

<script>
import Modal from "@/components/UI/Modal.vue";

export default {
  
  emits: ['close'],
  components: { Modal }  
}
</script>

<style lang="scss" scoped>

</style>