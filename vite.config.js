import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://laloxox.github.io/Personajes-Rick-y-Morty-react/",
  plugins: [react()],

  
   // add this:
    server: { 
    host: '0.0.0.0'
  } 

})
