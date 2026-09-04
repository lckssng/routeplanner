import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/routeplanner/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        userFlow: resolve(process.cwd(), 'user-flow.html'),
        flowchart: resolve(process.cwd(), 'flowchart.html'),
      },
    },
  },
});
