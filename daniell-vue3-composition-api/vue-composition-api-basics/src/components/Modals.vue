<template>
    <teleport to=".modals-container">
        <div v-if="modelValue" class="modal">
            <!-- <h2><slot name="title" /></h2> -->
            <h2>{{ title }}</h2>
            <!-- или  -->
            <h2>{{ props.title }}</h2>
            <slot />
            <!-- <button @click="$emit('isModalHide')">Hide modal</button> -->
            <!-- <button @click="$emit('update:modelValue', false)">Hide modal</button> -->
            <button @click="handleButtonClick">Hide modal function</button>
            <div>
                User name is: {{ userData.name }} <br>
                User data2 is: {{ userData2.userName }}
            </div>
        </div>
    </teleport>
</template>

<!-- -->
<script setup>
import { inject } from 'vue'
/* 
    props
*/
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No title'
    },
    userData: {
        type: Object
    }
})
// Обращение в коде к пропсам только так
// props.title

/*
    emits
*/
// const emits = defineEmits(['isModalHide'])
const emits = defineEmits(['update:modelValue'])

//
const userData2 = inject('userData2')

// использование emits в коде
// const handleButtonClick = () => emits('isModalHide')
const handleButtonClick = () => emits('update:modelValue', false)

</script>

<!-- <script>
export default {
    emits: [isModalHide],
    props: {
        title: {
            type: String,
            default: 'No title'
        }
    }
}
</script>
-->

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