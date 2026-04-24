<script setup>
import { ref } from 'vue'
import axios from 'axios'

const loading = ref(false)
const result = ref(null)

async function sendRequest() {
  loading.value = true
  result.value = null

  try {
    const response = await axios.get('https://vk.com', {
      timeout: 10000
    })

    result.value = {
      success: true,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      dataPreview: String(response.data).slice(0, 500)
    }
  } catch (error) {
    result.value = {
      success: false,
      name: error.name,
      message: error.message,
      status: error.response?.status ?? null,
      hint: 'В браузере запрос к vk.com, скорее всего, будет заблокирован CORS-политикой.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="page">
    <h1>Axios GET к https://vk.com в браузере</h1>

    <button @click="sendRequest" :disabled="loading">
      {{ loading ? 'Запрос выполняется...' : 'Отправить GET запрос' }}
    </button>

    <pre v-if="result">{{ JSON.stringify(result, null, 2) }}</pre>
  </main>
</template>