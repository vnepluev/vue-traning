<template>
    <div class="card mb-4">
        <header class="card-header">
            <button class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
             :to="`/editNote/${note.id}`"
             class="card-footer-item"
            >Edit</RouterLink>
            <a
              href="#"
              @click.prevent="modals.deleteNote = true"
              class="card-footer-item"
            >Delete</a>
        </footer>
        <ModalDeleteNote
          v-if="modals.deleteNote"
          v-model="modals.deleteNote"
          :noteId="note.id"
        />
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'

/*
    props
*/
const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

/**
 * store
 */
const storeNotes = useStoreNotes()

/**
 * character length
 */
const characterLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character'
    return `${ length } ${ description }`
})

/**
 * modals
 */
const modals = reactive({
    deleteNote: false,
})

</script>
