<template>
  <div>
    <div class="container pt-1">
      <div class="card">
        <h2>Актуальные новости {{ now }}</h2>
      </div>
      <app-news
        v-for="item in news"
        :key="item"
        :title="item"
      ></app-news>

    </div>
  </div>
</template>

<script>
import AppNews from './AppNews.vue'


export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        'На МКС устранили утечку воздуха. Все работает в штатном режиме.',
        'Россия отмечает международный праздник: QR коды отменены!',
        'Свой день рождения отмечает наш лучший друг, пригласивший к нему в баню!',
      ]
    }
  },
  components: {
    'app-news': AppNews
  }
}
</script>

<style>

</style>
