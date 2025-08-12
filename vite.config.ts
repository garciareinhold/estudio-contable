import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Usar raíz para dominio personalizado
  publicDir: 'public', // Asegurando que la carpeta public sea accesible
})
