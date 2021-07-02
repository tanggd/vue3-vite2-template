import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/antDesign',
    name: 'AntDesignVue',
    component: () => import('@/views/AntDesign/index.vue')
  },
  {
    path: '/jsxtsx',
    name: 'JSXTSX',
    component: () => import('@/views/JSXTSX/index.tsx')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('@/views/vuex/index.vue')
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import('@/views/axios/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router