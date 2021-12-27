// require('../assets/img/1.png') -> import png1 from '../assets/img/1.png' -> png1

export default {
  state: {
    messages: [],

  },
  mutations: {
    setMessage(state, payload) {
      state.messages = payload
    }
  },
  actions: {
    setMessage({commit}, payload) {
      commit('setMessage', payload)
    },
  },
  getters: {
    // первым параметром всегда идет state
    // вторым идет getters (имена можем давать произвольные)
    getMessage(state) {
      return state.messages
    },
  },
}