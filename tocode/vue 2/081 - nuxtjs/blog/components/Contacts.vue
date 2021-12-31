<template>
<section class="contact">
  <div class="container">
    <h2 class="title">Contact me!</h2>
    <form @submit.prevent="onSubmit" class="contact-form">
      <label for="">Name: </label>
      <input type="text" v-model="user.name">
      <label for="">E-mail: </label>
      <input type="text" v-model="user.email">
      <label for="">Text: </label>
      <textarea v-model="user.text"></textarea>
      <!-- buttons -->
      <div class="controls">
        <button class="btn btnWhite">Submit!</button>
      </div>
    </form>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
  },
}
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4f68f4;
  color: #fff;

  .title {
    color: #fff;
  }

  .controls {
    margin: 30px 0;
  }

  .contact-form {
    min-width: 600px;
    margin: 30px auto;
  }
}
</style>