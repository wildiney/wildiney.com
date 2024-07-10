import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'CNAME', // Caminho do arquivo CNAME na pasta public ou raiz
          dest: '.' // Destino na pasta de saída
        }
      ]
    })
  ],
})
