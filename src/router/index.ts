import Layout from '@/layout'
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    children: []
    // redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/ant-design',
    name: 'AntDesignVue',
    component: () => import('@/views/AntDesign/index.vue')
  },
  {
    path: '/jsx-tsx',
    name: 'JSXTSX',
    component: () => import('@/views/JSXTSX')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/Vuex/index.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/Axios/index.vue')
  },
  {
    path: '/image',
    name: 'Image',
    component: () => import('@/views/Image')
  },
  {
    path: '/css-module',
    name: 'CssModule',
    component: () => import('@/views/CssModule/index')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router