<script setup lang="ts">
import { ref } from 'vue'
import VersionSelector from './VersionSelector.vue'
import { backendSite, hostingSite } from '@/consts'

const targetUrl = ref('')
const versionUrl = `${backendSite}/api/reporele/walk-good-maybe-hd`
const resourceUrl = `/wgmhd/main.html?url=${hostingSite}/wgmhd/versions`
const fileName = 'walk-good-maybe-hd.wasm'
</script>

<template>
  <div>
    <VersionSelector
      :versionUrl="versionUrl"
      :resourceUrl="resourceUrl"
      :fileName="fileName"
      v-model="targetUrl"
    />
    <br />
    <div v-if="targetUrl.length > 0" :key="targetUrl">
      <iframe :src="targetUrl" width="640" height="450" allow="autoplay"></iframe>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped></style>
