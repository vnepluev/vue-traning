import { createStore } from 'vuex'

import notify from './notify'

export const store = createStore({
  modules: {
    a: notify
  },
})
