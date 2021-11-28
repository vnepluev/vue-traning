<template>
  <div>
    <div class="container pt-1">
      <div class="card">
        <h2>Актуальные новости {{ now }}</h2>
      </div>


    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>
