<template>
<form class="card" @submit.prevent="onSubmit">
  <h1>Войти в систему</h1>
  <!-- класс invalid будет добавлен, если есть ошибка -->
  <div :class="['form-control', {invalid: eError}]">
    <label for="email">E-mail</label>
    <input type="email" id="email" v-model="email" @blur="eBlur">
    <small v-if="eError">{{ eError }}</small>
  </div>

  <div :class="['form-control', {invalid: pError}]">
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" @blur="pBlur">
    <small v-if="pError">{{ pError }}</small>
  </div>

  <button class="btn primary" type="submit" :disabled="isSubmitting || isTooManyAttempts">Login</button>
  <div class="text-danger" v-if="isTooManyAttempts">Вы слишком часто планируете войти в систему, попробуйте позже</div>

</form>
</template>

<script>
import { useLoginForm } from "../use/login-form"

export default {
  setup() {
    return {...useLoginForm()}
  }
}
</script>

<style lang="scss" scoped>

</style>