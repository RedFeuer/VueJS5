<script setup>
import { ref } from 'vue'
import Clicker from './components/Clicker.vue'

const lastClicked = ref('Пока кликов не было')

const clickers = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  amount: index + 1
}))

function handleButtonClicked(number) {
  lastClicked.value = `Нажат кликер ${number}`
}
</script>

<template>
  <main class="page">
    <h1>Кликеры с событием button-clicked</h1>

    <section class="info">
      {{ lastClicked }}
    </section>

    <section class="grid">
      <Clicker
        v-for="clicker in clickers"
        :key="clicker.id"
        :amount="clicker.amount"
        @button-clicked="handleButtonClicked(clicker.id)"
      >
        Кликер {{ clicker.id }}: +{{ clicker.amount }}
      </Clicker>
    </section>
  </main>
</template>