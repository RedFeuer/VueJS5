<script setup>
import Clicker from './components/Clicker.vue'

const clickers = Array.from({ length: 100 }, (_, index) => index + 1)
</script>

<template>
  <main class="page">
    <h1>100 независимых кликеров</h1>

    <section class="grid">
      <Clicker
        v-for="number in clickers"
        :key="number"
      />
    </section>
  </main>
</template>