import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'ant-design-vue',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index.css`
        }
      }]
    }),
    vueJsx({})
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
