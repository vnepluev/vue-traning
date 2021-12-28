// require('../assets/img/1.png') -> import png1 from '../assets/img/1.png' -> png1

export default {
  state: {
    messages: [],
    messagesMain: [],
  },
  mutations: {
    setMessage(state, payload) {
      state.messages = payload
    },
    setMessageMain(state, payload) {
      state.messagesMain = payload
    },
  },
  actions: {
    setMessage({commit}, payload) {
      commit('setMessage', payload)
    },
    setMessageMain({commit}, payload) {
      commit('setMessageMain', payload)
    },
  },
  getters: {
    // первым параметром всегда идет state
    // вторым идет getters (имена можем давать произвольные)
    getMessage(state) {
      return state.messages
    },
    getMessageMain(state) {
      return state.messagesMain
    },
  },
}