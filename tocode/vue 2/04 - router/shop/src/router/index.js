import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue';
import Shop from '../pages/Shop.vue';
import NotFound from '../pages/404.vue';
import Product from '../pages/Product.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/shop/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router