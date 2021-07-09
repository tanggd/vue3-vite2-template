import { InjectionKey } from 'vue'
import { createLogger, createStore, Store, useStore as baseUseStore } from 'vuex'
import testModule, { TestState } from './modules/test'

const debug = import.meta.env.NODE_ENV !== 'production'

export interface RootState {
  [k: string]: any
}

type State = RootState & TestState

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
  state() {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

// 注册模块
store.registerModule('testModule', testModule)

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}

export default store
