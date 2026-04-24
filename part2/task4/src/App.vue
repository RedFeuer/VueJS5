<script setup>
import { ref } from 'vue'

const points = ref(0)

function increment() {
  points.value += 1
}
</script>

<template>
  <main class="page">
    <h1>Кликер через Composition API и Single File Component</h1>

    <button @click="increment">
      Кликнуть
    </button>

    <p class="counter">
      Очки: {{ points }}
    </p>
  </main>
</template>