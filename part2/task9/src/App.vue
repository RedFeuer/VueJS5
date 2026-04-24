<script setup>
import Clicker from './components/Clicker.vue'

const clickers = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  amount: index + 1
}))

function handleButtonClicked(number) {
  alert(`Clicker ${number} clicked!`)
}
</script>

<template>
  <main class="page">
    <h1>100 кликеров с alert</h1>

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