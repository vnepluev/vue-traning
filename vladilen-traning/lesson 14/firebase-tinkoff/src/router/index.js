import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // В meta можно добавлять любые данные, которые будут нами использоваться для удобства навигации
    // layout - для какой страницы доступен
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// ограничиваем доступ только для авторизированных
router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth
  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next() // если аутентификация есть, продолжаем выполнение

  } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth') // иначе переадресовываем на логин

  } else {
    next()
  }
})

export default router