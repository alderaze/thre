import Vue from "vue";
import VueRouter from "vue-router";
import page from "./pages";
import component from "./component";
import form from "./forms";
import map from "./map";
Vue.use(VueRouter);

const routes = [...page, ...component];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
