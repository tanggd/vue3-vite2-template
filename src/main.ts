import { createApp } from 'vue'
import App from './App'
import DemoComponent from './components/DemoComponent'
import router from './router'
import store, { key } from './store'
import './styles'
import { registerGlobComp } from './utils/registerGlobComp'

// console.log(import.meta.env.VITE_APP_TITLE)

const app = createApp(App)

app.use(DemoComponent)

registerGlobComp(app)

app.use(router).use(store, key).mount('#app')
