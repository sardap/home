<script setup lang="ts">
interface Photo {
  src: string
}

const base = '/photos/korea-2026-06'
const photos: Photo[] = [
  {
    src: '200.JPG',
  },
  {
    src: '225.JPG',
  },
  {
    src: '250.JPG',
  },
  {
    src: '275.JPG',
  },
  {
    src: '300.JPG',
  },
  {
    src: '350.JPG',
  },
  {
    src: '375.JPG',
  },
  {
    src: '400.JPG',
  },
  {
    src: '450.JPG',
  },
  {
    src: '475.JPG',
  },
  {
    src: '500.JPG',
  },
  {
    src: '600.JPG',
  },
  {
    src: '700.JPG',
  },
  {
    src: '800.JPG',
  },
]
</script>

<template>
  <div class="gallery">
    <p>A bunch of photos I took in korea and I like</p>
    <div v-for="photo in photos" :key="photo.src" class="featured-image">
      <img :src="`${base}/${photo.src}`" />
    </div>
  </div>
</template>

<style scoped>
.featured-image img {
  border: solid 7px #008aa6;
  border-radius: 3%;
}

.featured-image {
  display: inline-block;
  margin-bottom: 20px;
  max-width: 400px;
}
</style>
