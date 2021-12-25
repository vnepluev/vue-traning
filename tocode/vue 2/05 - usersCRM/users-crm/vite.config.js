import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from "vite-babel-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), babel()],
  filenameHashing: true,
  productionSourceMap: false
})

// ** настроить алиас @
// https://vitejs.dev/config/#resolve-alias
// https://github.com/rollup/plugins/tree/master/packages/alias#entries