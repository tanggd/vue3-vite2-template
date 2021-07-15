// 处理env数据
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {}

  for (const envKey of Object.keys(envConf)) {
    let realVal = envConf[envKey]
    if (typeof realVal === 'string') {
      realVal = realVal.replace(/\\n/g, '\n')
      // 处理为布尔值
      realVal = realVal === 'true' ? true : realVal === 'false' ? false : realVal
      // 处理为数字
      if (envKey === 'VITE_APP_AXIOS_TIMEOUT') {
        realVal = Number(realVal)
      }
    }
    ret[envKey] = realVal
    process.env[envKey] = realVal
  }

  return ret
}

// Browser environment tools
export const inBrowser = typeof window !== 'undefined'
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
export const isPhantomJS = UA && /phantomjs/.test(UA)
export const isFF = UA && UA.match(/firefox\/(\d+)/)
