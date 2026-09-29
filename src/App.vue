<script setup lang="ts">
import CounterButton from './components/CounterButton.vue'
</script>

<template>
  <main class="page">
    <h1>my-website</h1>
    <p>Vue3 + Vite + TypeScript 脚手架已就绪</p>
    <CounterButton label="点击次数" :step="1" />
  </main>
</template>

<style scoped>
.page {
  max-width: 480px;
  margin: 4rem auto;
  font-family: system-ui, -apple-system, sans-serif;
  color: #1f2937;
}
</style>
