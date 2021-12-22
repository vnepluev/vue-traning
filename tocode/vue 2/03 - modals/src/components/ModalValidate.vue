<template>
<!-- second modal -->
<modal
  title="Second modal with form"
  @close="$emit('close')"
>
  <template v-slot:body>
    <form action="" @submit.prevent="onSubmit">
      <!-- name -->
      <div class="form-item" :class="{ 'errorInput': v$.name.$error }">
        <label>Name:</label>
        <p class="errorText" v-if="v$.name.required.$invalid">Field is required!</p>
        <p class="errorText" v-if="v$.name.minLength.$invalid">Name must have at least {{ v$.name.minLength.$params.min }}!</p>
        <input
          v-model="name"
          :class="{ error: v$.name.$error }"
          @change="v$.name.$touch()"
        >
      </div>
      <!-- email -->
      <div class="form-item" :class="{ 'errorInput': v$.email.$error }">
        <label>E-mail:</label>
        <p class="errorText" v-if="v$.email.required.$invalid">Field is required!</p>
        <p class="errorText" v-if="v$.email.email.$invalid">Email is not correct!</p>
        <input
          v-model="email"
          :class="{ error: v$.email.$error }"
          @change="v$.email.$touch()">
      </div>
      <!-- button -->
      <button class="btn btnPrimary">Submit</button>
    </form>
  </template>
</modal>
</template>

<script>

// vuelidate
// https://github.com/vuelidate/vuelidate
// https://vuelidate-next.netlify.app/#getting-started-1
//
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, email } from '@vuelidate/validators';
//
import modal from "@/components/UI/Modal.vue";

export default {
  data() {
    return {
      name: '',
      email: ''
    }
  },
  // vuelidate
  setup () {
    return { v$: useVuelidate() }
  },
  validations () {
    return {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
    }
  },
  //
  methods: {
    onSubmit() {
      this.v$.$touch()
      if (!this.v$.$invalid) {
        const user = {
          name: this.name,
          email: this.email
        }
        // Данные формы успешно отправлены
        console.log(user);
        this.name = '';
        this.email = '';
        this.v$.$reset();
        this.$emit('close');
      }
    }
  },
  emits: ['close'],
  components: { modal }
}
</script>

<style lang="scss">
.form-item .errorText {
    display: none;
    margin-bottom: 8px;
    font-size: 13.4px;
    color: palevioletred;
}

.form-item {
  &.errorInput .errorText {
  display: block;
}
}

input.error {
  border-color: rgb(209, 18, 82);
}
</style>