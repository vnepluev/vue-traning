<template>
<section class="new-comment">
  <div class="container">
    <form @submit.prevent="onSubmit" class="contact-form">
      <label for="">Name: </label>
      <input type="text" v-model="comment.name">
      <label for="">Text: </label>
      <textarea v-model="comment.text"></textarea>
      <!-- buttons -->
      <div class="controls">
        <app-button>Submit!</app-button>
      </div>
    </form>
  </div>
</section>
</template>

<script>
import AppButton from '../UI/Controls/Button.vue'

export default {
  props: {
    postId: {
      type: String,
      reguired: true
    }
  },
  data() {
    return {
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: true,
        ...this.comment
      })
        .then(() => {
          console.log('Comment Submitted!', this.comment)
        })
        .catch(e => console.log(e))
    },
  },
  components: { AppButton }
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;

  .controls {
    margin: 30px 0;
  }

  .contact-form {
    min-width: 600px;
    margin: 30px auto;
  }
}
</style>