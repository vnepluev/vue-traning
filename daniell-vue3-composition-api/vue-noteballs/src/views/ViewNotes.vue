<template>
    <div class="notes">

        <add-edit-note
          v-model="newNote"
          ref="addEditNoteRef"
          placeholder="Add a new note"
        >
            <template #buttons>
                <button 
                     @click="addNote"
                     :disabled="!newNote"
                     class="button is-link has-background-success">Add New Note
                </button>
            </template>
        </add-edit-note>

        <Note
          v-for="note in storeNotes.notes"
          :key="note.id"
          :note="note"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'


/*
    store
*/
const storeNotes = useStoreNotes()

/*
    notes
*/
const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
}
</script>
