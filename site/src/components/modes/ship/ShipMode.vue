<script setup lang="ts">
import { onMounted, ref } from 'vue'

const imageSources = [
  '/ship/1.png',
  '/ship/2.png',
  '/ship/3.png',
  '/ship/4.png',
  '/ship/5.png',
  '/ship/6.png',
  '/ship/7.png',
  '/ship/8.png',
  '/ship/9.png',
  '/ship/10.png',
  '/ship/11.png',
  '/ship/12.png',
  '/ship/13.png',
  '/ship/14.png',
  '/ship/15.png',
  '/ship/16.png',
  '/ship/17.png',
  '/ship/18.png',
  '/ship/19.png',
  '/ship/20.png',
  '/ship/21.png',
  '/ship/22.png',
  '/ship/23.png',
  '/ship/24.png',
  '/ship/25.png',
  '/ship/26.png',
  '/ship/27.png',
  '/ship/28.png',
  '/ship/29.png',
  '/ship/30.png'
]

const images = ref<HTMLImageElement[]>([])

const width = ref(300)
const height = ref(300)

const canvas = ref<HTMLCanvasElement | null>(null)

const secret_canvas = ref<HTMLCanvasElement | null>(null)

const imageData = ref<ImageData>()

const pixelExpireOrder = ref<number[]>([])

const targetImage = ref<number[]>()

const currentImageIndex = ref(0)

const imageOrder = ref<number[]>([])

const loadingTargetImage = ref(false)

const speed = ref(0.001)

const pixelsUpdated = ref(0)

const timePassedDisplay = ref('')

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function loadImages() {
  images.value = []

  for (const source of imageSources) {
    const image = new Image()
    image.src = source
    image.loading = 'eager'
    images.value.push(image)
  }

  imageOrder.value = []
  for (let i = 0; i < images.value.length; i++) {
    imageOrder.value.push(i)
  }

  shuffle(imageOrder.value)
}

function setTargetImage() {
  if (loadingTargetImage.value) {
    console.log('Already loading target image')
    return
  }

  console.log('Starting loading target image')
  loadingTargetImage.value = true

  // Get current image
  const imageIndex = imageOrder.value[currentImageIndex.value]

  // Wait for current image to load
  const image = images.value[imageIndex]
  console.log('Current image ', image.src)

  const onload = function () {
    console.log('Target image loaded')

    const ctx = secret_canvas.value?.getContext('2d')

    ctx?.drawImage(image, 0, 0, width.value, height.value)

    const imageData = ctx?.getImageData(0, 0, width.value, height.value)

    const pixels = imageData?.data

    if (!pixels) {
      return
    }

    targetImage.value = []
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i]
      const g = pixels[i + 1]
      const b = pixels[i + 2]
      const a = pixels[i + 3]

      const color = (r << 24) | (g << 16) | (b << 8) | a

      targetImage.value?.push(color)
    }
    console.log('Set target image value')

    loadingTargetImage.value = false

    console.log('Done loading target image')
  }

  if (image.complete) {
    onload()
  } else {
    image.onload = onload
  }

  const expire = []

  for (let i = 0; i < 600 * 600; i++) {
    expire.push(i)
  }

  shuffle(expire)

  pixelExpireOrder.value = expire
  console.log('Set pixel expire order')
}

function stepUpdate() {
  if (!canvas.value) {
    return
  }

  if (loadingTargetImage.value) {
    return
  }

  if (!targetImage.value) {
    console.log('No target image')
    setTargetImage()
    return
  }

  console.log('Step update started')

  const ctx = canvas.value.getContext('2d')

  if (!ctx) {
    return
  }

  if (!imageData.value) {
    imageData.value = ctx.getImageData(0, 0, canvas.value.width, canvas.value.height)
  }

  // 1% of the pixels
  let numberToSpawn = width.value * height.value * (speed.value / 5)
  // Add some randomness
  const randomness = Math.floor(Math.random() * numberToSpawn)
  if (Math.random() > 0.5) {
    numberToSpawn += randomness
  } else {
    numberToSpawn -= randomness
  }
  console.log('Number to spawn', numberToSpawn, 'speed', speed.value)
  for (let i = 0; i < numberToSpawn; i++) {
    const targetPixelIndex = pixelExpireOrder.value.pop()

    if (!targetPixelIndex) {
      break
    }

    const targetColor = targetImage.value[targetPixelIndex]
    const r = (targetColor >> 24) & 0xff
    const g = (targetColor >> 16) & 0xff
    const b = (targetColor >> 8) & 0xff
    const a = targetColor & 0xff

    imageData.value.data[targetPixelIndex * 4] = r
    imageData.value.data[targetPixelIndex * 4 + 1] = g
    imageData.value.data[targetPixelIndex * 4 + 2] = b
    imageData.value.data[targetPixelIndex * 4 + 3] = a
  }

  if (pixelExpireOrder.value.length === 0) {
    targetImage.value = undefined
    currentImageIndex.value++
    if (currentImageIndex.value >= imageOrder.value.length) {
      currentImageIndex.value = 0
      shuffle(imageOrder.value)
    }
  }

  pixelsUpdated.value += numberToSpawn

  const seconds = Math.floor(pixelsUpdated.value * 10)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(weeks / 4)
  const years = Math.floor(months / 12)

  const hoursStr = hours % 24 < 10 ? `0${hours % 24}` : `${hours % 24}`

  timePassedDisplay.value = `${years}Y ${months % 12}M ${weeks % 4}W ${days % 7}D ${hoursStr}H`

  ctx.putImageData(imageData.value, 0, 0)
  console.log('Update complete')
}

function setupCanvas() {
  if (!canvas.value) {
    return
  }

  const ctx = canvas.value.getContext('2d')

  if (!ctx) {
    return
  }

  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
}

onMounted(async () => {
  setupCanvas()
  loadImages()

  setInterval(() => {
    stepUpdate()
  }, 5)
})
</script>

<template>
  <div>
    <h2>Paul's Ship</h2>
    <p>{{ timePassedDisplay }}</p>
    <canvas ref="canvas" :width="width" :height="height"></canvas>
    <canvas ref="secret_canvas" :width="width" :height="height" style="display: none"></canvas>

    <div>
      <p>Timescale</p>
      <input type="range" v-model="speed" min="0.001" max="0.03" step="0.001" />
    </div>
  </div>
</template>

<style scoped>
iframe {
  max-width: 100%;
  width: 560px;
  height: 315px;
}
</style>
