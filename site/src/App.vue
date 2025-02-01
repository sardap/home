<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import BlogHeader from './components/BlogHeader.vue'
import BlogFooter from './components/BlogFooter.vue'
import { useModeStore } from '@/stores/mode'
import { Mode } from '@/modes'
import { onMounted } from 'vue'

const modeStore = useModeStore()

function getClass() {
  switch (modeStore.mode) {
    case Mode.Normal:
      return ''
    case Mode.Dog:
      return 'dog-mode'
    case Mode.QuizTime:
      return 'quiz-time-mode'
    case Mode.Dyslexia:
      return 'dyslexia-mode'
  }
}
</script>

<template>
  <div :class="getClass()">
    <BlogHeader />
    <hr />
    <RouterView />
    <hr />
    <BlogFooter />
  </div>
</template>

<style scoped></style>
