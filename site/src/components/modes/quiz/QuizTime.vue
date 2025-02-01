<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useModeStore } from '@/stores/mode'
import { Mode } from '@/modes'

const modeStore = useModeStore()

onMounted(() => {
  modeStore.setMode(Mode.Dog)
})

onUnmounted(() => {
  modeStore.clearMode()
})

interface Question {
  question: string
  options?: string[]
  answer: string
  bonusInfo?: string
}

interface QuestionHistory {
  question: Question
  answer: string
  correct: boolean
}

const questions: Question[] = [
  {
    question: 'In what year did the first Gulf War start?',
    answer: '1990'
  },
  {
    question: 'Who is the longest-serving Australian Prime Minister?',
    options: ['Robert Menzies', 'John Howard', 'Bob Hawke', 'Malcolm Fraser'],
    answer: 'Robert Menzies',
    bonusInfo: 'He was Prime Minister for 18 years.'
  },
  {
    question:
      'Which Australian Prime Minister had the highest Nielsen Poll rating at any point during their tenure?',
    options: ['Kevin Rudd', 'John Howard', 'Bob Hawke', 'Gough Whitlam', 'Malcolm Fraser'],
    answer: 'Bob Hawke',
    bonusInfo: 'Bob Hawke had a 75% approval rating in 1984.'
  },
  {
    question:
      'Which of these options is the correct order of release for these consoles in Australia?',
    options: [
      'Sega Saturn, Playstation 1, Nintendo 64',
      'Playstation 1, Sega Saturn, Nintendo 64',
      'Nintendo 64, Playstation 1, Sega Saturn',
      'Playstation 1, Nintendo 64, Sega Saturn',
      'Nintendo 64, Sega Saturn, Playstation 1',
      'Sega Saturn, Nintendo 64, Playstation 1'
    ],
    answer: 'Sega Saturn, Playstation 1, Nintendo 64',
    bonusInfo:
      'The Sega Saturn was released in 1995, followed by the Playstation 1 later the same year, and the Nintendo 64 in 1997.'
  },
  {
    question: 'Which company launched the Sega Dreamcast in Australia?',
    answer: 'Ozisoft',
    bonusInfo: 'Ozisoft was renamed to Atari Australia Pty Ltd. in 2003.'
  },
  {
    question: 'As of version 7.33d, how many DOTA 2 heroes are there?',
    answer: '124'
  },
  {
    question:
      "Which Attorney General quashed a workers' strike in 1938 that protested the export of iron to Japan following the Nanking Massacre?",
    options: [
      'Robert Menzies (Liberal)',
      'Frank Brennan (Labor)',
      'John Latham (Nationalist)',
      'Herbert Evatt (Labor)'
    ],
    answer: 'Robert Menzies (Liberal)',
    bonusInfo: 'He went on to become Prime Minister in 1939, a year later.'
  },
  {
    question:
      'What did King Charles III write to Governor General John Kerr after he dismissed the democratically elected Prime Minister, Gough Whitlam?',
    options: [
      "'What you did last year was right and the courageous thing to do.'",
      "'I have no opinion on the matter as I'm obligated to be politically neutral.'"
    ],
    answer: "'What you did last year was right and the courageous thing to do.'"
  },
  {
    question: 'Which private military company used an Xbox 360 game for advertisement?',
    options: ['Blackwater', 'G4S', 'DynCorp', 'FDG Corp'],
    answer: 'Blackwater'
  },
  {
    question:
      'Which government agency conducted a 1983 training operation at the Sheraton Hotel, during which its employees brandished firearms at hotel staff and guests during a mock hostage scenario without prior notification to the police or hotel management?',
    options: [
      'Australian Security Intelligence Organisation (ASIO)',
      'Australian Secret Intelligence Service (ASIS)',
      'Australian Federal Police (AFP)',
      'Australian Criminal Intelligence Commission (ACIC)',
      'Australian Border Force (ABF)'
    ],
    answer: 'Australian Secret Intelligence Service (ASIS)',
    bonusInfo: 'In 2004, John Howard gave ASIS permission to resume operations.'
  },
  {
    question:
      'Which political party deliberately designed misleading signs in Chinese, resembling those of the Australian Electoral Commission (AEC), to deceive voters into voting for them?',
    options: ['Liberal Party', 'Australian Labor Party', 'Australian Greens', 'One Nation'],
    answer: 'Liberal Party',
    bonusInfo:
      "The signs stated 'the correct way to vote' and instructed electors to put a '1' next to the Liberal candidate's name."
  },
  {
    question:
      'Which mining company knowingly destroyed a 46,000-year-old Aboriginal cave system in 2019?',
    options: ['Rio Tinto', 'BHP', 'Fortescue Metals Group', 'Glencore'],
    answer: 'Rio Tinto',
    bonusInfo:
      "The investigation concluded that 'Rio Tinto knew the value of what they were destroying but blew it up anyway.'"
  },
  {
    question: 'In which year did South Korea officially adopt the international age system?',
    answer: '2023'
  },
  {
    question: 'In which year did North Korea officially adopt the international age system?',
    answer: '1980'
  },
  {
    question:
      'According to Korean age, if someone was born on 30th December 1999, how old would they be on 1st January 2000?',
    answer: '2'
  },
  {
    question: "What was the GameCube's codename during development?",
    options: ['Dolphin', 'Star Cube', 'Play Cube', 'Project Reality'],
    answer: 'Dolphin',
    bonusInfo:
      "The GameCube's graphics chip was named 'Flipper' in reference to the 'Dolphin' codename."
  },
  {
    question: "What was the duration of the Sega Dreamcast's lifespan in Australia?",
    options: ['1 year', '2 years', '3 years', '4 years'],
    answer: '2 years'
  },
  {
    question: "What is the colour of Sonic's arms in Sonic Adventure?",
    options: ['Blue', 'Peach'],
    answer: 'Peach',
    bonusInfo: 'Sonics arms in the movie are Blue'
  },
  {
    question:
      'Which company sued the developers, Silicon Knights, accusing them of stealing their source code to create the engine for the hit Xbox 360 game Too Human?',
    options: ['Epic Games', 'ZeniMax Media', 'Id Software', 'Activision'],
    answer: 'Epic Games'
  },
  {
    question: 'Which 50 Cent game has the highest Metacritic score?',
    options: [
      '50 Cent: Bulletproof',
      '50 Cent: Blood on the Sand',
      '50 Cent: Bulletproof G Unit Edition'
    ],
    answer: '50 Cent: Blood on the Sand'
  },
  {
    question:
      "How many pit bulls did the police seize from DMX's house when they raided it in 2008 due to a dog-fighting ring?",
    answer: '12'
  },
  {
    question: 'As of 01/07/2023, how many Rabbids games are there?',
    options: ['10', '15', '18', '23', '27'],
    answer: '23'
  },
  {
    question: 'How many consecutive covid 19 press conferences did Daniel Andrews do?',
    options: ['120', '93', '127', '82', '97', '101', '113', '118'],
    answer: '120'
  }
]

