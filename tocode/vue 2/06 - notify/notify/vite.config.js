import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import babel from 'vite-babel-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), babel()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  filenameHashing: true,
  productionSourceMap: false
})

// ** настроить алиас @
// https://vitejs.dev/config/#resolve-alias
// https://github.com/rollup/plugins/tree/master/packages/alias#entries