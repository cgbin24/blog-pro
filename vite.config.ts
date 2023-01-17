import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    port: 3000,
    open: '/index.html',
    host: '0.0.0.0',
    https: false,  // 是否启用https
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
})