const diceRollAudio = new Audio('/audio/quiz/diceRoll.wav')
const answerAudio = new Audio('')

const questionHistory = ref<QuestionHistory[]>([])

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]] // Using destructuring assignment to swap elements
  }
  return array
}

function getNextQuestion(): Question | null {
  const unansweredQuestions = questions.filter((question) => {
    for (const history of questionHistory.value) {
      if (history.question.question == question.question) {
        return false
      }
    }
    return true
  })
  console.log(`unansweredQuestions ${unansweredQuestions.length} questions ${questions.length}`)
  if (unansweredQuestions.length === 0) {
    return null
  }

  const result = unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)]

  if (result.options) {
    console.log(`shuffling options ${JSON.stringify(result.options)}`)
    result.options = shuffleArray(result.options)
    console.log(`shuffled options ${JSON.stringify(result.options)}`)
  }

  return result
}

const currentQuestion = ref(getNextQuestion())

const answer = ref('')

function getQuestionFlavourText(): string {
  const options = ['for the genius', 'for the "expert"']
  return options[Math.floor(Math.random() * options.length)]
}

const flavourText = getQuestionFlavourText()

function answerQuestion() {
  if (!currentQuestion.value) {
    return
  }

  const resolved = {
    question: currentQuestion.value,
    answer: answer.value,
    correct: answer.value.toLowerCase() == currentQuestion.value.answer.toLowerCase()
  }
  questionHistory.value.push(resolved)

  if (resolved.correct) {
    const correctFiles = ['correct_1.ogg', 'correct_2.ogg', 'correct_3.ogg']
    answerAudio.src = '/audio/quiz/' + correctFiles[Math.floor(Math.random() * correctFiles.length)]
  } else {
    const wrongFiles = ['wrong_1.ogg', 'wrong_2.ogg', 'wrong_3.ogg']
    answerAudio.src = '/audio/quiz/' + wrongFiles[Math.floor(Math.random() * wrongFiles.length)]
  }
  answerAudio.play()
  diceRollAudio.play()

  currentQuestion.value = getNextQuestion()
  answer.value = ''
}

