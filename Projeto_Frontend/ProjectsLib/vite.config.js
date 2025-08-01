import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/site1/',  
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'Images',  
          dest: ''        
        }
      ]
    })
    
  ]
})
