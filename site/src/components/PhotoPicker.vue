<script setup lang="ts">
import { ref, type PropType } from 'vue'

defineProps({
  img1: {
    type: String as PropType<string>,
    required: true,
  },
  img2: {
    type: String as PropType<string>,
    required: true,
  },
})

const transitionValue = ref<number>(0)
const showDifference = ref<boolean>(false)
</script>

<template>
  <div class="battle-step">
    <div class="image-container">
      <img :src="img1" class="base-img" alt="Before Movement" />
      <img
        :src="img2"
        class="overlay-img"
        :style="{
          opacity: transitionValue / 100,
          'mix-blend-mode': showDifference ? 'difference' : 'normal'
        }"
        alt="After Movement"
      />
    </div>

    <div class="controls">
      <div class="slider-container">
        <button v-on:click="transitionValue = 0">Before</button>
        <button v-on:click="transitionValue = 50">Between</button>
        <button v-on:click="transitionValue = 100">After</button>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<style scoped>
.battle-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 auto 2rem auto;
  max-width: 800px;
  width: 100%;
}

.image-container {
  display: grid;
  place-items: center;
  width: 100%;
}

.base-img, .overlay-img {
  grid-area: 1 / 1;
  max-width: 100%;
  height: auto;
  border: solid 7px #C2B280;
  box-sizing: border-box;
}

.controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
}

</style>
