import type { App } from 'vue'
import * as components from './components'
export * from './components'

export const install = function (app: App) {
  const coms = components as any
  Object.keys(components).forEach((key) => {
    const component = coms[key]
    if (component.install) {
      app.use(component)
    }
  })

  // 命令式组件
  // app.config.globalProperties.$xxx = components.xxx

  return app
}

export default {
  install,
}
