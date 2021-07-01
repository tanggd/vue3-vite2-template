import axios from 'axios'
import qs from 'qs'

const service = axios.create({
  baseURL: '/',
  timeout: 60 * 1000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded' &&
      config.data &&
      Object.prototype.toString.call(config.data) === '[object Object]'
    ) {
      config.data = qs.stringify(config.data)
    }

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// TODO: 可配置，不使用 返回 公共处理
// 响应拦截器
let alerted = false
service.interceptors.response.use(
  res => {
    if (res.status === 200) {
      if ((res.config as AxiosRequestConfigAll).getAllResponse) {
        return res.data
      }
      const { code, data, status } = res.data
      // code === 0 兼容监督指挥那边的接口
      if (code === 200 || status || code === 0) {
        return data
      } else if ([401, 403].includes(code)) {
        return Promise.reject(data)
      } else if (code === 500) {
        return Promise.reject(data)
      } else {
        return res
      }
    } else {
      return Promise.reject(res)
    }
  },
  err => {
    console.log('网络异常')
    return Promise.reject(err)
  }
)