
interface IState {
  count: number
}

const testModule = {
  // namespaced: true,
  state(): IState {
    return {
      count: 2
    }
  },
  getters: {
    count: (state: IState) => state.count,
    count2: (state: IState, getters) => getters.count * 2
  },
  mutations: {
    SET_COUNT(state: IState, payload: number) {
      state.count = payload
    }
  },
  actions: {
    FETCH_COUNT(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const v = +new Date()
          context.commit('SET_COUNT', v)
          resolve(v)
        },1000 * 3)
      })
    }
  },
  modules: {}
}

export default testModule