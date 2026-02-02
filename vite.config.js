import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        const source404 = join(__dirname, 'public', '404.html')
        const dest404 = join(__dirname, 'dist', '404.html')
        if (existsSync(source404)) {
          copyFileSync(source404, dest404)
        }
      }
    }
  ],
  base: '/RivasEmilio.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  publicDir: 'public'
})
