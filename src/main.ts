import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Frank from "./components/Frank.vue";
import Yin from "./components/Yin.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Frank,
    },
    {
      path: "/xxx",
      component: Yin,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
