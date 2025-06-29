<script setup lang="ts">
import { useRoute } from 'vue-router'
import { markRaw, onMounted, ref, type Component, type Raw } from 'vue'
import { type Post, getPost, postLink } from '@/posts'

const route = useRoute()
const postName = ref(route.params.post as string) // Get the mode from the URL

interface ResolvedPost extends Post {
  body: Raw<Component>
}

const resolvedPosts = ref<ResolvedPost | null>()

onMounted(async () => {
  // Resolve all post bodies
  const post = getPost(postName.value)

  if (post === null) {
    return
  }

  resolvedPosts.value = {
    ...post,
    body: markRaw(await post.body),
  }
})
</script>

<template>
  <div v-if="resolvedPosts">
    <h1>
      <a :href="`/posts/${postLink(resolvedPosts)}`" target="_blank">{{ resolvedPosts.name }}</a>
    </h1>
    <component :is="resolvedPosts.body" />
  </div>
</template>

<style scoped>
div {
  margin-top: 10px;
}
</style>
