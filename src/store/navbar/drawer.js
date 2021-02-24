const drawer = {
  namespaced: true,
  state: {
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],
    johin: [
      ["myprofile", "md"],
      ["edit profile", "ep"],
      ["sittings", "s"],
    ],
    pages: [
      ["price", "p", { router: "/mainpages/price" }],
      ["rtl support", "rs", { router: "/componat/rtl" }],
      ["timeline", "t", { router: "/componat/time" }],
      ["login page", "lp", { router: "/mainpages/long" }],
      ["register page", "rp", { router: "/mainpages/regist" }],
      ["lock screen page", "lsp", { router: "/componat/screen" }],
    ],
    components: [
      ["buttons", "b", { router: "/buttons" }],
      ["grid system", "gs", { router: "/grid" }],
      ["tabs", "t", { router: "/tabs" }],
      ["notification", "n", { router: "/not" }],
      ["icons", "ic", { router: "/icon" }],
    ],
    forms: [
      ["regular forms", "rg", { router: "/regular" }],
      ["extend forms", "ef", { router: "/extend" }],
      ["valdetion forms", "vf", { router: "/vald" }],
      ["wizard", "w", { router: "/wizard" }],
    ],
    tabs: [
      ["regular tabs", "rt"],
      ["extend tabs", "et"],
      ["valdetion tabs", "vt"],
      ["wizard", "w"],
    ],
    maps: [
      ["googal maps", "gm", { router: "/mapg" }],
      ["fullscreen maps", "fm", { router: "/fullscreen" }],
    ],
  },
  getters: {
    items(state) {
      return state.items;
    },
    johin(state) {
      return state.johin;
    },
    pages(state) {
      return state.pages;
    },
    components(state) {
      return state.components;
    },
    forms(state) {
      return state.forms;
    },
    tabs(state) {
      return state.tabs;
    },
    maps(state) {
      return state.maps;
    },
  },
  mutations: {},
  actions: {},
};

export default drawer;
