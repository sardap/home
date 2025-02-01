<script setup lang="ts">
import { dyslexiafiy_block } from '@/dyslexia_word_bank'
import { useModeStore } from '@/stores/mode'
import { onMounted, onUnmounted, ref } from 'vue'

const welcomeText = 'Welcome to dyslexic mode!'

const introParagraph =
  'The way this was written is I recorded audio, Then i wrote it down' +
  ' just by listening to the audio and transcribing it.' +
  ' I then took the different spelling variations that I did in each iteration,' +
  ' and put them in a big list. This page picks random different versions of each word. Every time you load it will be different!'

const dota2 =
  'Fun dota 2 facts!' +
  ' Terminator is a new neutral creep in dota 2. When your team destroys it the poorest on the team gets an Aghanims shard.'

const concurrentProgramming =
  'I will never forget when I took my first concurrent programming class. I always' +
  ' thought there was some magic behind concurrent programming to make it happen across multiple threads.' +
  ' But it turns out the whole class was just about using locks and semaphores. As soon as you have' +
  ' two pieces of code running in parallel when they need to interact with the same code you' +
  ' put a lock on it so only one can actually interact with the critical section.'

const atlassian =
  'Just as a preamble I love working at Atlassian. But Atlassian is a company that prides itself at making' +
  ' product names which are impossible to spell.' +
  ' We have the company name itself atlassian, then we have confluence, opsgenie' +
  ' the company mascot is even called charlie and we use this tool called socrates. it is great instead of having' +
  ' short and easy to spell words we have long and impossible to spell words.'

const thanks =
  "thanks for reading this is obviously very rambly but i couldn't write it " +
  ' then read it aloud then rewrite or that would poison the well.'

const alsoTheWordsRefreshEverySecond =
  'Also the words refresh every 5 seconds this is not meant to be a dyslexia simulator'

const refresh = ref(0)

onMounted(async () => {
  setInterval(() => {
    refresh.value++
  }, 5000)
})

const modeStore = useModeStore()

onUnmounted(() => {
  modeStore.clearMode()
})
</script>

<template>
  <div>
    <div :key="refresh">
      <h2>{{ dyslexiafiy_block(welcomeText) }}</h2>
      <p>{{ dyslexiafiy_block(alsoTheWordsRefreshEverySecond) }}</p>
      <div>
        <h3>{{ dyslexiafiy_block('Intro') }}</h3>
        <p>{{ dyslexiafiy_block(introParagraph) }}</p>
      </div>
      <div>
        <h3>{{ dyslexiafiy_block('Atlassian') }}</h3>
        <p>{{ dyslexiafiy_block(atlassian) }}</p>
      </div>
      <div>
        <h3>{{ dyslexiafiy_block('Dota 2') }}</h3>
        <p>{{ dyslexiafiy_block(dota2) }}</p>
      </div>
      <div>
        <h3>{{ dyslexiafiy_block('Concurrent programming') }}</h3>
        <p>{{ dyslexiafiy_block(concurrentProgramming) }}</p>
      </div>
      <div>
        <h3>{{ dyslexiafiy_block('Thanks for reading') }}</h3>
        <p>{{ dyslexiafiy_block(thanks) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
iframe {
  max-width: 100%;
  width: 560px;
  height: 315px;
}
</style>
