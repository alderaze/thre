import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "../node_modules/font-awesome-animation/dist/font-awesome-animation.css";
import VAnimateCss from "v-animate-css";

Vue.use(VAnimateCss);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
