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
              @click="handleSaveClicked"
              :disabled="!noteContent"
            >Save Note
            </button>
        </template>
        </add-edit-note>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'

/**
 * router
 */
const route = useRoute()
const router = useRouter()

/**
 * store
 */
const storeNotes = useStoreNotes()

/**
 * note
 */
const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

/**
 * save clicked
 */
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push('/')
}

</script>
