# Sofi Tattoo (sofi-tattoo)

Sofi Tattoo Project

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
```

### Format the files

```bash
yarn format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### Create pages command

```bash
quasar ext add tailwindcss
quasar new p Profile -> /pages/Profile.vue
quasar new layout MenuLayout  -> /layout/
```

## [Optiona] Installing icongenie

yarn global add @quasar/icongenie

### Generate profile

icongenie p \
 -o prod \
 -i ./src/assets/logo.png \
 -b ./src/assets/splash.png \
 --splashscreen-icon-ratio 0 \
 --skip-trim \
 --include all

### Use profile

icongenie g -p ./icongenie-prod.json

### Install Android

```bash
https://quasar.dev/quasar-cli/developing-capacitor-apps/preparation
quasar mode add capacitor
```

```bash
cd src-capacitor
yarn
yarn add @capacitor/android
npx cap add android
```

##### src-capacitor/package.json

```bash
  "dependencies": {
    "@capacitor/cli": "^3.0.0",
    "@capacitor/core": "^3.0.0"
	 "@capacitor/android": "^3.4.1"
  }
```
