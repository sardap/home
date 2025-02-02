<script setup lang="ts">
import WgmHd from '../embedded/WgmHd.vue'
import DownloadSection from './DownloadSection.vue'
import { WalkGoodMaybeHD } from '@/games'
</script>

<template>
  <DownloadSection :game="WalkGoodMaybeHD" />
  <WgmHd />
</template>

<style scoped></style>
