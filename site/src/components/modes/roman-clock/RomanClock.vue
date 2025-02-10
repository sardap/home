<script setup lang="ts">
import { RomanTime } from 'modern-roman-clock'
import { h, onMounted, ref, watch } from 'vue'
import WorldMap from './WorldMap.vue'
import { find } from 'browser-geo-tz'

const lat = ref(getLatLngFromSearch('lat', -41.3734772))
const lng = ref(getLatLngFromSearch('lng', 146.2662416))
const date = ref(new Date().toISOString().split('T')[0])
const time = ref(new Date().getHours() + ':' + new Date().getMinutes())
const selectedTimeZone = ref('Australia/Melbourne')
const countryLeaderCode = ref('AU')

function getLatLngFromSearch(key: string, fallback: number) {
  if ('URLSearchParams' in window) {
    const url = new URL(window.location.href)
    const urlParams = new URLSearchParams(url.search)
    if (urlParams.has(key)) {
      return parseFloat(urlParams.get(key)!)
    }
  }

  return fallback
}

onMounted(async () => {
  if ('URLSearchParams' in window) {
    const url = new URL(window.location.href)
    const urlParams = new URLSearchParams(url.search)
    if (urlParams.has('date')) {
      date.value = urlParams.get('date')!
    }
    if (urlParams.has('time')) {
      time.value = urlParams.get('time')!
    }
    if (urlParams.has('timezone')) {
      selectedTimeZone.value = urlParams.get('timezone')!
    }
    if (urlParams.has('countryLeaderCode')) {
      countryLeaderCode.value = urlParams.get('countryLeaderCode')!
    }
  }

  romanTime.value = new RomanTime(new Date(), selectedTimeZone.value, lat.value, lng.value)
})
const validCountryCodes = ['AU', 'US', 'UK', 'NZ']

const romanTime = ref<RomanTime>()

watch([date, time, lat, lng], async () => {
  const timezones = await find(lat.value, lng.value)
  selectedTimeZone.value = timezones[0]
  const parsed_time = new Date(`${date.value}T${time.value}`)

  romanTime.value = new RomanTime(parsed_time, selectedTimeZone.value, lat.value, lng.value)
  copyTextDirty.value = false
  copyLinkDirty.value = false
})

function updateLocation(new_lat: number, new_lng: number) {
  lat.value = new_lat
  lng.value = new_lng
}

const copyTextDirty = ref(false)
const copyLinkDirty = ref(false)

function copyTimeTextToClipboard() {
  if (!romanTime.value) {
    return
  }
  navigator.clipboard.writeText(
    `The time is ${romanTime.value.hour_string()} of ${romanTime.value.date_string()} in ${romanTime.value.year_string(
      countryLeaderCode.value,
    )}`,
  )
  copyTextDirty.value = true
  copyLinkDirty.value = false
}

function copyLinkToClipboard() {
  const url = new URL(window.location.href)
  url.searchParams.set('mode', 'roman clock')
  url.searchParams.set('lat', lat.value.toString())
  url.searchParams.set('lng', lng.value.toString())
  url.searchParams.set('date', date.value.toString())
  url.searchParams.set('time', time.value.toString())
  url.searchParams.set('timezone', selectedTimeZone.value)
  url.searchParams.set('countryLeaderCode', countryLeaderCode.value)
  navigator.clipboard.writeText(url.toString())
  copyLinkDirty.value = true
  copyTextDirty.value = false
}

const year = ref(new Date().getFullYear())
const month = ref(new Date().getMonth() + 1)
const day = ref(new Date().getDate())
const hours = ref(new Date().getHours())
const minutes = ref(new Date().getMinutes())

watch([hours, minutes], async () => {
  if (hours.value < 0) {
    hours.value = 0
  }
  if (hours.value > 23) {
    hours.value = 23
  }
  if (minutes.value > 59) {
    minutes.value = 59
  }
  if (minutes.value < 0) {
    minutes.value = 0
  }
  time.value = hours.value + ':' + minutes.value
  console.log(time.value)
})

watch([year, month, day], async () => {
  if (month.value > 12) {
    month.value = 12
  }
  if (month.value < 1) {
    month.value = 1
  }
  if (day.value > 31) {
    day.value = 31
  }
  if (day.value < 1) {
    day.value = 1
  }
  date.value = `${year.value}-${month.value.toString().padStart(2, '0')}-${day.value.toString().padStart(2, '0')}`
  console.log(date.value)
})

const datePickerKind = ref<'system' | 'custom'>('custom')
</script>

