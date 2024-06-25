import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        ui: resolve(__dirname, '/index.html')
      }
    }
  }
})
