import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        code: resolve(__dirname, '/src/figma.ts'),
      },
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
      },
    },
  },
})
