# menu

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Building Application

### 1. 初期プロジェクトの作成

https://ja.vuejs.org/guide/quick-start.html

```sh
$ npm init vue@latest
Need to install the following packages:
  create-vue@3.6.4
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

✔ Project name: … menu
✔ Add TypeScript? … Yes
✔ Add JSX Support? … Yes
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … Nos
✔ Add Vitest for Unit Testing? … No
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes
```

```sh
$ npm install
```
```sh
$ npm run format
```
```sh
$ npm run dev
```

### 2.PWA用のPluginを導入

2.1 プラグインのインストール（[参考](https://vite-pwa-org.netlify.app/guide/#installing-vite-plugin-pwa)）
```sh
$ npm i vite-plugin-pwa -D
```

2.2 プラグインの設定１（[参考](https://vite-pwa-org.netlify.app/guide/#configuring-vite-plugin-pwa)）
> [vite.config.ts](vite.config.ts)

2.3 プラグインの設定２（[参考](https://vite-pwa-org.netlify.app/guide/faq.html#ide-errors-cannot-find-module-ts2307)）
> [ts.config.app.json](tsconfig.app.json)

### 3.Vuetifyを導入

3.1 Vuetifyのインストール（[参考](https://vuetifyjs.com/en/getting-started/installation/#manual-steps)）

```sh
$ npm i vuetify@latest
```

3.2 プラグインのインストール([参考](https://vuetifyjs.com/en/features/treeshaking/#automatic-treeshaking))

```sh
npm i vite-plugin-vuetify -D
```

3.3 アイコンフォントのインストール（[参考](https://vuetifyjs.com/en/features/icon-fonts/#material-design-icons-js-svg)）

```sh
npm i @mdi/js -D
```

3.4 Vuetifyの設定

> [vite.config.ts](vite.config.ts)
> [src/vuetify](src/index.ts)
> [src/main.ts](src/main.ts)
