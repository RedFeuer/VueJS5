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

function handleKeydown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    increment()
  }
}
</script>

<template>
  <article class="card">
    <div
      class="click-target"
      role="button"
      tabindex="0"
      @click="increment"
      @keydown="handleKeydown"
    >
      <slot>
        Кликнуть
      </slot>
    </div>

    <p class="counter">
      Очки: {{ points }}
    </p>
  </article>
</template>