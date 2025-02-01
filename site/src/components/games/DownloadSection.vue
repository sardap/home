<script setup lang="ts">
import { type GameInfo } from '@/games'
import { platformToImage } from '@/consts'

defineProps<{
  game: GameInfo
}>()
</script>

<template>
  <div>
    <h3>Downloads</h3>
    <p><a target="_blank" :href="game.repo">Source code</a></p>
    <div v-for="entry in game.platforms" :key="entry.platform">
      <spawn v-if="entry.downloadLink">
        <a target="_blank" :href="entry.downloadLink as string">
          <img :src="platformToImage(entry.platform)" :alt="entry.platform" />
        </a>
      </spawn>
    </div>
  </div>
</template>

<style scoped></style>
