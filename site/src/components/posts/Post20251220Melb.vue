`<script setup lang="ts">
interface Photo {
  src: string
}

const base = '/photos/mel-2025-12'
const photos: Photo[] = [
  {
    src: '50.JPG',
  },
  {
    src: '100.JPG',
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
    src: '250.JPG',
  },
  {
    src: '300.JPG',
  },
  {
    src: '325.JPG',
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
    src: '500.JPG',
  },
  {
    src: '525.JPG',
  },
  {
    src: '550.JPG',
  },
  {
    src: '575.JPG',
  },
]
</script>

<template>
  <div class="gallery">
    <p>Photos from around Melbourne in late 2025</p>
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
