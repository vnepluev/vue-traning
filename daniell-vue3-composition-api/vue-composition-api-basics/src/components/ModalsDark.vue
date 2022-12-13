<template>
    <teleport to=".modals-container">
        <div v-if="modelValue" class="modal-dark">
            <h2>{{ title }}</h2>
            <h2>{{ props.title }}</h2>
            <slot />
            <button @click="handleButtonClick">Hide modal function</button>
        </div>
    </teleport>
</template>

<!-- -->
<script setup>
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
    }
})
/*
    emits
*/
const emits = defineEmits(['update:modelValue'])

const handleButtonClick = () => emits('update:modelValue', false)

</script>

<style scoped>
.modal-dark {
    padding: 10px;
    color: whitesmoke;
    background-color: #333;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>