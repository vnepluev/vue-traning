import { createStore } from 'vuex'

import shop from './shop'

export const store = createStore({
  modules: {
    a: shop
  },
})
