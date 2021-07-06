import Layout from '@/layout'
import {
  // LaptopOutlined,
  // NotificationOutlined,
  UserOutlined
} from '@ant-design/icons-vue'
import { RouteRecordRaw } from 'vue-router'

type ExtendRouteRecordRaw = RouteRecordRaw & { 
  zname?: string
  icon?: any,
  children?: Array<ExtendRouteRecordRaw>
}

const routes: Array<ExtendRouteRecordRaw> = [
  {
    path: '/demo',
    name: 'demo',
    icon: UserOutlined,
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        icon: UserOutlined,
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: 'ant-design',
        name: 'AntDesignVue',
        component: () => import('@/views/AntDesign/index.vue')
      },
      {
        path: 'jsx-tsx',
        name: 'JSXTSX',
        component: () => import('@/views/JSXTSX')
      },
      {
        path: 'vuex',
        name: 'Vuex',
        component: () => import('@/views/Vuex/index.vue')
      },
      {
        path: 'axios',
        name: 'Axios',
        component: () => import('@/views/Axios/index.vue')
      },
      {
        path: 'image',
        name: 'Image',
        component: () => import('@/views/Image')
      },
      {
        path: 'css-module',
        name: 'CssModule',
        component: () => import('@/views/CssModule')
      },
    ]
  },
]

export default routes