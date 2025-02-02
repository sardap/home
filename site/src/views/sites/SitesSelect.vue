<script setup lang="ts">
import { ref } from 'vue'

interface Site {
  name: string
  description: string
  link: string
  createdDate: Date
  active: boolean
}

const sites = ref<Site[]>([
  {
    name: 'Book Club (3ds)',
    description:
      'A website that is hosted on a 3ds, I write a little bit about whatever books I have read since August 2024.',
    link: 'https://bookclub.sarda.dev',
    createdDate: new Date('2025-01-10'),
    active: true,
  },
  {
    name: 'Monster File system',
    description: 'Allows encoding and decoding of files into the Pokemon Emerald PC.',
    link: 'https://sardap.github.io/mon-fs/',
    createdDate: new Date('2024-09-09'),
    active: false,
  },
  {
    name: 'All Battle',
    description:
      'I ran a round robin tournament for all trainers in pokemon emerald and created a site to allow exploration of the results.',
    link: 'https://allbattle.sarda.dev/',
    createdDate: new Date('2024-11-17'),
    active: false,
  },
  {
    name: 'Kiryu Everywhere',
    description:
      'A wordle inspired game where you guess the location of a screenshot from Yakuza games.',
    link: 'https://sardap.github.io/kiryueverywhere/',
    createdDate: new Date('2022-07-29'),
    active: false,
  },
  {
    name: "Time it's going to be in four hours in Melbourne Victoria",
    description: 'A fully featured API that allows you get the time in Melbourne in four hours.',
    link: 'https://tigtbifhimva.sarda.dev/',
    createdDate: new Date('2021-11-27'),
    active: false,
  },
  {
    name: 'Resume site',
    description: 'A site that hosts my resume.',
    link: 'https://sarda.dev/',
    createdDate: new Date('2020-12-30'),
    active: true,
  },
])
</script>

<template>
  <div>
    <h2>Welcome to a list of websites</h2>
    <div v-for="(site, i) in sites" :key="site.link" class="site">
      <h3>
        <a :href="site.link" target="_blank">{{ site.name }}</a>
      </h3>
      <p>{{ site.description }}</p>
      <p>Created: {{ site.createdDate.toLocaleDateString() }}</p>
      <p>{{ site.active ? `Still Active` : `Complete` }}</p>
      <hr v-if="i !== sites.length - 1" />
    </div>
  </div>
</template>

<style scoped>
.site {
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
}
</style>
