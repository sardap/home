<script setup lang="ts">
import { ref } from 'vue'
import VersionSelector from './VersionSelector.vue'

defineProps({
  versionUrl: {
    type: String,
    required: true,
  },
  resourceUrl: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
})

const targetUrl = ref('')
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
      <iframe :src="targetUrl" width="275" height="430" allow="autoplay"></iframe>
      <p>You might need to refresh the page to get this to work.</p>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped></style>
