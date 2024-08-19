import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, 
    outDir: 'dist', 
  },
  base: '/', 
  server: {
    host: true,
    port: 5173, 
  },
});