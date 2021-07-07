// 注册项目需要的组件，按需
import { Button, Input, Space } from 'ant-design-vue'
import type { App } from 'vue'

const compList = [Button, Input, Space]

export function registerGlobComp(app: App) {
  compList.forEach((comp) => {
    app.component(comp.name, comp)
  })
}
