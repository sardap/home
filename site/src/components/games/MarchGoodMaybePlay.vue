<script setup lang="ts">
import { hostingSite, backendSite } from '@/consts'
import GBA from '@/components/embedded/GBA.vue'
import { MarchGoodMaybe } from '@/games'
import DownloadSection from './DownloadSection.vue'
</script>

<template>
  <DownloadSection :game="MarchGoodMaybe" />
  <GBA
    :versionUrl="`${backendSite}/api/reporele/march_good_maybe`"
    :resourceUrl="`https://gba.ninja/?autorun=${hostingSite}/march_good_maybe/versions/`"
    :fileName="`march_good_maybe.gba`"
  />
</template>

<style scoped>
@import '@/assets/main.css';
</style>
