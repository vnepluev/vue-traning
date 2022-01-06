<template>
<client-only>
  <comment-table :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span>{{ comment.name }}</span></td>
        <td><span>{{ comment.text }}</span></td>
        <td>
          <span v-if="comment.publish" class="status true">Publish</span>
          <span v-else class="status false">Hidden</span>
        </td>
        <td><span @click="changeComment(comment)" class="link">Change Status</span></td>
        <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
      </tr>
    </tbody>
  </comment-table>
</client-only>
</template>

<script>
import axios from 'axios';
import CommentTable from '~/components/Admin/CommentTable.vue';

export default {
  components: { CommentTable },
  layout: 'admin',
  methods: {
    loadComments() {
      axios.get('https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/comments.json')
        .then((res) =>{
          const commentsArray = []
          Object.keys(res.data).forEach(key => {
            const comment = res.data[key]
            commentsArray.push({...comment, id: key})
          })
          this.comments = commentsArray
        })
    },
    deleteComment(id) {
      // console.log(`Delete comment id -${id}`);
      axios
        .delete(`https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/comments/${id}.json`)
          .then((res)=> {
            this.loadComments()
          })
    },
    changeComment(comment) {
      // console.log(`Change comment id -${id}`);
      comment.publish = !comment.publish
      axios
        .put(`https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/comments/${comment.id}.json`, comment)
    },
  },
  mounted() {
    this.loadComments()
  },
  data() {
    return {
      comments: [],
    }
  },
}
</script>

<style lang="scss" scoped>

</style>