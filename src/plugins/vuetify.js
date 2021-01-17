import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa",
  },
  theme: {
    themes: {
      dark: {
        primary: "#f44336",
        secondary: "#9c27b0",
        accent: "#e91e63",
        error: "#03a9f4",
        warning: "#2196f3",
        info: "#009688",
        success: "#4caf50",
      },
    },
  },
});
