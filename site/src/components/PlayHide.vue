<script setup lang="ts">
import { ref } from 'vue'

const pressed = ref(false)
</script>

<template>
  <div v-if="pressed">
    <slot></slot>
    <hr />
  </div>
  <button v-else @click="pressed = !pressed">Play</button>
</template>

<style scoped></style>
