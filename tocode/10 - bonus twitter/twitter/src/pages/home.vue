<template>
<div v-if="isLoading">
  <spinner />
</div>
<div v-else>
  <button @click="handleModalShow" class="btn btnPrimary">Open Modal</button>
  <modal
    v-if="showModal"
    @onClose="handleModalShow"
  >modal show</modal>
</div>
</template>

<script>
import { ref } from 'vue'
import Spinner from '../components/UI/Spinner.vue'
import Modal from '../components/UI/Modal.vue'

export default {
  components: {
    Spinner,
    Modal,
  },
  setup() {
    const isLoading = ref(false)

    const showModal = ref(false)
    const handleModalShow = () => {
      // решает проблему с быстрым переключением модального окна
      const nextShowModal = showModal.value = !showModal.value
      showModal.value = nextShowModal
    }

    return { isLoading, showModal, handleModalShow, }
  }
};
</script>

<style lang="sass"></style>
