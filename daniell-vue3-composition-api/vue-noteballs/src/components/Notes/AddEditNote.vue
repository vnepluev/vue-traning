<template>

    <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
            <div class="control">
                <textarea
                    v-model="newNote"
                    @input="$emit('update:modelValue', newNote)"
                    class="textarea"
                    ref="textareaRef"
                    placeholder="Add new note"></textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup>
// https://v3.ru.vuejs.org/ru/guide/migration/v-model.html#%D0%B0%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-v-model
import { ref } from 'vue'

const newNote = ref('')

/**
 * props
 */
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

/**
 * emits
 */
const emit = defineEmits(['update:modelValue'])

/**
 * focus textarea
 */
const textareaRef = ref(null)

const focusTextarea = () => {
    textareaRef.value.focus()
    newNote.value = ''
}

defineExpose({ focusTextarea })
</script>
