import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router