<script setup>
import Clicker from './components/Clicker.vue'

const clickers = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  amount: index + 1
}))
</script>

<template>
  <main class="page">
    <h1>Кликеры с кастомной кнопкой через slot</h1>

    <section class="grid">
      <Clicker
        v-for="clicker in clickers"
        :key="clicker.id"
        :amount="clicker.amount"
      >
        Кликер {{ clicker.id }}: +{{ clicker.amount }}
      </Clicker>
    </section>
  </main>
</template>