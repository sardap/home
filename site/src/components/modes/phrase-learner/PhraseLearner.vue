<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface PhraseEntry {
  text: string
  audio?: string
}

interface Phrase {
  korean: PhraseEntry[]
  english: PhraseEntry[]
  type: string
}

const phrases: Phrase[] = [
  {
    type: 'statement',
    korean: [
      {
        text: '키가 크다'
      },
      {
        text: '너무 키가 크다'
      }
    ],
    english: [
      {
        text: 'Tall'
      }
    ]
  },
  {
    type: 'statement',
    korean: [
      { text: '잘생겼다' },
      { text: '멋지다' },
      { text: '아주 잘생긴다' },
      { text: '참 잘생겼다' }
    ],
    english: [{ text: 'Handsome' }]
  },
  {
    type: 'statement',
    korean: [{ text: '축하합니다' }, { text: '축하드려요' }, { text: '축하해요' }],
    english: [{ text: 'Congratulations' }]
  },
  {
    type: 'statement',
    korean: [{ text: '여드름이 있어요' }, { text: '여드름이 많아요' }],
    english: [{ text: 'You have pimples' }]
  },
  {
    type: 'question',
    korean: [
      { text: '너 몇 살이야?' },
      { text: '당신의 나이는 몇 살입니까?' },
      { text: '나이가 얼마나 됩니까?' },
      { text: '너 몇살?' }
    ],
    english: [{ text: 'How old are you?' }]
  },
  {
    type: 'question',
    korean: [
      { text: '무슨일하세요?' },
      { text: '직업이뭐에요?' },
      { text: '당신이 하는 일은 무엇인가요?' },
      { text: '어떤 직업을 가지고 있나요?' },
      { text: '어떤 직업을 하고 계신가요?' },
      { text: '직업이 뭐시죠?' }
    ],
    english: [{ text: "What's your job?" }]
  },
  {
    type: 'question',
    korean: [
      { text: '둘이 얼마나 사귀었어요?' },
      { text: '연애한지 얼마나 되었나요?' },
      { text: '당신들은 언제부터 사귀기 시작했나요?' },
      { text: '사귄지 얼마나 됐어요?' },
      { text: '얼마 동안 사겼나요?' }
    ],
    english: [{ text: 'How long have you been dating?' }]
  },
  {
    type: 'question',
    korean: [
      { text: '당신의 MBTI는 무엇입니까?' },
      { text: 'MBTI 유형이 어떻게 되나요?' },
      { text: '당신의 MBTI는 무엇인가요?' }
    ],
    english: [{ text: "What's your MBTI?" }]
  },
  {
    type: 'question',
    korean: [
      { text: '언제 호주로 돌아가십니까?' },
      { text: '언제 호주에 가시나요?' },
      { text: '언제 호주로 복귀하나요?' },
      { text: '언제 호주에 돌아가려고 하나요?' }
    ],
    english: [{ text: 'When do you go back to Australia?' }]
  },
  {
    type: 'question',
    korean: [
      { text: '당신은 허니문을 어디에서 보내십니까?' },
      { text: '당신은 허니문을 어디로 가나요?' },
      { text: '허니문을 어디에서 즐길 예정인가요?' },
      { text: '허니문을 어디로 가시나요?' }
    ],
    english: [{ text: 'Where do you go for a honeymoon?' }]
  },
  {
    type: 'question',
    korean: [
      { text: '언제 아이를 가질 계획인가요?' },
      { text: '언제 아이를 갖고 싶어하십니까?' },
      { text: '언제 아이를 기대하고 있나요?' }
    ],
    english: [{ text: 'When are you having kids?' }]
  },
  {
    type: 'question',
    korean: [
      { text: '어디에서 공부했나요?' },
      { text: '당신은 어디서 학업을 이수했나요?' },
      { text: '어디에서 교육을 받았나요?' },
      { text: '어디서 배웠어요?' },
      { text: '어디서 학교 다녔어요?' }
    ],
    english: [{ text: 'Where did you study?' }]
  },
  {
    type: 'question',
    korean: [
      { text: '왜 아내를 좋아하십니까?' },
      { text: '왜 당신의 아내를 좋아하나요?' },
      { text: '당신의 아내에게서 무엇을 좋아하나요?' },
      { text: '왜 당신은 아내를 사랑하나요?' }
    ],
    english: [{ text: 'Why do you like your wife?' }]
  }
]

