<template>
<div class="modals">
    <h1>Modals</h1>

    <div>
        <label for="ch1">Show Dark Modals?</label>
        <input
          v-model="showDarkModals" 
          type="checkbox"
          name="ch1"
          id="ch1"
        >
    </div>

    <button @click="isModalShow = true">Show Modal</button>
    <!-- <Modal
     v-if="isModalShow"
     @isModalHide="isModalShow = false"
     title="My modal title (via prop)"
    >
        <template v-slot:title>This is a Modal</template> -->
        <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus alias autem unde impedit! Harum veritatis ut, animi sequi iusto obcaecati?</p>
    </Modal> -->

    <!-- Более элегантный способ через v-model -->
    <!-- <Modal
      v-model="isModalShow"
      title="My modal title (via prop)"
    >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus alias autem unde impedit! Harum veritatis ut, animi sequi iusto obcaecati?</p>
    </Modal> -->

    <component
      :is="showDarkModals ? ModalDark : Modal"
      v-model="isModalShow"
      title="My modal title (via prop)"
      :userData="userData"
    >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus alias autem unde impedit! Harum veritatis ut, animi sequi iusto obcaecati?</p>
    </component>
</div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modals.vue'
import ModalDark from '@/components/ModalsDark.vue'

/*
    props
*/
const props = defineProps({
    userData: {
        type: Object
    }
})

/*
    Modals
*/
const isModalShow = ref(false)
const showDarkModals = ref(false)

</script>

<!--
<script>
import Modal from '@/components/Modals.vue'

export default {
    components: { Modal }
}
</script>
-->
