<script setup lang="ts">
interface Photo {
  src: string
}

const base = '/photos/blr-2025-11'
const photos: Photo[] = [
  {
    src: '10.JPG',
  },
  {
    src: '15.JPG',
  },
  {
    src: '45.JPG',
  },
  {
    src: '50.JPG',
  },
  {
    src: '100.JPG',
  },
  {
    src: '125.JPG',
  },
  {
    src: '150.JPG',
  },
  {
    src: '175.JPG',
  },
  {
    src: '200.JPG',
  },
  {
    src: '450.JPG',
  },
  {
    src: '500.JPG',
  }
]
</script>

<template>
  <div class="gallery">
    <p>A bunch of photos I took in Bengaluru India and I like. The food really was incredible</p>
    <div v-for="photo in photos" :key="photo.src" class="featured-image">
      <img :src="`${base}/${photo.src}`" />
    </div>
  </div>
</template>

<style scoped>
.featured-image img {
  border: solid 7px #293891;
  border-radius: 3%;
}

.featured-image {
  display: inline-block;
  margin-bottom: 20px;
  max-width: 400px;
}
</style>
