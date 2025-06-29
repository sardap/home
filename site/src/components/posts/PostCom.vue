<script setup lang="ts">
import { posts, type Post, postLink } from '@/posts'
import { markRaw, onMounted, ref, type Component, type Raw } from 'vue'

const props = defineProps<{
  post: Post
}>()

const resolvedPost = ref<Raw<Component> | null>()

onMounted(async () => {
  resolvedPost.value = markRaw(await props.post.body)
})

function dateStr(): String {
  return `${props.post.date.getFullYear()}/${props.post.date.getMonth().toString().padStart(2, '0')}/${props.post.date.getDate().toString().padStart(2, '0')}`
}
</script>

<template>
  <div v-if="resolvedPost">
    <h1>
      <RouterLink :to="`/posts/${postLink(post)}`">{{ post.name }}</RouterLink>
    </h1>
    <p>{{ dateStr() }}</p>
    <component :is="resolvedPost" />
  </div>
</template>

<style scoped></style>
