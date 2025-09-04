import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),         // fast SWC-powered React transforms
    tailwindcss()    // first-party Tailwind plugin for Vite (Tailwind v4+)
  ],
  // (optional) server config, aliasing, etc.
})
