<template>
    <div class="notes">

        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea
                     v-model="newNote"
                     class="textarea"
                     ref="newNoteRef"
                     placeholder="Add new note"></textarea>
                </div>
                </div>

                <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button 
                     @click="addNote"
                     :disabled="!newNote"
                     class="button is-link has-background-success">Add New Note</button>
                </div>
            </div>
        </div>

        <Note
          v-for="note in storeNotes.notes"
          :key="note.id"
          :note="note"
          @deleteClicked="deleteNote"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import Note from '@/components/Notes/Note.vue'

/*
    store
*/
const storeNotes = useStoreNotes()

/*
    notes
*/
const newNote = ref('')
const newNoteRef = ref(null)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    newNoteRef.value.focus()
}

/**
 * delete Note
 */
const deleteNote = (idToDelete) => {
    notes.value = notes.value.filter((note) => {
        return note.id !== idToDelete
    })
}
</script>
