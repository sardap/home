<script setup lang="ts">
import Uc2024 from '@/components/embedded/Uc2024.vue'
import { UltimateChess2024 } from '@/games'
import DownloadSection from './DownloadSection.vue'
</script>

<template>
  <div>
    <DownloadSection :game="UltimateChess2024" />
    <div class="how-to-play">
      <h3>How to play</h3>
      <ul>
        <li>Use arrow keys in the menus.</li>
        <li>Use Enter to select a menu option.</li>
        <li>
          In game you must use
          <a target="_blank" href="https://en.wikipedia.org/wiki/Algebraic_notation_(chess)"
            >Algebraic notation</a
          >
          to move units.
        </li>
        <li>Use ESC to go back to the main menu.</li>
      </ul>
    </div>
  </div>
  <br />
  <Uc2024 />
</template>

<style scoped>
ul {
  display: inline-block;
  text-align: left;
}

.how-to-play {
  text-align: center;
}
</style>
