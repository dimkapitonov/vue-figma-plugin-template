import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(),
    UnoCSS(),
    vueDevTools(),
  ],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        ui: resolve(__dirname, '/index.html')
      }
    }
  }
})
