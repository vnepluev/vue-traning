<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ storeNotes.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of Characters (of all notes)</td>
                    <td>{{ storeNotes.totalCharactersCount }}</td>
                </tr>
            </tbody>
        </table>
        <input
          type="text"
          class="input"
          placeholder="Do you love footballs?"
        >
    </div>
</template>

<script setup>
import { useStoreNotes } from '../stores/storeNotes'

/**
 * store
 */
const storeNotes = useStoreNotes()

</script>
