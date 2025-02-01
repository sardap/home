<script setup lang="ts">
import { ref } from 'vue'
import VersionSelector from './VersionSelector.vue'

defineProps({
  versionUrl: {
    type: String,
    required: true
  },
  resourceUrl: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  }
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
    <div class="holder">
      <div v-if="targetUrl.length > 0" :key="targetUrl">
        <embed :src="targetUrl" width="480" height="320" />
        <p>A: Key Z, B: Key X, Select: Key Backspace, Start: Enter</p>
        <p>Pause: ESC</p>
        <br />
      </div>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<style scoped>
.holder {
  height: 400px;
}
</style>
