import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PiniaView from '@/views/PiniaView.vue'
import AboutView from '@/views/AboutView.vue'
import ModalsView from '@/views/ModalsView.vue'
import PostsView from '@/views/PostsView.vue'
import PostDetailView from '@/views/PostDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: PostDetailView
    }
  ]
})

export default router
