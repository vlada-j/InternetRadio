import Vue from 'vue'
import Vuex from 'vuex'
import app from './app/index'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      // then we reference it
      app
    }
  })
  // app.store = Store
  return Store
}
