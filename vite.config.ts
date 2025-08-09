import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/estudio-contable/', // Necesario para GitHub Pages
  publicDir: 'public', // Asegurando que la carpeta public sea accesible
})
