<script setup lang="ts">
import { Mode } from '@/modes'
import { useRouter } from 'vue-router'

const router = useRouter()

const modes = getModes()

function getModes() {
  const modes = [Mode.Dog, Mode.QuizTime, Mode.Dyslexia, Mode.Ship, Mode.RomanClock, Mode.AusPop]

  // Shuffle the modes
  for (let i = modes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = modes[i]
    modes[i] = modes[j]
    modes[j] = temp
  }

  return modes
}

function startMode(mode: Mode) {
  router.push(`/modes/${mode}`)
}

function feelingLuckyClicked() {
  const randomIndex = Math.floor(Math.random() * modes.length)
  const randomMode = modes[randomIndex]
  startMode(randomMode)
}
</script>

<template>
  <div>
    <h2>Welcome to the mode selector</h2>
    <p>
      These are the ideas that I had and needed to make but are all a bit shit, A bit silly or both.
    </p>
    <div class="mode-rows">
      <table>
        <tr v-for="mode in modes" :key="mode">
          <td>
            {{ mode }}
          </td>
          <td>
            <RouterLink :to="`/modes/${mode}`">GO</RouterLink>
          </td>
        </tr>
      </table>
    </div>
    <button @click="feelingLuckyClicked">Im Feeling lucky</button>
  </div>
</template>

<style scoped>
div {
  margin-top: 10px;
}

td {
  text-align: left;
}

table {
  width: 300px;
}

.mode-rows {
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
</style>
