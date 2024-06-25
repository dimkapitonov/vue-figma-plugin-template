import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        code: resolve(__dirname, '/src/figma.ts')
      },
      output: {
        dir: 'dist',
        entryFileNames: '[name].js'
      }
    }
  }
})
