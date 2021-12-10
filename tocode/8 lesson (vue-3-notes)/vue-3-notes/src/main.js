import { createApp } from "vue";
import routers from "./routes";
import { store } from "./store";
import App from "./App.vue";

import "../assets/scss/main.scss";

const App1 = createApp(App);

App1.use(routers);
App1.use(store);

App1.mount("#app");
