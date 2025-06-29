<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { type Post, getPost, postLink } from '@/posts'
import PostCom from '@/components/posts/PostCom.vue'

const route = useRoute()
const postName = ref(route.params.post as string)

const resolvedPost = ref<Post | null>()

onMounted(async () => {
  resolvedPost.value = getPost(postName.value)
})
</script>

<template>
  <div v-if="resolvedPost">
    <PostCom :post="resolvedPost" />
  </div>
</template>

<style scoped>
div {
  margin-top: 10px;
}
</style>
