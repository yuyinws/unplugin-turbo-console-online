<script setup>
import { logts } from './log'
import { logjs } from './logjs.js'
function logvue() {
  const message = 'Hello Vue'
  console.log(message)
}

console.log('123')
</script>

<template>
  <main>
    <h1>1. Open console (F12) </h1>
    <h1>2. Click buttons</h1>
    <div style="display: flex; gap: 1rem;margin-top: 2rem">
      <button @click="logts">Print TypeScript</button>
      <button @click="logjs">Print JavaScript</button>
      <button @click="logvue">Print Vue</button>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
}
</style>
