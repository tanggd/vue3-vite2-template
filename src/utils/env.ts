// 处理env数据
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {}

  for (const envKey of Object.keys(envConf)) {
    let realVal = envConf[envKey]
    if(typeof realVal === 'string') {
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