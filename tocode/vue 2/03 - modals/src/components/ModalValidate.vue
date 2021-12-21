<template>
<!-- second modal -->
<modal
  title="Second modal with form"
  @close="$emit('close')"
>
  <template v-slot:body>
    <form action="" @submit.prevent="">
      <div class="form-item" :class="{ 'errorInput': v$.name.$error }">
        <label>Name:</label>
        <p class="errorText" v-if="!v$.name.required">Field is required!</p>
        <p class="errorText" v-if="!v$.name.minLength">Name must have at least {{ v$.name.$params.minLength.min }}!</p>
        <input
          v-model="name"
          :class="{ error: v$.name.$error }"
          @change="v$.name.$touch()"
        >
      </div>
      <label>E-mail:</label>
      <input v-model="email">
      <button class="btn btnPrimary">Submit</button>
    </form>
  </template>
</modal>
</template>

<script>
import { required, minLength, email } from '@vuelidate/validators';
import modal from "@/components/UI/Modal.vue";

export default {
  data() {
    return {
      name: '',
      email: ''
    }
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
  emits: ['close'],
  components: { modal }
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