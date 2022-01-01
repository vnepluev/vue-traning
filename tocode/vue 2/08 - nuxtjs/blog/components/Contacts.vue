<template>
<section class="contact">
  <div class="container">
    <h2 class="title">Contact me!</h2>
    <form @submit.prevent="onSubmit" class="contact-form">
      <!-- name -->
      <app-input v-model="user.name">Name: </app-input>
      <!-- email -->
      <app-input v-model="user.email" type="email">E-mail: </app-input>
      <!-- textarea -->
      <app-text-area v-model="user.text">Text: </app-text-area>
      <!-- buttons -->
      <div class="controls">
        <app-button btnClass="btnWhite">Submit!</app-button>
      </div>
    </form>
  </div>
</section>
</template>

<script>
import AppButton from "./UI/Controls/Button.vue";
import AppTextArea from "./UI/Controls/TextArea.vue";
import AppInput from "./UI/Controls/Input.vue";

export default {
  components: { AppButton, AppTextArea, AppInput },
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