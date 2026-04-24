<script setup>
import { ref } from 'vue'

const points = ref(0)

function increment() {
  points.value += 1
}
</script>

<template>
  <article class="card">
    <button @click="increment">
      Кликнуть
    </button>

    <p class="counter">
      Очки: {{ points }}
    </p>
  </article>
</template>