interface Question {
  question: string
  options: string[]
  correctAnswer: string
  korean: boolean
}

interface HistoryEntry {
  question: string
  answer: string
  correctAnswer: string
  correct: boolean
}

const history = ref<HistoryEntry[]>([])

const currentQuestion = ref<Question>({
  question: '',
  options: [],
  correctAnswer: '',
  korean: true
})
const answer = ref<string | null>(null)
const speed = ref(1.0)

function speakOption(korean: boolean, option: string) {
  const utterance = new SpeechSynthesisUtterance(option)
  utterance.lang = korean ? 'ko-KR' : 'en-US'
  utterance.volume = 1.0

  if (speed.value > 2) {
    utterance.rate = 2
  } else if (speed.value < 0) {
    utterance.rate = 0
  } else {
    utterance.rate = speed.value
  }

  speechSynthesis.speak(utterance)
}

function speakQuestion() {
  speakOption(currentQuestion.value.korean, currentQuestion.value.question)
}

function getNextPhrase() {
  const currentPhrase = phrases[Math.floor(Math.random() * phrases.length)]
  const englishAnswers = Math.random() < 0.9

  if (englishAnswers) {
    currentQuestion.value.question =
      currentPhrase.korean[Math.floor(Math.random() * currentPhrase.korean.length)].text
    currentQuestion.value.options = [
      currentPhrase.english[Math.floor(Math.random() * currentPhrase.english.length)].text
    ]
  } else {
    currentQuestion.value.question =
      currentPhrase.english[Math.floor(Math.random() * currentPhrase.english.length)].text
    currentQuestion.value.options = [
      currentPhrase.korean[Math.floor(Math.random() * currentPhrase.korean.length)].text
    ]
  }

  currentQuestion.value.correctAnswer = currentQuestion.value.options[0]

  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * phrases.length)
    const randomPhrase = phrases[index]
    if (randomPhrase === currentPhrase) {
      i--
      continue
    }

    let nextOption: string = ''

    if (englishAnswers) {
      nextOption =
        randomPhrase.english[Math.floor(Math.random() * randomPhrase.english.length)].text
    } else {
      nextOption = randomPhrase.korean[Math.floor(Math.random() * randomPhrase.korean.length)].text
    }

    if (currentQuestion.value.options.includes(nextOption)) {
      i--
      continue
    }

    currentQuestion.value.options.push(nextOption)
  }

  currentQuestion.value.options = currentQuestion.value.options.sort(() => Math.random())
  currentQuestion.value.korean = englishAnswers
  speakQuestion()
}

function submit() {
  if (!answer.value) {
    return
  }

  history.value.push({
    question: currentQuestion.value.question,
    answer: answer.value,
    correctAnswer: currentQuestion.value.correctAnswer,
    correct: answer.value === currentQuestion.value.correctAnswer
  })
  getNextPhrase()
  answer.value = null
}

onMounted(() => {
  getNextPhrase()
})
</script>

<template>
  <div>
    <h1>I Need to Learn these phrases</h1>
    <div>
      <h2>Current Phrase</h2>
      <div>
        <h3 @click="() => speakQuestion()">{{ currentQuestion.question }}</h3>
        <div>
          <label>Speed </label>
          <input type="number" v-model="speed" />
        </div>
        <div>
          <h3>Options</h3>
          <div class="table-container">
            <table>
              <tr v-for="(option, i) in currentQuestion.options">
                <td>
                  <input
                    :id="`quiz_time_radio_${option}`"
                    :name="`quiz_time_radio_${option}`"
                    type="radio"
                    :value="option"
                    v-model="answer"
                  />
                </td>
                <td>
                  <label :id="`quiz_time_radio_${option}`" :for="`quiz_time_radio_${option}`">{{
                    option
                  }}</label>
                </td>
                <td>
                  <button @click="() => speakOption(!currentQuestion.korean, option)">Speak</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <button @click="submit">Submit</button>
      <div v-if="history.length > 0">
        <h3>History</h3>
        <div v-for="i in history">
          <hr />
          <p>Question:{{ i.question }}</p>
          <p>Answer:{{ i.answer }}</p>
          <p v-if="!i.correct">Correct Answer:{{ i.correctAnswer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
}

table {
  width: auto;
  text-align: left;
}
</style>
