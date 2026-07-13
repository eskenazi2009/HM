import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative so the built site works whether it is
// served from a domain root (Netlify) or a sub-path (GitHub Pages /HM/).
export default defineConfig({
  base: './',
  plugins: [react()],
})
