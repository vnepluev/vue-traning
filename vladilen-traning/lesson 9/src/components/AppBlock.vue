<template>
  <div class="container">
    <!-- :closable="true" -->
    <app-alert
      v-if="alert"
      title="Внимание!"
      text="Это очень важное сообщение, будьте бдительны!"
      type="danger"
      @close="alert = false"
    ></app-alert>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть сообщение' : 'Показать сообщение' }}</button>
    </div>
  </div>
</template>

<script>
import AppAlert from '@/components/AppAlert.vue';

export default {
  components: { AppAlert }
}
</script>

