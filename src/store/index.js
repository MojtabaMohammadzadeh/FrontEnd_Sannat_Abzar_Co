import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import auth from './auth'
import cart from './cart'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      cart
    },

    strict: process.env.DEBUGGING
  });

  return Store
})
