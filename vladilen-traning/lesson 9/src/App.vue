<template>
  <div class="container">
    <!-- :closable="true" -->
    <app-alert
      v-if="alert"
      title="Внимание!"
      text="Это очень важное сообщение, будьте бдительны!"
      closable
      @close="alert = false"
    ></app-alert>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть сообщение' : 'Показать сообщение' }}</button>
    </div>

    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from '@/components/AppAlert.vue';
import AppBlock from '@/components/AppBlock.vue';

export default {
  components: { AppAlert, AppBlock }
}
</script>

