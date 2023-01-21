import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "https://m1qu3l.github.io/react-prueva/",
  plugins: [react()],
})
