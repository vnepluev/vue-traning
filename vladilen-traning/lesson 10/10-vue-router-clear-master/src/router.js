import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Forget from '@/views/Forget.vue';
import Dashboard from '@/views/Dashboard.vue';
import Mail from '@/views/Mail.vue';
import AppEmailBody from '@/components/AppEmailBody.vue';
import NotFound from '@/views/NotFound.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login', // localhost:port/login
      alias: '/', // ['/baz', 'baz-alias'] если нужно много алиасов, перечисляем их в массиве
      component: Login,
    },
    {
      path: '/forget',
      component: Forget,
    },
    {
      path: '/dashboard',
      component: Dashboard,
    },
    {
      path: '/mail', // mail/2
      component: Mail,
      children: [
        {
          path: ':mailId?',
          component: AppEmailBody,
          props: true
        }
      ]
    },
    {
      path: '/:notFound(.*)',
      // redirect: '/login'
      component: NotFound,
    },
  ],
  // переопределяем класс по умолчанию для активных ссылок
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
