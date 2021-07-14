import { App, Plugin } from 'vue'

export const withInstall = <T>(comp: T) => {
  const c = comp as any
  c.install = function (app: App) {
    app.component(c.name, comp)
  }

  return comp as T & Plugin
}
