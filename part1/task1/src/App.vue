<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Application, Graphics } from 'pixi.js'

const pixiContainer = ref(null)

let app = null

onMounted(async () => {
  app = new Application()

  await app.init({
    width: 800,
    height: 500,
    backgroundColor: 0x202533,
    antialias: true
  })

  pixiContainer.value.appendChild(app.canvas)

  const rectangle = new Graphics()
    .rect(-120, -60, 240, 120)
    .fill({ color: 0x42b883 })
    .stroke({ width: 4, color: 0xffffff })

  rectangle.x = app.screen.width / 2
  rectangle.y = app.screen.height / 2

  app.stage.addChild(rectangle)

  app.ticker.add((ticker) => {
    rectangle.rotation += 0.03 * ticker.deltaTime
  })
})

onBeforeUnmount(() => {
  if (app) {
    app.destroy(true, true)
    app = null
  }
})
</script>

<template>
  <main class="page">
    <h1>PixiJS: вращение прямоугольника</h1>

    <div class="canvas-wrapper" ref="pixiContainer"></div>
  </main>
</template>