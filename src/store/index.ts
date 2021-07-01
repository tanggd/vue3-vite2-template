import { createStore } from 'vuex'
import testModule from './modules/test'

const store = createStore({})

// 注册模块
store.registerModule('testModule', testModule)

export default store
