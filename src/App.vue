<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

console.log(`import.meta.env.MODE:${import.meta.env.MODE}`)
console.log(`import.meta.env.BASE_URL:${import.meta.env.BASE_URL}`)
console.log(`import.meta.env.PROD:${import.meta.env.PROD}`)
console.log(`import.meta.env.DEV:${import.meta.env.DEV}`)
console.log(`import.meta.env.VITE_APP_TITLE:${import.meta.env.VITE_APP_TITLE}`)
console.log(`import.meta.env.VITE_APP_VERSION:${import.meta.env.VITE_APP_VERSION}`)
console.log(`import.meta.env.VITE_APP_BUILDTS:${import.meta.env.VITE_APP_BUILDTS}`)
const version = import.meta.env.VITE_APP_VERSION
const buildts = import.meta.env.VITE_APP_BUILDTS
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <div class="d-flex justify-space-between mb-6">
    <v-sheet class="align-self-center text-left">left</v-sheet>
    <v-sheet class="align-self-center text-center">center</v-sheet>
    <v-sheet class="align-self-center text-right">
      v{{ version }}
      <v-tooltip activator="parent" location="top end">{{ buildts }}</v-tooltip>
    </v-sheet>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
