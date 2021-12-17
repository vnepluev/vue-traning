import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Forget from '@/views/Forget.vue';
import Dashboard from '@/views/Dashboard.vue';
// import Mail from '@/views/Mail.vue';
import AppEmailBody from '@/components/AppEmailBody.vue';
import NotFound from '@/views/NotFound.vue';

// эта страница будет распологаться в отдельном чанге
// сразу будет не вызвана
// динамическая загрузка (не занимает места в осном коде)
const Mail = () => import('@/views/Mail.vue');

const router = createRouter({
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
      // мета параметры доступные роутеру, называть можем как угодно
      meta: {
        cantEnter: true
      },
      // можем давать имена роутам, т.е. внутренние названия для роутов
    },
    {
      path: '/dashboard',
      name: 'home',
      component: Dashboard,
      // методы вызывается когда мы хотим попасть на страницу
      beforeEnter() {
        console.log('beforeEnter');
      }
    },
    {
      path: '/mail', // mail/2
      name: 'email',
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

// Будет вызван каждый раз при переключении на новую страницу
// to - куда делаем навигацию
// from - откуда пришли
// next - функция позволяющая либо продолжить, либо остановить
// процесс перехода по роутеру
router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  if (to.meta.cantEnter) {
    // next('/dashboard'); // либо false - тогда переход будет не доступен
    next({ name: 'home' });
  }
  else next();
})

// метод вызывается когда мы уже перешли на страницу
// в нем мы можем собирать какую-то аналитику о том,
// какие страницы пользователь посещал
router.afterEach((to, from) => {
})

export default router;