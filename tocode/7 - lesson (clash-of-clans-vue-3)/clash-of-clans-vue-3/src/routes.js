import { createRouter, createWebHashHistory } from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Item from "./pages/_itemAlias";
import Page404 from "./pages/404";
import items from "@/seeders/items.js";

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
      path: "/404",
      name: "page404",
      component: Page404,
    },
    {
      path: "/:itemAlias",
      name: "itemAlias",
      component: Item,
      beforeEnter: (to, from, next) => {
        //const alias = this.$route.params.itemAlias;
        const find = items.find((el) => el.alias === to);
        if (find !== undefined) {
          next({ name: "itemAlias" });
        } else next({ name: "page404" });
      },
    },
    // в текущем варианте, все страницы будут подпадать под условие itemAlias
    // код ниже не сработает, тут нужно делать проверку в самом компоненте,
    // а есть ли элемент в массиве - если нет, выводить 404
    // 404 https://vueschool.io/lessons/how-to-create-a-404-not-found-route-and-page-with-vue-router
    //{
    //path: "/:PathMath(.*)*",
    //  path: "/:CatchAll(.*)",
    //  component: Page404,
    //},
  ],
});

export default routers;
