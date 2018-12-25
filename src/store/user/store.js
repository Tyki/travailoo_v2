import * as types from './types'

const state = {
  jwt: true
}

const mutations = {
  [types.SET_USER_JWT] (state, jwt) {
    state.jwt = jwt
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
