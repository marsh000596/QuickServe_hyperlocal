import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // or react, if using React

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // needed for Docker container
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://api:8000', // Docker service name
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist'
  }
})
