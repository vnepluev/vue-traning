<template>
<comment-table :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
  <tbody slot="tbody">
    <tr v-for="comment in comments" :key="comment.id">
      <td><span>{{ comment.name }}</span></td>
      <td><span>{{ comment.text }}</span></td>
      <td>
        <span v-if="comment.status" class="status true">Publish</span>
        <span v-else class="status false">Hidden</span>
      </td>
      <td><span @click="changeComment(comment.id)" class="link">Change Status</span></td>
      <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
    </tr>
  </tbody>
</comment-table>
</template>

<script>
import CommentTable from '~/components/Admin/CommentTable.vue';

export default {
  components: { CommentTable },
  layout: 'admin',
  methods: {
    deleteComment(id) {
      console.log(`Delete comment id -${id}`);
    },
    changeComment(id) {
      console.log(`Change comment id -${id}`);
    },
  },
  data() {
    return {
      comments: [
        { id: 1, name: 'Alex', text: 'Привет, это первый коммент', status: true },
        { id: 2, name: 'Valeriy', text: 'Привет, это второй коммент', status: false },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

</style>