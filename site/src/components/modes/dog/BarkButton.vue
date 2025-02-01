<script setup lang="ts">
import { ref } from 'vue'

const barks = ref(0)
const barking = ref(false)

function bark() {
  barking.value = true

  const audioFile = '/audio/bark.ogg'
  // Get random number 0 to 10 then and if it's equal to 0 then play the random bark
  if (barks.value > 10 && Math.floor(Math.random() * 10) === 0) {
  }

  var audio = new Audio('/audio/bark.ogg')
  audio.play()
  audio.addEventListener('ended', function () {
    barking.value = false
    barks.value++
  })
}

function getRandomRotation() {
  const rotations = ['0', '90deg', '180deg', '270deg']
  const result = rotations[Math.floor(Math.random() * rotations.length)]
  return result
}
</script>

<template>
  <div>
    <button @click="bark" :disabled="barking">
      <img
        v-if="barking"
        :style="`transform: rotate(${getRandomRotation()})`"
        src="/photos/dogLaughing.png"
      />
      <img v-else src="/photos/dogNotLaughing.png" />
    </button>
    <div>
      <p v-if="barks == 0">Try 🐕barking🐕 click above 👆?</p>
      <p v-else-if="barks < 10">Keep barking you have barked {{ barks }} times!</p>
      <p v-else-if="barks < 15">🐕 {{ barks }} 🐕</p>
      <p v-else-if="barks < 17">🐶 {{ barks }} 🐶</p>
      <p v-else-if="barks < 20">Woof woof that's all you do hey well guess what? ({{ barks }})</p>
      <p v-else-if="barks < 25">
        You will never find out because i'm not sure what the secret is ({{ barks }})
      </p>
      <p v-else>
        {{ barks }} That was another lie the endless barking has woken me up before
        <a
          href="https://www.youtube.com/watch?v=Z43UBOW7NiQ&list=FLQ6znzvz_EIoXXY9FT1XJkA"
          target="_blank"
          >steamtember hams</a
        >
        {{ barks }}
      </p>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 200px;
  max-height: 150px;
}

a {
  color: darkred;
}

a:hover {
  background-color: black;
}

.up {
  transform: rotate(0);
}

.left {
  transform: rotate(90deg);
}

.right {
  transform: rotate(90deg);
}

.down {
  transform: rotate(90deg);
}
</style>
