import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@purecomponents': path.resolve(__dirname, 'src/purecomponents'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@sections': path.resolve(__dirname, 'src/sections'),
      '@files': path.resolve(__dirname, 'src/files'),
    },
  },
})