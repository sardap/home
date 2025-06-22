<script setup lang="ts">
import { computed, ref } from 'vue'

const startYear = 1787
const ausPop = [
  859, 645, 2056, 2873, 3264, 3514, 3579, 3466, 4100, 4344, 4588, 5088, 5217, 5945, 7014, 7238,
  7598, 7707, 7910, 8794, 10263, 11560, 11566, 11875, 12630, 13957, 14086, 15063, 17553, 21192,
  25859, 31472, 33543, 35492, 37364, 40632, 48072, 52505, 53882, 56300, 58197, 61934, 70039, 75981,
  83937, 98095, 105556, 113354, 125120, 134488, 151868, 169939, 190408, 220968, 240984, 250848,
  264287, 279148, 293249, 308797, 332328, 373362, 405356, 437665, 513796, 600992, 694917, 793260,
  876729, 970287, 1050828, 1097305, 1145585, 1168149, 1206918, 1259292, 1325183, 1390043, 1443955,
  1483848, 1539552, 1592157, 1647756, 1700888, 1742847, 1794520, 1849392, 1898223, 1958679, 2031130,
  2092164, 2162343, 2231531, 2306736, 2388082, 2505736, 2605725, 2694518, 2788050, 2881362, 2981677,
  3062477, 3151355, 3240985, 3305753, 3361895, 3426760, 3491621, 3553098, 3617783, 3664715, 3715988,
  3765339, 3824913, 3875318, 3916592, 3974150, 4032977, 4091485, 4161722, 4232278, 4323960, 4425083,
  4573786, 4746589, 4893741, 4971778, 4969457, 4917949, 4982063, 5080912, 5303574, 5411297, 5510944,
  5637286, 5755986, 5882002, 6003027, 6124020, 6251016, 6355770, 6436213, 6500751, 6552606, 6603785,
  6656695, 6707247, 6755662, 6810413, 6871492, 6935909, 7004912, 7077586, 7143598, 7201096, 7269658,
  7347024, 7430197, 7517981, 7637963, 7792465, 8045570, 8307481, 8527907, 8739569, 8902686, 9089936,
  9311825, 9530871, 9744087, 9947358, 10160968, 10391920, 10642654, 10846059, 11055482, 11280429,
  11505408, 11704843, 11912253, 12145582, 12407217, 12663469, 13198380, 13409288, 13614344,
  13831978, 13968881, 14110107, 14281533, 14430830, 14602481, 14807370, 15054117, 15288891,
  15483496, 15677282, 15900566, 16138769, 16394641, 16687082, 16936723, 17169768, 17378981,
  17557133, 17719090, 17893433, 18119616, 18330079, 18510004, 18705620, 18919210, 19141036,
  19386461, 19605441, 19827155, 20046003, 20311543, 20627547, 21016121, 21475625, 21865623,
  22172469, 22522197, 22928023, 23297777, 23640331, 23984581, 24385064, 24759018, 25146140,
  25520468, 25630698, 25760867, 26302450, 26936431, 27095255, 27594464,
]

const selectedYear = ref(1950)

interface Doubling {
  index: number
  markerIndex: number
  diff: number
  timesDoubled: number
}

const doubles = computed(() => {
  let startIndex = selectedYear.value - startYear
  if (startIndex < 0 || startIndex > ausPop.length) {
    return []
  }

  let markerIndex = startIndex
  let timesDoubled = 0
  const result: Doubling[] = []

  for (let i = startIndex; i < ausPop.length; i++) {
    result.push({
      index: i,
      diff: i < ausPop.length - 1 ? ausPop[i] - ausPop[i - 1] : 0,
      markerIndex: markerIndex,
      timesDoubled: timesDoubled + ausPop[i] / ausPop[markerIndex] - 1,
    })
    if (ausPop[i] > ausPop[markerIndex] * 2) {
      console.log(
        `Pop doubled from ${ausPop[markerIndex]} ${markerIndex + startYear} to ${ausPop[i]} ${i + startYear}`,
      )
      markerIndex = i
      timesDoubled += 1
    }
  }

  return result
})

