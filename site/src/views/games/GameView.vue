<script setup lang="ts">
import UltimateChess2024Play from '@/components/games/UltimateChess2024Play.vue'
import walkGoodMaybeGame from '@/components/games/WalkGoodMaybePlay.vue'
import NoTouchyMyFacePlay from '@/components/games/NoTouchyMyFacePlay.vue'
import StopTheMailPlay from '@/components/games/StopTheMailPlay.vue'
import WeddingPlannerPlay from '@/components/games/WeddingPlannerPlay.vue'
import VotiesPlay from '@/components/games/VotiesPlay.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const game = ref(route.params.game as string) // Get the mode from the URL
</script>

<template>
  <div>
    <RouterLink to="/games">Back to games</RouterLink>
    <h2>{{ game.toUpperCase() }}</h2>
    <walkGoodMaybeGame v-if="game == 'walk-good-maybe'" />
    <UltimateChess2024Play v-else-if="game == 'ultimate-chess-2024'" />
    <NoTouchyMyFacePlay v-else-if="game == 'no-touchy-my-facey'" />
    <StopTheMailPlay v-else-if="game == 'stop-the-mail'" />
    <WeddingPlannerPlay v-else-if="game == 'wedding-planner'" />
    <VotiesPlay v-else-if="game == 'voties'" />
    <div v-else>
      <p>ERROR</p>
    </div>
  </div>
</template>

<style scoped></style>
