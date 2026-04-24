<script setup>
const envConfig = {
  mode: import.meta.env.MODE,
  appEnv: import.meta.env.VITE_APP_ENV,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  buildLabel: import.meta.env.VITE_BUILD_LABEL,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD
}
</script>

<template>
  <main class="page">
    <h1>Конфигурации сборки</h1>

    <section class="card">
      <h2>{{ envConfig.buildLabel }}</h2>

      <p>
        <b>MODE:</b>
        {{ envConfig.mode }}
      </p>

      <p>
        <b>VITE_APP_ENV:</b>
        {{ envConfig.appEnv }}
      </p>

      <p>
        <b>VITE_API_BASE_URL:</b>
        {{ envConfig.apiBaseUrl }}
      </p>

      <p>
        <b>DEV:</b>
        {{ envConfig.isDev }}
      </p>

      <p>
        <b>PROD:</b>
        {{ envConfig.isProd }}
      </p>
    </section>

    <pre>{{ JSON.stringify(envConfig, null, 2) }}</pre>
  </main>
</template>