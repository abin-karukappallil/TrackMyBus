import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, 
    outDir: 'dist', // Specify the output directory
  },
  base: '/', 
});
