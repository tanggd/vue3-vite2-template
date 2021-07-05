import { wrapperEnv } from '@/utils/env'
import axios from 'axios'

// console.log(import.meta.env.VITE_APP_AXIOS_TIMEOUT)
// console.log(process.env.NODE_ENV)

const env = wrapperEnv(import.meta.env)


console.log(process.env)

const service = axios.create({
  baseURL: '/',
  timeout: env.VITE_APP_AXIOS_TIMEOUT || 10 * 1000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // TODO:
    // 携带token


    // if (
    //   config.headers['Content-Type'] === 'application/x-www-form-urlencoded' &&
    //   config.data &&
    //   Object.prototype.toString.call(config.data) === '[object Object]'
    // ) {
    //   config.data = qs.stringify(config.data)
    // }

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  res => {
    if (res.status === 200) {
      // 注意 普通数据和流数据的区别
      // 开发自己的code约定逻辑处理
      // 401: 未登录
      // 403 token过期
      // 404请求不存在
      return res.data
    } else {
      return Promise.reject(res)
    }
  },
  err => {
    console.log('网络异常')
    return Promise.reject(err)
  }
)

// 请求封装
export default {
  get(url: string, params: any, options: any) {
    return service.get(url, {
      params,
      options
    })
  },
  
}