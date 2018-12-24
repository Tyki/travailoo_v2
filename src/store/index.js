import Vue from 'vue'
import Vuex from 'vuex'
import LayoutStore from './layout/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    layout: LayoutStore
  }
})

export default store
