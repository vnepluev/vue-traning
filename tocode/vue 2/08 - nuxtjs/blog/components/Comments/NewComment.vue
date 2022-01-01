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
import AppButton from "../UI/Controls/Button.vue";

export default {
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
      console.log(this.comment);
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