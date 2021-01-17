const nav = {
  namespaced: true,
  state: {
    mini: false,
  },
  getters: {
    minii(state) {
      return state.mini;
    },
  },
  mutations: {
    setmini(state) {
      return (state.mini = !state.mini);
    },
  },

  actions: {},
};

export default nav;
