import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.ts')
  },
  {
    path: '/antDesign',
    name: 'Ant Design of Vue',
    component: () => import('@/views/AntDesign/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router