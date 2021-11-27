import { createRouter, createWebHashHistory } from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Item from "./pages/_itemAlias";
import Page404 from "./pages/404";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/:itemAlias",
      name: "itemAlias",
      component: Item,
    },
    // в текущем варианте, все страницы будут подпадать под условие itemAlias
    // код ниже не сработает, тут нужно делать проверку в самом компоненте,
    // а есть ли эдемент в массиве - если нет, выводить 404
    {
      //path: "/:PathMath(.*)*",
      path: "/:CatchAll(.*)",
      component: Page404,
    },
  ],
});

export default routers;
