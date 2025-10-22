import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss()],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
      },
   },
   server: {
      host: true,
      port: Number(process.env.PORT) || 5173,
      proxy: {
         '/api': 'https://server-production-c682.up.railway.app',
      },
   },
   preview: {
      host: true,
      port: Number(process.env.PORT) || 5173,
   },
});
