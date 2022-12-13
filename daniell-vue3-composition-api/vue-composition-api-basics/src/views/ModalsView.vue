<template>
<div class="modals">
    <h1>Modals</h1>
    <button @click="isModalShow = true">Show Modal</button>

    <teleport to=".modals-container">
    <div v-if="isModalShow" class="modal">
        <h2>This is a Modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus alias autem unde impedit! Harum veritatis ut, animi sequi iusto obcaecati?</p>
        <button @click="isModalShow = false">Hide modal</button>
    </div>
    </teleport>
</div>
</template>

<script setup>
import { ref } from 'vue';

/*
    Modals
*/
const isModalShow = ref(false)

</script>

<style scoped>
.modal {
    color: black;
    padding: 10px;
    background-color: beige;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

</style>