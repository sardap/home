<script setup lang="ts">
import DownloadSection from './DownloadSection.vue'
import { WeddingPlanner } from '@/games'
</script>

<template>
  <div>
    <DownloadSection :game="WeddingPlanner" />
    <div>
      <h3>How to play?</h3>
    </div>
    <br />
    <p class="warning">Game may take quite a while to load</p>
    <iframe src="/wedding_planner/main.html"></iframe>
  </div>
</template>

<style scoped>
@import '@/assets/main.css';

.warning {
  color: #a79408;
  font-size: large;
}

iframe {
  max-width: 310px;
  height: 600px;
  max-width: 100%;
  border: 4px solid var(--divider-border);
}
</style>
