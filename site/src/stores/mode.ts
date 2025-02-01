import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Mode } from '@/modes'

export const useModeStore = defineStore('mode', () => {
  const mode = ref(Mode.Normal)
  const backgroundMusic = ref<HTMLAudioElement | null>(null)

  function clearMode() {
    setMode(Mode.Normal)
  }

  function setMode(newMode: Mode) {
    if (newMode === mode.value) {
      return
    }

    // Disable old mode
    switch (mode.value) {
      case Mode.Normal:
        break
      case Mode.Dog:
        disableDogMode()
        break
      case Mode.QuizTime:
        break
      case Mode.Dyslexia:
        break
    }

    mode.value = newMode

    // call new mode function
    switch (newMode) {
      case Mode.Normal:
        break
      case Mode.Dog:
        enableDogMode()
        break
      case Mode.QuizTime:
        enableQuizTimeMode()
        break
      case Mode.Dyslexia:
        break
    }
  }

  function enableDogMode() {
    backgroundMusic.value = new Audio('/audio/dogMode.ogg')
    backgroundMusic.value.volume = 0.25
    backgroundMusic.value.play()
    backgroundMusic.value.loop = true
  }

  function disableDogMode() {
    if (backgroundMusic.value) {
      backgroundMusic.value.pause()
    }
  }

  function enableQuizTimeMode() {
    backgroundMusic.value = new Audio('/audio/quiz/quizTime.ogg')
    backgroundMusic.value.volume = 1
    backgroundMusic.value.play()
  }

  return { mode, setMode, clearMode }
})
