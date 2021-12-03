<template>
    <div class="form-control" :class="{invalid: error}">
        <label :for="id"> {{ label }} </label>
        <input
         type="text"
         :id="id"
         :placeholder="placeholder"
         :value="modelValue"
         @input="onChange"
        >
        <small v-if="error">{{ error }}</small>
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
        placeholder: String,
        error: String,
        label: String,
    },
    data() {
        return {
            id: 'input-' + Math.random()
        }
    },
    methods: {
        onChange(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    }
}
</script>

<style lang="sass">

</style>