import Vue from "vue";
import Vuex from "vuex";
import nav from "./navbar/nav";
import mycolor from "./theme/getmaincolor";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    naving: nav,
    mycolor: mycolor,
  },
});
