<script setup>
import { ref } from 'vue'
import axios from 'axios'

const loading = ref(false)
const result = ref(null)

async function sendRequest() {
  loading.value = true
  result.value = null

  try {
    const response = await axios.get('https://json.geoiplookup.io/', {
      timeout: 10000
    })

    result.value = {
      success: true,
      status: response.status,
      headers: response.headers,
      data: response.data
    }
  } catch (error) {
    result.value = {
      success: false,
      name: error.name,
      message: error.message,
      status: error.response?.status ?? null,
      hint: 'Если возникла ошибка в браузере, нужно проверить CORS-заголовки ответа.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="page">
    <h1>Axios GET к https://json.geoiplookup.io/ в браузере</h1>

    <button @click="sendRequest" :disabled="loading">
      {{ loading ? 'Запрос выполняется...' : 'Получить GeoIP' }}
    </button>

    <section v-if="result?.success" class="card">
      <h2>Результат</h2>
      <p><b>IP:</b> {{ result.data.ip }}</p>
      <p><b>Страна:</b> {{ result.data.country_name }}</p>
      <p><b>Город:</b> {{ result.data.city }}</p>
      <p><b>Провайдер:</b> {{ result.data.isp }}</p>
      <p><b>Часовой пояс:</b> {{ result.data.timezone_name }}</p>
    </section>

    <pre v-if="result">{{ JSON.stringify(result, null, 2) }}</pre>
  </main>
</template>