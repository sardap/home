<script setup lang="ts">
import GBA from '@/components/embedded/GBA.vue'
import { hostingSite, backendSite, Tag } from '@/consts'
import DownloadSection from './DownloadSection.vue'
import { WalkGoodMaybe } from '@/games'
</script>

<template>
  <DownloadSection :game="WalkGoodMaybe" />
  <GBA
    :versionUrl="`${backendSite}/api/reporele/walk-good-maybe`"
    :resourceUrl="`https://gba.ninja/?autorun=${hostingSite}/versions`"
    :fileName="`walk-good-maybe.gba`"
  />
</template>

<style scoped></style>
