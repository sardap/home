<script setup lang="ts">
import { posts } from '@/posts'
import PostCom from './PostCom.vue'
</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.name">
      <PostCom :post="post" />
    </div>
  </div>
</template>

<style scoped></style>
