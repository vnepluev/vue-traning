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
                    <td>XXX</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useStoreNotes } from '../stores/storeNotes'

/**
 * store
 */
const storeNotes = useStoreNotes()

</script>
