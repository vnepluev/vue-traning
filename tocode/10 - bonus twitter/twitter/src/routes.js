import { createRouter, createWebHashHistory } from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from "./pages/home.vue";
import AboutPage from "./pages/about.vue";
import Page404 from "./pages/404.vue";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
    {
      //path: "/:PathMath(.*)*",
      path: "/:CatchAll(.*)",
      component: Page404,
    },
  ],
});

export default routers;
