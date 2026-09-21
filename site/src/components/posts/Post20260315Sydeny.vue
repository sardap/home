`<script setup lang="ts">
interface Photo {
  src: string
}

const base = '/photos/syd-2026-03'
const photos: Photo[] = [
  {
    src: '100.JPG',
  },
  {
    src: '200.JPG',
  },
  {
    src: '250.JPG',
  },
  {
    src: '340.JPG',
  },
  {
    src: '380.JPG',
  },
  {
    src: '400.JPG',
  },
  {
    src: '425.JPG',
  },
  {
    src: '450.JPG',
  }
]
</script>

<template>
  <div class="gallery">
    <p>Photos from Sydney Harbour at like 5AM</p>
    <div v-for="photo in photos" :key="photo.src" class="featured-image">
      <img :src="`${base}/${photo.src}`" />
    </div>
  </div>
</template>

<style scoped>
.featured-image img {
  border: solid 7px #00843D;
  border-radius: 3%;
}

.featured-image {
  display: inline-block;
  margin-bottom: 20px;
  max-width: 400px;
}
</style>
