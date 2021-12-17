<template>
  <div class="card">
    <h1>Привет на главной</h1>

    <p>Тут ты можешь перейти на любую страницу и почитать заранее заготовленные письма :)</p>

    <router-link :to="{name: 'email'}">To Mail</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter() {
        console.log('beforeRoutEnter');
  },
  // если нужно остановить переход на другую страницу
  beforeRouteLeave(to, from, next) {
    const answer = confirm('Уверены, что хотите перейти?');
    if (answer) {
      next()
    } else {
      next(false) // либо можно не вызывать, будет работать одинаково
    }
  }
}
</script>

<style scoped>

</style>