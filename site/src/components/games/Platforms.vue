<script setup lang="ts">
import { platformToImage } from '@/consts'
import type { GameInfo } from '@/games'

defineProps<{
  game: GameInfo
}>()
</script>

<template>
  <div>
    <span class="platform-title">Platforms: </span>
    <span v-for="(platform, i) in game.platforms" :key="platform.platform">
      <img
        :src="platformToImage(platform.platform)"
        :alt="platform.platform + (i != game.platforms.length - 1 ? `, ` : ``)"
      />
    </span>
  </div>
</template>

<style scoped>
.platform-title {
  font-weight: 400;
}
</style>
