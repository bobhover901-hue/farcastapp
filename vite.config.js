import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // THIS IS THE FIX
  server: {
    fs: {
      // Allow serving files from one level up to the project root (for .well-known)
      allow: ['..']
    }
  },

  // THIS IS THE KEY PART — serve .json files in /.well-known as raw JSON
  assetsInclude: ['**/.well-known/*.json'],
  
  // Optional: extra safety to prevent Vite from transforming the JSON
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})