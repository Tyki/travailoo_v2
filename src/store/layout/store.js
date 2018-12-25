import * as types from './types'

const state = {
  loginModalOpen: false
}

const mutations = {
  [types.SHOW_LOGIN_MODAL] (state, showModal) {
    state.loginModalOpen = showModal
  }
}

const actions = {
  // Actions here
}

export default {
  state,
  mutations,
  actions
}
