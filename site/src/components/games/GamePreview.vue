<script setup lang="ts">
import type { GameInfo } from '@/games'
import Platforms from '@/components/games/Platforms.vue'

const props = defineProps<{
  game: GameInfo
  shortDescription: string
  longDescription?: string
  previewImage?: string
}>()

const tagsJoined = props.game.tags.join(', ')
</script>

<template>
  <div>
    <RouterLink :to="`games/${game.link}`"
      ><h3>{{ game.title }}</h3></RouterLink
    >
    <Platforms :game="game" />
    <p v-if="tagsJoined.length > 0" class="tags-heading">
      Tags: <span class="tags">{{ tagsJoined }}</span>
    </p>
    <div :class="previewImage ? `grid-container` : ``">
      <div v-if="previewImage" class="preview-image">
        <video :src="previewImage" autoplay loop muted></video>
      </div>
      <div>
        <p class="short-desc">{{ shortDescription }}</p>
        <p v-if="longDescription" class="long-desc">{{ longDescription }}</p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
@media (min-width: 800px) {
  .grid-container {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 20px;
  }
}

video {
  border: 5px solid #9b1c31;
  max-height: 250px;
}

.tags {
  margin-right: 5px;
}

.short-desc {
  font-size: 1.2em;
  font-weight: 400;
}

.long-desc {
  font-size: 1em;
}

.tags-heading {
  font-weight: 400;
}
</style>
