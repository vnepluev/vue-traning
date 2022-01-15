const TOKEN_KEY = "jwt-token"

export default {
  // для того, чтобы создать локальный стейт для этого модуля
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY)
    }
  },
  mutations: {
    // всегда синхронный код
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  },
  actions: {
    async login({ commit }, payload) {
      commit("setToken", "test token");
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuthenticated(_, getters) {
      // true / false
      return !!getters.token;
    },
  },
};
