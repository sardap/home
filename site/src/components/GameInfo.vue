<script setup lang="ts">
import type { ProjectFilter, Tag } from '@/consts'
import { type PropType } from 'vue'

const props = defineProps({
  filter: {
    type: Object as PropType<ProjectFilter>,
    required: true,
  },
  technologies: {
    type: Array as PropType<Tag[]>,
    required: true,
  },
})

function should_show(): boolean {
  let show_tech = true
  if (props.filter.technologies.length > 0) {
    show_tech = false
    for (const tech of props.technologies) {
      if (props.filter.technologies.includes(tech)) {
        show_tech = true
      }
    }
  }

  return show_tech
}

const show = should_show()
</script>

<template>
  <div v-if="show">
    <p class="tags-heading">
      Tags: <span class="tags" v-for="tech in technologies" :key="tech">{{ tech }}</span>
    </p>
    <br />
    <slot></slot>
    <br />
  </div>
</template>

<style scoped>
.tags-heading {
  font-weight: bold;
}

.tags {
  font-style: italic;
}
</style>