const biggestJump = computed(() => {
  let maxPercent = 0
  let maxIndex = -1
  let startIndex = selectedYear.value - startYear
  if (startIndex < 0 || startIndex > ausPop.length) {
    return {
      year: 0,
      pop: 0,
      diff: 0,
      percent: 0,
    }
  }

  for (let i = startIndex; i < ausPop.length; i++) {
    const diff = ausPop[i] - ausPop[i - 1]
    const percent = diff / ausPop[i - 1]
    if (percent > maxPercent) {
      maxPercent = percent
      maxIndex = i
    }
  }
  return {
    year: startYear + maxIndex,
    pop: ausPop[maxIndex - 1],
    diff: ausPop[maxIndex] - ausPop[maxIndex - 1],
    percent: maxPercent * 100,
  }
})

const smallestJump = computed(() => {
  let minPercent = Infinity
  let minIndex = -1
  let startIndex = selectedYear.value - startYear
  if (startIndex < 0 || startIndex > ausPop.length) {
    return {
      year: 0,
      pop: 0,
      diff: 0,
      percent: 0,
    }
  }

  for (let i = startIndex; i < ausPop.length; i++) {
    const diff = ausPop[i] - ausPop[i - 1]
    const percent = diff / ausPop[i - 1]
    if (percent < minPercent && percent > 0) {
      minPercent = percent
      minIndex = i
    }
  }
  return {
    year: startYear + minIndex,
    pop: ausPop[minIndex - 1],
    diff: ausPop[minIndex] - ausPop[minIndex - 1],
    percent: minPercent * 100,
  }
})

function formatPop(pop: number) {
  return pop.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}
</script>

<template>
  <div>
    <p>The idea of there being twice as many people somewhere is interesting to me</p>
    <input type="number" min="1787" max="2025" v-model="selectedYear" />
    <p>
      Since {{ selectedYear }} the Aus population has doubled
      {{ doubles[doubles.length - 1].timesDoubled.toFixed(2) }} times.
    </p>
    <p>
      From {{ formatPop(ausPop[doubles[0].index]) }} to
      {{ formatPop(ausPop[doubles[doubles.length - 1].index]) }} or
      {{
        ((ausPop[doubles[doubles.length - 1].index] / ausPop[doubles[0].index] - 1) * 100).toFixed(
          2,
        )
      }}%
    </p>
    <p>
      Biggest jump was from {{ formatPop(biggestJump.pop) }} in {{ biggestJump.year }} to
      {{ formatPop(biggestJump.pop + biggestJump.diff) }} in {{ biggestJump.year + 1 }} ({{
        formatPop(biggestJump.diff)
      }}
      or {{ ((biggestJump.diff / biggestJump.pop) * 100).toFixed(2) }}%)
    </p>
    <p>
      Smallest jump was from {{ formatPop(smallestJump.pop) }} in {{ smallestJump.year }} to
      {{ formatPop(smallestJump.pop + smallestJump.diff) }} in {{ smallestJump.year + 1 }} ({{
        formatPop(smallestJump.diff)
      }}
      or {{ ((smallestJump.diff / smallestJump.pop) * 100).toFixed(2) }}%)
    </p>
    <table>
      <thead>
        <tr>
          <td>Year</td>
          <td>Population</td>
          <td>Difference</td>
          <td>Times doubled</td>
          <td>Years since last doubling</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in doubles" :key="`${row.index}-${row.markerIndex}`">
          <td>{{ startYear + row.index }}</td>
          <td>{{ formatPop(ausPop[row.index]) }}</td>
          <td>
            {{ formatPop(row.diff) }} ({{ ((row.diff / ausPop[row.index]) * 100).toFixed(2) }}%)
          </td>
          <td>{{ row.timesDoubled.toFixed(2) }}</td>
          <td>{{ row.index - row.markerIndex }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}
</style>