function getScore() {
  let correct = 0
  for (const question of questionHistory.value) {
    if (question.correct) {
      correct++
    }
  }
  return `${correct}/${questionHistory.value.length} (${Math.round(
    (correct / questionHistory.value.length) * 100
  )}%)`
}
</script>

<template>
  <div class="question">
    <div>
      <img src="/photos/quiz/welcome.gif" />
      <img src="/photos/quiz/quiz.gif" />
    </div>
    <img src="/photos/quiz/background.png" width="100" />
    <br />
    <div>
      <h2>ANSWER THIS QUESTION IF YOU 👻DARE👻</h2>
    </div>
    <br />
    <div>
      <h3>Question {{ flavourText }}</h3>
      <hr />
      <div v-if="currentQuestion">
        <p>{{ currentQuestion.question }}</p>
        <div v-if="currentQuestion.options" class="table-container">
          <table>
            <tr v-for="(option, i) in currentQuestion.options" :key="i">
              <td>
                <input
                  :id="`quiz_time_radio_${i}`"
                  :name="`quiz_time_radio_${i}`"
                  type="radio"
                  :value="option"
                  v-model="answer"
                />
              </td>
              <td>
                <label :id="`quiz_time_radio_${i}`" :for="`quiz_time_radio_${i}`">{{
                  option
                }}</label>
              </td>
            </tr>
          </table>
        </div>
        <div v-else>
          <input type="text" v-model="answer" />
        </div>
        <br />
        <button @click="answerQuestion">Submit Answer</button>
      </div>
      <div v-else>
        <p>Out of questions you have stumped the quiz master!</p>
      </div>
    </div>
    <br />
    <div v-if="questionHistory.length > 0">
      <h3>Question History</h3>
      <p>{{ getScore() }}</p>
      <table class="answer-table">
        <tr>
          <th>Number</th>
          <th>Question</th>
          <th>Answer</th>
          <th>Correct</th>
          <th>Bonus Fact</th>
        </tr>
        <tr
          v-for="(question, i) in questionHistory"
          class="border_bottom"
          :class="question.correct ? `correct` : `incorrect`"
          :key="i"
        >
          <td style="text-align: center">#{{ i + 1 }}</td>
          <td>{{ question.question.question }}</td>
          <td>{{ question.answer }}</td>
          <td style="text-align: center">{{ question.correct }}</td>
          <td>{{ question.question.bonusInfo ? question.question.bonusInfo : `N/A` }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.correct {
  color: green;
}

.incorrect {
  color: darkred;
}

.question {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

hr {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.table-container {
  display: flex;
  justify-content: center;
}

table {
  width: auto;
  text-align: left;
}

.history {
  margin-top: 20px;
}

.answer-table table,
.answer-table td,
.answer-table th {
  border-bottom: 1px solid greenyellow;
}

.answer-table {
  border-collapse: collapse;
}
</style>
