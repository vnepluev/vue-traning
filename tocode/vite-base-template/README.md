# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE plugin

- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## All Vite plugins

- [npmjs catalog](https://www.npmjs.com/search?q=vite-plugin&ranking=popularity)

## Install
```
npm init vite@latest
cd shop
```

## Install sass
```
npm install -D sass autoprefixer@latest postcss@latest
```

## Recommended babel plugin (see instruction npmjs), vue-router (see async example)

- [vite-babel-plugin](https://www.npmjs.com/package/vite-babel-plugin)

```
npm install -D vite-babel-plugin
npm install vue-router@4 || yarn add vue-router@4 || npm install vue-router@next
```

# Optional
[Video tutorial](https://www.youtube.com/watch?v=O8epzPrsADI)
[Vitesse, markdown](https://www.youtube.com/watch?v=rMD3A5BgDxE)

## Install ESLint + Prettier
```
npm install --save-dev eslint prettier eslint-plugin-vue eslint-config-prettier
```

## Install Vuex
```
npm install vuex@next --save
```

## Code
```
.eslintrc.js:
module.exports = {
extends: [
  'plugin:vue/vue3-essential',
  'prettier',
],
rules: {
  // override/add rules settings here, such as:
  'vue/no-unused-vars': 'error',
},
}

.prettierrc.js:
module.exports = {
    semi: false,
    tabWidth: 2,
    useTabs: true,
    printWidth: 80,
    endOfLine: 'auto',
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
  }
```

## Run
```
npm run dev || npm run build || npm run preview
```