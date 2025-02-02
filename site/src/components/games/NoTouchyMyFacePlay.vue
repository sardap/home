<script setup lang="ts">
import { NoTouchyFace } from '@/games'
import DownloadSection from './DownloadSection.vue'
</script>

<template>
  <div>
    <DownloadSection :game="NoTouchyFace" />
    <p>How to play</p>
    <p>
      Note: the web version is bugged to not allow fail state, Sometimes the UI elements are just
      missing
    </p>
    <p>Controls: left click eyes or mouth to select right click to move</p>
  </div>
  <div>
    <embed src="/hackathon/index.html" width="500" height="350" />
  </div>
</template>

<style scoped>
embed {
  max-width: 100%;
}
</style>