<template>
  <div v-if="!romanTime">
    <p>Loading</p>
  </div>
  <div v-else>
    <div>
      <h3>The Time is</h3>
      <p class="current-time" :key="date.toString()">
        {{ romanTime.hour_string() }} of {{ romanTime.date_string() }} in
        {{ romanTime.year_string(countryLeaderCode) }}
      </p>
      <button @click="copyTimeTextToClipboard" :disabled="copyTextDirty">
        {{ !copyTextDirty ? `Copy time to clipboard` : `Copied text` }}
      </button>
      <button @click="copyLinkToClipboard" :disabled="copyLinkDirty">
        {{ !copyLinkDirty ? `Copy link to clipboard` : `Copied link` }}
      </button>
    </div>
    <div class="extra">
      <p>On this day</p>
      <p>
        Each daylight hour is
        {{ Math.ceil(Number(romanTime.daylight_length_seconds()) / 12 / 60) }} Minutes
      </p>
      <p>
        Each night hour is
        {{ Math.floor(Number(romanTime.night_length_seconds()) / 12 / 60) }} Minutes
      </p>
    </div>
    <hr />
    <div>
      <h3>Parameters</h3>
      <select v-model="datePickerKind">
        <option value="system">System Date Picker</option>
        <option value="custom">Custom Date Picker</option>
      </select>
      <div v-if="datePickerKind === 'system'">
        <label>Date</label>
        <input type="date" v-model="date" />
        <label>Time</label>
        <input type="time" v-model="time" />
      </div>
      <div v-else-if="datePickerKind === 'custom'">
        <div>
          <table>
            <tr>
              <td>Year</td>
              <td>Month</td>
              <td>Day</td>
              <td>Hours</td>
              <td>Minutes</td>
            </tr>
            <tr>
              <td><input type="number" v-model="year" /></td>
              <td><input type="number" v-model="month" /></td>
              <td><input type="number" v-model="day" /></td>
              <td><input type="number" v-model="hours" /></td>
              <td><input type="number" v-model="minutes" /></td>
            </tr>
          </table>
        </div>
      </div>
      <p>Country Leader Code</p>
      <select v-model="countryLeaderCode">
        <option v-for="countryCode in validCountryCodes" :value="countryCode" :key="countryCode">
          {{ countryCode }}
        </option>
      </select>
      <br />
      <div class="location-picker">
        <p>Location picker</p>
        <WorldMap :starting-lat="lat" :starting-lng="lng" @location-change="updateLocation" />
        <label>Lat</label>
        <input type="number" v-model="lat" />
        <label>Lng</label>
        <input type="number" v-model="lng" />
      </div>
    </div>
    <hr />
    <div>
      <h3>What the hell is this?</h3>
      <p>
        This is a way of seeing how the romans would mostly tell the date and time using modern
        words and leaders.
      </p>
      <ul>
        <li>The day was broken into 24 hours (Normal)</li>
        <li>There were 12 daylight hours and 12 nightlight hours (Strange)</li>
        <li>
          The day started at dawn not at midnight. (This makes sense how are you meant to know
          midnight in the middle of the night)
        </li>
        <li>
          The first daylight hour was at sunrise with the last being and sunset. Which means that
          depending on the location and time of years hours were longer or shorter.
        </li>
        <li>
          The day of the month wasn't just specified you needed to say how long it was until the
          next marker, Kalends, Nones, or Ides. This makes sense when you remember that for most of
          roman history they had extra days in a year added at random times throughout the year.
        </li>
        <li>
          You wouldn't just say the year. You would say who was in charge that year so 1947 would be
          the second year of Ben Chifley. Now romans would name there years after the two consuls so
          you would have not had N year. The year is named after whoever was in charge on Jan 1st.
        </li>
      </ul>
    </div>
    <div>
      <h3>Available in store!</h3>
      <ul>
        <li><a href="https://crates.io/crates/modern-roman-clock">Crate</a></li>
        <li><a href="https://www.npmjs.com/package/modern-roman-clock">NPM</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.current-time {
  font-family: 'times new roman';
  max-width: 400px;
  margin-right: auto;
  margin-left: auto;
}

label,
input {
  margin-right: 10px;
}

input[type='number'] {
  width: 120px;
}

ul {
  text-align: left;
}

.extra {
  margin-top: 20px;
}

table input[type='number'] {
  width: 80px;
  text-align: center;
  margin-right: 0px;
}

td {
  padding-left: 5px;
  padding-right: 5px;
}

table {
  margin-left: auto;
  margin-right: auto;
}
</style>
