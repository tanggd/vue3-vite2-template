import { registerGlobComp } from '@/utils/registerGlobComp'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
registerGlobComp(app)

app.use(router)
app.mount('#app')
