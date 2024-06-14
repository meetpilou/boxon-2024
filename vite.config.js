import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

// vite.config.js
export default defineConfig({
  plugins: [eslintPlugin({ cache: false })],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: './src/script.js',
      output: {
        format: 'umd',
        entryFileNames: 'script.js',
        esModule: false,
        compact: true,
        globals: {
          app: 'window.app',
          'Webflow': 'window.Webflow',
        },
      },
      external: ['jquery'],
    },
  },
})
