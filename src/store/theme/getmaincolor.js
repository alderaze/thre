import color from "./maincolor";
const maincolor = {
  state: {
    color: color,
    mycol: [],
    maincolor: "primary",
    maintextcolor: [
      "primary--text",
      "secondary--text",
      "accent--text",
      "error--text",
      "warning--text",
      "info--text",
      "success--text",
    ],
    groundnav: "",
    colortext: "red--text",
  },
  getters: {
    box(state) {
      return state.color.theme.themes.light;
    },
    maincolor(state) {
      return state.maincolor;
    },
    colortext(state) {
      return state.colortext;
    },
    allground(state) {
      return state.color.img;
    },
    groundnav(state) {
      return state.groundnav;
    },
    ground1(state) {
      return state.color.img[0];
    },
    ground2(state) {
      return state.color.img[1];
    },
    ground3(state) {
      return state.color.img[2];
    },
  },

  mutations: {
    color1(state) {
      for (let i in state.color.theme.themes.light) {
        state.mycol.push(i);
      }
      return (state.maincolor = state.mycol[0]);
    },

    color2(state) {
      for (let i in state.color.theme.themes.light) {
        state.mycol.push(i);
      }
      return (state.maincolor = state.mycol[1]);
    },
    color3(state) {
      for (let i in state.color.theme.themes.light) {
        state.mycol.push(i);
      }
      return (state.maincolor = state.mycol[2]);
    },
    color4(state) {
      for (let i in state.color.theme.themes.light) {
        state.mycol.push(i);
      }
      return (state.maincolor = state.mycol[3]);
    },
    color5(state) {
      for (let i in state.color.theme.themes.light) {
        state.mycol.push(i);
      }
      return (state.maincolor = state.mycol[4]);
    },
    color6(state) {
      for (let i in state.color.theme.themes.light) {
        state.mycol.push(i);
      }
      return (state.maincolor = state.mycol[5]);
    },
    color7(state) {
      for (let i in state.color.theme.themes.light) {
        state.mycol.push(i);
      }
      return (state.maincolor = state.mycol[6]);
    },

    colortext1(state) {
      return (state.colortext = state.maintextcolor[0]);
    },
    colortext2(state) {
      return (state.colortext = state.maintextcolor[1]);
    },
    colortext3(state) {
      return (state.colortext = state.maintextcolor[2]);
    },
    colortext4(state) {
      return (state.colortext = state.maintextcolor[3]);
    },
    colortext5(state) {
      return (state.colortext = state.maintextcolor[4]);
    },
    colortext6(state) {
      return (state.colortext = state.maintextcolor[5]);
    },
    colortext7(state) {
      return (state.colortext = state.maintextcolor[6]);
    },
    setgroundnav1(state) {
      return (state.groundnav = state.color.img[0]);
    },
    setgroundnav2(state) {
      return (state.groundnav = state.color.img[1]);
    },
    setgroundnav3(state) {
      return (state.groundnav = state.color.img[2]);
    },
  },
  actions: {},
};
export default maincolor;
