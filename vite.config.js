import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: "/Todo_Context_API_With_Local_Storage/",
  plugins: [react()],
})
