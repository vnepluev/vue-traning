<template>

    <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
            <div class="control">
                <textarea
                    v-model="newNote"
                    @input="$emit('update:modelValue', newNote)"
                    class="textarea"
                    ref="newNoteRef"
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

</script>