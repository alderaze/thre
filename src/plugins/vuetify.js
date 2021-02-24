import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: false,
  breakpoint: { mobileBreakpoint: 960 },
  icons: {
    iconfont: "fa",
  },
  theme: {
    themes: {
      light: {
        background: "#eeeeee",
      },
      dark: {
        grey: "#444444",
      },
    },
  },
});
