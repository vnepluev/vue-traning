<template>
  <!-- second modal -->
  <modal
      title="Second modal with form"
      @close="$emit('close')"
  >
    <template v-slot:body>
      <p>
        is form valid? {{ !v$.$invalid }}
      </p>

      <form @submit.prevent="handleSubmit(!v$.$invalid)">
        <div class="form-item" :class="{ 'errorInput': v$.name.$invalid && submitted }">
          <label>Name 1:
            <i>valid {{ !v$.name.$invalid }}</i>
          </label>
          <p class="errorText" v-if="v$.name.$invalid && submitted">Field is required!</p>
          <p class="errorText" v-if="v$.name.$invalid && submitted">Name must have at least
            {{ v$.name.$params.minLength.min }}!</p>
          <input
              v-model="name"
              :class="{ error: v$.name.$invalid && submitted }"
              @change="v$.name.$touch()"
          >
        </div>
        <label>E-mail:
          <i>valid {{ !v$.email.$invalid }}</i>
        </label>
        <input
            v-model="email"
            :class="{ error: v$.email.$invalid && submitted }"
            @change="v$.email.$touch()"
        >
        <button class="btn btnPrimary">Submit</button>
      </form>
    </template>
  </modal>
</template>

<script>
import {required, minLength, email} from '@vuelidate/validators';
import modal from "@/components/UI/Modal.vue";
import {useVuelidate} from "@vuelidate/core";

export default {
  // vuelidate
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      name: '',
      email: '',
      submitted: false,
    }
  },
  validations() {
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
  emits: ['close'],
  components: {modal},
  methods: {
    handleSubmit(isFormValid) {
      console.log('form submit');
      this.submitted = true;
      if (!isFormValid) {
        console.log('Form INVALID');
        return;
      }
      console.log('Form valid');
    },
  }
}
</script>

<style lang="scss">
.form-item {
  &.errorText {
    display: none;
    margin-bottom: 8px;
    font-size: 13.4px;
    color: palevioletred;
  }
}

.form-item .errorInput .errorText {
  display: block;
}

input .error {
  border-color: palevioletred;
}
</style>