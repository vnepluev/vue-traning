<template>
    <div :class="type" class="alert">
        <p class="alert-title">{{ title }}</p>
        <p>{{ text }}</p>
        <button class="btn" :class="type" v-if="closable" @click="$emit('close')">Закрыть</button>
    </div>
</template>

<script>
export default {
    emits: ['close'],
    props: {
        title: String,
        text: String,
        closable: {
            type: Boolean,
            default: false,
            required: false
        },
        type: {
            type: String,
            default: 'primary',
            required: false,
            validator(value) {
                return ['primary', 'danger', 'warning'].includes(value);
            }
        }
    }
}
</script>

<style lang="sass">

</style>