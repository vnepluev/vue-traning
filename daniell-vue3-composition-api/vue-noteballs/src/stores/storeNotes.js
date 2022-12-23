import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [
        {
            id: 'id1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem velit.'
        },
        {
            id: 'id2',
            content: 'id2, Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem velit.'
        }
    ]
  }),
  actions: {
    addNote(newNoteContent) {
        const currentDate = new Date().getTime()
        const id = currentDate.toString()

        const note = {
            id,
            content: newNoteContent
        }

        this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
        this.notes = this.notes.filter((note) => {
            return note.id !== idToDelete
        })
    },
    updateNote(id, content) {
        const index = this.notes.findIndex((note) => note.id === id)
        this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent(state) {
        return (id) => {
            return state.notes.filter((note) => note.id === id)[0].content
        }
    }
  }
})
