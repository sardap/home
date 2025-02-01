<script setup lang="ts">
import { ref } from 'vue'
import VersionSelector from './VersionSelector.vue'
import { backendSite, hostingSite } from '@/consts'

const targetUrl = ref('')
const versionUrl = `${backendSite}/api/reporele/voties`
const resourceUrl = `${hostingSite}/voties/versions`
const fileName = 'main.html'
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
      <iframe :src="targetUrl" width="800" height="600" allow="autoplay"></iframe>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped></style>
