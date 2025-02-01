<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <h1>Paul Sarda Home</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/games">Games</RouterLink>
        <RouterLink to="/modes">Modes</RouterLink>
        <a href="https://bookclub.sarda.dev">Book Club (Hosted on a 3ds)</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
h1 {
  font-size: xxx-large;
}

a {
  font-size: large;
}

p {
  margin-top: 8px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
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
</style>
