import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'https://rabanette.github.io/site1/',
  plugins: [react(),],
})
