<script setup lang="ts">
import Posts from '@/components/posts/Posts.vue'
import PompousPhotos from '@/components/posts/Post20250629KoreaPhotos2025.vue'
</script>

<template>
  <div>
    <h2>Welcome</h2>
    <p><a href="https://sarda.dev">THIS IS NOT MY RESUME SITE CLICK HERE TO GO THERE</a></p>
    <br />
    <div>
      <h3>What is this site?</h3>
      <p>
        I wanted somewhere to have all my stupid ideas that probably should not be clogging up my
        resume site. For example <RouterLink to="/modes/roman-clock">Roman clock</RouterLink> I also
        wanted an area I could dump a blog post maybe?
      </p>
    </div>
    <Posts />
  </div>
</template>

<style scoped></style>
