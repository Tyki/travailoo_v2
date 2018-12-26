import * as types from './types'

const state = {
  jwt: null
}

const mutations = {
  [types.SET_USER_JWT] (state, jwt) {
    state.jwt = jwt
  }
}

const actions = {
  // Actions here
  [types.LOG_USER] ({commit}, payload) {
    // TODO : login
    return new Promise((resolve, reject) => {
      commit(types.SET_USER_JWT, true)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}
