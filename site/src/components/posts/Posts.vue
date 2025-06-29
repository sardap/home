<script setup lang="ts">
import { posts, type Post, postLink } from '@/posts'
import { markRaw, onMounted, ref, type Component, type Raw } from 'vue'

interface ResolvedPost extends Post {
  body: Raw<Component>
}

const resolvedPosts = ref<ResolvedPost[]>([])

onMounted(async () => {
  // Resolve all post bodies
  resolvedPosts.value = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      body: markRaw(await post.body),
    })),
  )
})
</script>

<template>
  <div>
    <div v-for="post in resolvedPosts" :key="post.name">
      <h1>
        <a :href="`/posts/${postLink(post)}`" target="_blank">{{ post.name }}</a>
      </h1>
      <component :is="post.body" />
    </div>
  </div>
</template>

<style scoped></style>
