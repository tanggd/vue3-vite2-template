import { Module } from 'vuex'

export interface TestState {
  count: number
}

const testModule: Module<TestState, void> = {
  // namespaced: true,
  state() {
    return {
      count: 2,
    }
  },
  getters: {
    count: (state) => state.count,
    count2: (state, getters) => getters.count * 2,
  },
  mutations: {
    SET_COUNT(state, payload) {
      state.count = payload
    },
  },
  actions: {
    FETCH_COUNT(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const v = +new Date()
          context.commit('SET_COUNT', v)
          resolve(v)
        }, 1000 * 3)
      })
    },
  },
  modules: {},
}

export default testModule
