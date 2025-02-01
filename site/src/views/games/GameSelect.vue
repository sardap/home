<script setup lang="ts">
import GamePreview from '@/components/games/GamePreview.vue'
import { computed, ref, watch } from 'vue'
import {
  NoTouchyFace,
  StopTheMail,
  UltimateChess2024,
  WalkGoodMaybe,
  WeddingPlanner,
  Voties,
  type GameInfo
} from '@/games'
import { Platform, Tag } from '@/consts'

const platformsFilter = ref(getPlatformsForBrowser())

const tagFilter = ref(getTagsForBrowser())

function getPlatformsForBrowser() {
  const platforms = [Platform.Web]
  if (navigator.userAgent.includes('Linux')) {
    platforms.push(Platform.Linux)
  }
  if (navigator.userAgent.includes('Windows')) {
    platforms.push(Platform.Windows)
  }
  if (navigator.userAgent.includes('Mac')) {
    platforms.push(Platform.MacOs)
  }
  return platforms
}

function getTagsForBrowser() {
  const tags = [Tag.Complete]
  if (typeof screen.orientation === 'undefined') {
    tags.push(Tag.MobileFriendly)
  }
  return tags
}

const games: {
  game: GameInfo
  shortDescription: string
  longDescription?: string
  previewImage?: string
}[] = [
  {
    game: WalkGoodMaybe,
    shortDescription: 'A game about walking good, maybe?',
    previewImage: '/photos/game/previews/walk-good-maybe.webm'
  },
  {
    game: WeddingPlanner,
    shortDescription: 'Prepare for an onslaught of guests!',
    longDescription: `Setup dance floors, Photo booths buffets and tables. Pick up gifts and try your best to survive the onslaught of guests. Which are relentless hungry dancing and are missing the part of their brain that prevents excess.`,
    previewImage: '/photos/game/previews/wedding-planner.webm'
  },
  {
    game: UltimateChess2024,
    shortDescription: 'Play chess on the computer!',
    longDescription: `
      Offers regular chess and several fun Alteteives setups such as Chess 960, Horde, horsies,
      Kawns and Mid battle.
      It even includes 5 distinctively bad AI's including bogo play chess vs a random number
      generator WOW.
    `,
    previewImage: '/photos/game/previews/ultimate-chess-2024.webm'
  },
  {
    game: NoTouchyFace,
    shortDescription: "Don't let anything touch your eyes!",
    longDescription: `Dear god please don't let anything touch your eyes while avoiding the falling fingers and knives lodging themselves deep under your skin`,
    previewImage: '/photos/game/previews/face.webm'
  },
  {
    game: StopTheMail,
    shortDescription: 'A completely unfinished tower defense game for the DS'
  },
  {
    game: Voties,
    shortDescription: 'A bizarre city builder I guess?'
  }
]

const filteredGames = computed(() => {
  return games.filter((game) => {
    console.log(tagFilter.value.join(', '))
    if (tagFilter.value.length > 0) {
      for (const tag of tagFilter.value) {
        if (!game.game.tags.includes(tag)) {
          return false
        }
      }
    }
    if (platformsFilter.value.length > 0) {
      if (
        !game.game.platforms.some((platform) => platformsFilter.value.includes(platform.platform))
      ) {
        return false
      }
    }
    return true
  })
})

watch([platformsFilter, tagFilter], () => {
  if (
    !platformsFilter.value.includes(Platform.Web) &&
    tagFilter.value.includes(Tag.MobileFriendly)
  ) {
    tagFilter.value = tagFilter.value.filter((tag) => tag !== Tag.MobileFriendly)
  }
})
</script>

<template>
  <div>
    <h2>Horseshit games created by yours truly</h2>
    <hr />
    <div>
      <h3>Filter</h3>
      <div>
        <p class="filter-section">Platform</p>
        <table>
          <tr v-for="platform in Object.values(Platform)" :key="platform">
            <td>
              <label :for="`${platform}-select`">{{ platform }}</label>
            </td>
            <td>
              <input
                type="checkbox"
                :id="`${platform}-select`"
                :disabled="platformsFilter.length === 1 && platformsFilter[0] === platform"
                v-model="platformsFilter"
                :value="platform"
              />
            </td>
          </tr>
        </table>
        <br />
        <div>
          <label>
            <span>Complete?</span>
            <input type="checkbox" v-model="tagFilter" :value="Tag.Complete" />
          </label>
        </div>
        <br />
        <div v-if="platformsFilter.includes(Platform.Web)">
          <label
            >Mobile Friendly?<input type="checkbox" v-model="tagFilter" :value="Tag.MobileFriendly"
          /></label>
        </div>
      </div>
    </div>
    <hr />
    <div v-if="filteredGames.length > 0">
      <div class="preview" v-for="game in filteredGames" :key="game.game.title">
        <GamePreview
          :game="game.game"
          :shortDescription="game.shortDescription"
          :longDescription="game.longDescription"
          :previewImage="game.previewImage"
        />
      </div>
    </div>
    <div v-else>
      <p>No games found</p>
    </div>
  </div>
</template>

<style scoped>
.preview {
  max-width: 600px;
  margin: auto;
}

table {
  margin-left: auto;
  margin-right: auto;
}

tr {
  display: flex;
  justify-content: space-between;
}

th {
  text-align: left;
}

.filter-section {
  font-weight: bold;
}

input[type='checkbox'] {
  margin-left: 5px;
}
</style>
