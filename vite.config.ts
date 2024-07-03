import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile({
      useRecommendedBuildConfig: false,
      inlinePattern: [
        'style.css',
        'index.js',
      ],
    }),
    UnoCSS(),
    vueDevTools(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dts: 'src/components.d.ts',
    }),
  ],
  base: './',
  build: {
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    assetsDir: '',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        code: resolve(__dirname, 'src/figma.ts'),
      },
      output: {
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name].[ext]',
        entryFileNames: '[name].js',
      },
    },
  },
})
