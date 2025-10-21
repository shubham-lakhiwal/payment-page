import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svg from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    svg()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css:{
    modules:{
      localsConvention:"camelCase",
      generateScopedName:"[local]_[hash:base64:5]"
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles";`,
      },
    },
  }
})
