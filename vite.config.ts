import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import TurboConsole from 'unplugin-turbo-console/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    TurboConsole({
      prefix: '👇👇👇',
      suffix: '👆👆👆',
      inspector: false,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
