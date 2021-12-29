import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue';
import Notify from '../pages/GithubFinder.vue';
import NotFound from '../pages/404.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/github-finder',
    name: 'github-finder',
    component: Notify
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