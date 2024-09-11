import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/square-gps-test-task/',
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: chunk => {
          if (chunk.name === '_plugin-vue_export-helper') {
            return 'assets/plugin-vue_export-helper-[hash].js'
          }
          return 'assets/[name]-[hash].js'
        },
        entryFileNames: 'assets/[name]-[hash].js',
        sourcemapFileNames: 'assets/[name].[hash].js.map',
      }
    }
  }
})
