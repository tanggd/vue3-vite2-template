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
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/antDesign',
    name: 'Ant Design of Vue',
    component: () => import('@/views/antDesign/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router