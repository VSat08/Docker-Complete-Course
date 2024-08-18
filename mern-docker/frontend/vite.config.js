import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true, // This enables HMR
    watch: {
      usePolling: true, // This helps with some Docker setups
    },
  },
});
