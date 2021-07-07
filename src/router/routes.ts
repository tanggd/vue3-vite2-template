import Layout from '@/layout'
import {
  // LaptopOutlined,
  // NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo',
    name: 'demo',
    component: Layout,
    redirect: '/demo/home',
    meta: {
      icon: UserOutlined,
    },
    children: [
      {
        path: '/demo/home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          icon: UserOutlined,
        },
      },
      {
        path: '/demo/ant-design',
        name: 'AntDesignVue',
        component: () => import('@/views/AntDesign/index.vue'),
      },
      {
        path: '/demo/jsx-tsx',
        name: 'JSXTSX',
        component: () => import('@/views/JSXTSX'),
      },
      {
        path: '/demo/vuex',
        name: 'Vuex',
        component: () => import('@/views/Vuex/index.vue'),
      },
      {
        path: '/demo/axios',
        name: 'Axios',
        component: () => import('@/views/Axios/index.vue'),
      },
      {
        path: '/demo/image',
        name: 'Image',
        component: () => import('@/views/Image'),
      },
      {
        path: '/demo/css-module',
        name: 'CssModule',
        component: () => import('@/views/CssModule'),
      },
    ],
  },
]

export default routes
