import Vue from 'vue'
import Vuex from 'vuex'
import LayoutStore from './layout/store'
import UserStore from './user/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    layout: LayoutStore,
    user: UserStore
  }
})

export default store
