<template>
<div class="navbar">
  <nav>
    <h3>Online bank</h3>
  </nav>
  <ul class="navbar-menu">
    <li><router-link to="/">Заявки</router-link></li>
    <li><router-link to="/">Помощь</router-link></li>
    <li><a href="/">Сообщения</a></li>
    <li><a href="#" @click.prevent="logout">Выход</a></li>
  </ul>
</div>
</template>

<script>
import { useRouter } from "vue-router"
import { useStore } from "vuex"

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    return {
      logout: () => {
        store.commit('auth/logout')
        router.push('/auth')
      }
    }
  }
}
</script>

<style>

</style>