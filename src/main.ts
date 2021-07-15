import { createApp } from 'vue'
import App from './App'
import { install as installGlobComp } from './components'
import router from './router'
import store, { key } from './store'
import './styles'
import { registerGlobComp } from './utils/registerGlobComp'

// console.log(import.meta.env.VITE_APP_TITLE)

const app = createApp(App)

// antd组件全局注册
registerGlobComp(app)
// 本地全局组件注册
installGlobComp(app)

app.use(router).use(store, key).mount('#app')
