<script setup>
import { ref } from 'vue'

const props = defineProps({
  amount: {
    type: Number,
    default: 1
  }
})

const points = ref(0)

function increment() {
  points.value += props.amount
}
</script>

<template>
  <article class="card">
    <button @click="increment">
      +{{ amount }}
    </button>

    <p class="counter">
      Очки: {{ points }}
    </p>
  </article>
</template>