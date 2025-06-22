<script setup lang="ts">
import Dog from '@/components/modes/dog/DogMode.vue'
import QuizTime from '@/components/modes/quiz/QuizTime.vue'
import Dyslexia from '@/components/modes/dyslexia/Dyslexia.vue'
import PhraseLearner from '@/components/modes/phrase-learner/PhraseLearner.vue'
import Ship from '@/components/modes/ship/ShipMode.vue'
import RomanClock from '@/components/modes/roman-clock/RomanClock.vue'
import AusPop from '@/components/modes/aus-pop/AusPop.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { stringToMode, Mode } from '@/modes'
import { useModeStore } from '@/stores/mode'

const modeStore = useModeStore()

const route = useRoute()
const mode = ref(stringToMode(route.params.mode as string)) // Get the mode from the URL

onMounted(() => {
  modeStore.setMode(mode.value)
})
</script>

<template>
  <div>
    <RouterLink to="/modes">Back to modes</RouterLink>
    <div v-if="mode == Mode.Normal">
      <p>ERROR</p>
    </div>
    <Dog v-else-if="mode == Mode.Dog" />
    <QuizTime v-else-if="mode == Mode.QuizTime" />
    <Dyslexia v-else-if="mode == Mode.Dyslexia" />
    <PhraseLearner v-else-if="mode == Mode.PhraseLearner" />
    <Ship v-else-if="mode == Mode.Ship" />
    <RomanClock v-else-if="mode == Mode.RomanClock" />
    <AusPop v-else-if="mode == Mode.AusPop" />
  </div>
</template>

<style scoped>
div {
  margin-top: 10px;
}
</style>
