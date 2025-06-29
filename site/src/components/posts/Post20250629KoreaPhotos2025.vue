<script setup lang="ts">
interface Photo {
  src: string
}

const base = '/photos/korea-2025-06'
const photos: Photo[] = [
  {
    src: '100.png',
  },
  {
    src: '110.png',
  },
  {
    src: '120.png',
  },
  {
    src: '130.png',
  },
  {
    src: '140.png',
  },
  {
    src: '150.png',
  },
  {
    src: '160.png',
  },
  {
    src: '170.png',
  },
  {
    src: '171.png',
  },
  {
    src: '172.png',
  },
  {
    src: '180.png',
  },
  {
    src: '181.png',
  },
  {
    src: '190.png',
  },
  {
    src: '1800.png',
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
  border: solid 7px #a60006;
  border-radius: 3%;
}

.featured-image {
  display: inline-block;
  margin-bottom: 20px;
  max-width: 400px;
}
</style>
