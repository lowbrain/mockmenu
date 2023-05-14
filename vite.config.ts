import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { VitePWA } from 'vite-plugin-pwa'
const pwacnf = {
  devOptions: { enabled: true }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA(pwacnf)
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
