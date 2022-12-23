<template>
    <div class="edit-note">

        <add-edit-note
          ref="addEditNoteRef"
          v-model="noteContent"
          :bgColor="'link'"
          placeholder="Edit note"
          label="Edit Note"
        >

        <template #buttons>
            <button
                @click="$router.back()" 
                class="button is-link is-light mr-2"
            >Cancel
            </button>
            <button 
                class="button is-link has-background-link"
                :disabled="!noteContent"
            >Save Note
            </button>
        </template>
        </add-edit-note>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

/**
 * note
 */
const noteContent = ref('')
</script>
