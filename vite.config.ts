import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import vuetify from 'vite-plugin-vuetify'

import { VitePWA } from 'vite-plugin-pwa'
const pwacnf = {
  devOptions: { enabled: true }
}

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => {
  process.env.VITE_APP_VERSION = require("./package.json").version
  process.env.VITE_APP_BUILDTS = (new Date()).toLocaleString()
  const env = loadEnv(mode, process.cwd(), '')
  const devtoolFlg = mode.indexOf("development") === 0 ? true : false
  return {
    base: env.APP_PATH,
    plugins: [
      vue(),
      VitePWA(pwacnf),
      vuetify()
    ],
    define: {
      __VUE_PROD_DEVTOOLS__: devtoolFlg
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
