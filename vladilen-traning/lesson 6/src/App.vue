<template>
  <div>
    <div class="container pt-1">
      <div class="card">
        <h2>Актуальные новости {{ now }}</h2>
        <span>{{ openRate }}</span>
      </div>
      <app-news
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :is-open="item.isOpen"
        @open-news="openNews"
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
      openRate: 0,
      news: [
        {
          id: 1,
          title: 'На МКС устранили утечку воздуха. Все работает в штатном режиме.',
          isOpen: true
        },
        {
          id: 2,
          title: 'Россия отмечает международный праздник: QR коды отменены!',
          isOpen: false
        },
        {
          id: 3,
          title: 'Свой день рождения отмечает наш лучший друг, пригласивший к нему в баню!',
          isOpen: false
        }
      ]
    }
  },
  methods: {
    openNews(data) {
      this.openRate++;
      console.log(data); // <open-news>, 42 будет в data
    }
  },
  components: {
    'app-news': AppNews
  }
}
</script>

<style>

</style>
