<template>
<div class="modals">
    <h1>Modals</h1>
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
    <Modal
      v-model="isModalShow"
      title="My modal title (via prop)"
    >
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus alias autem unde impedit! Harum veritatis ut, animi sequi iusto obcaecati?</p>
    </Modal>
</div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modals.vue'

/*
    Modals
*/
const isModalShow = ref(false)

</script>

<!--
<script>
import Modal from '@/components/Modals.vue'

export default {
    components: { Modal }
}
</script>
-->
