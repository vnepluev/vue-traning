import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue';
import Users from '../pages/Users.vue';
import NotFound from '../pages/404.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/users',
    name: 'users',
    component: Users
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