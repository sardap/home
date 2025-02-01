<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import BarkButton from './BarkButton.vue'
import { useModeStore } from '@/stores/mode'
import { Mode } from '@/modes'

const dogMode = '🐶 DOG MODE 🐶'
const modeStore = useModeStore()

onMounted(() => {
  modeStore.setMode(Mode.Dog)
})

onUnmounted(() => {
  modeStore.clearMode()
})
</script>

<template>
  <div>
    <h2>Welcome to {{ dogMode }}</h2>
    <div>
      <p>How many resume sites have a {{ dogMode }}?</p>
    </div>
    <div>
      <iframe
        src="https://www.youtube-nocookie.com/embed/y9K18CGEeiI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <BarkButton />
    <div>
      <h3>It's Photo gallery time!</h3>
      <div>
        <img src="/photos/dog/one.png" />
        <img src="/photos/dog/two.png" />
        <img src="/photos/dog/three.png" />
      </div>
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
