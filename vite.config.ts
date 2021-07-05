import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import styleImport from 'vite-plugin-style-import'
import { wrapperEnv } from './src/utils/wrapperEnv'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  // command：serve、build 可以基于这个字段配置不同的配置
  // const isBuild = command === 'build'
  // console.log(isBuild, command)
  
  const root = process.cwd()
  const viteEnv = loadEnv(mode, root)
  // console.log(viteEnv)
  const { VITE_APP_BUILD_OUTDIR, VITE_DROP_CONSOLE } = wrapperEnv(viteEnv)
  // 
  

  return defineConfig({
    root,
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
  
      vueJsx({
        mergeProps: false,
        enableObjectSlots: false
      })
    ],
  
    build: {
      // target: 'modules',
      target: 'es2015',
      outDir: VITE_APP_BUILD_OUTDIR,
      // rollupOptions: {},
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      // chunk 大小警告的限制
      chunkSizeWarningLimit: 2000,
    },

    define: {
      'process.env': {}
    },
  
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '#': resolve(__dirname, 'types')
      }
    },
  
    server: {
      proxy: {
        '/githubApi': {
          target: 'https://api.github.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/githubApi/, '')
        },
      }
    }
  })
}
