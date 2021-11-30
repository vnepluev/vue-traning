<template>
  <div>
    <div class="container pt-1">
      <div class="card">
        <h2>Актуальные новости {{ now }}</h2>
        <span><strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
      </div>
      <app-news
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :is-open="item.isOpen"
        :was-read="item.wasRead"
        @open-news="openNews"
        @read-news="readNews"
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
      readRate: 0,
      news: [
        {
          id: 1,
          title: 'На МКС устранили утечку воздуха. Все работает в штатном режиме.',
          isOpen: true,
          wasRead: false
        },
        {
          id: 2,
          title: 'Россия отмечает международный праздник: QR коды отменены!',
          isOpen: false,
          wasRead: false
        },
        {
          id: 3,
          title: 'Свой день рождения отмечает наш лучший друг, пригласивший к нему в баню!',
          isOpen: false,
          wasRead: false
        }
      ]
    }
  },
  methods: {
    openNews(data) {
      this.openRate++;
      console.log(data); // <open-news>, 42 будет в data
    },
    readNews(id) {
      // Vladilen 01:00:00
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    }
  },
  components: {
    'app-news': AppNews
  }
}
</script>

<style>

</style>
