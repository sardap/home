<script setup lang="ts">
import { ref, type PropType, onMounted } from 'vue'

const props = defineProps({
  versionUrl: {
    type: String,
    required: true,
  },
  resourceUrl: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Object as PropType<string>,
    required: true,
  },
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const version = ref<string | null>('')

const versions = ref<string[]>([])

function updateVersion() {
  emits('update:modelValue', `${props.resourceUrl}/${version.value}/${props.fileName}`)
}

onMounted(async () => {
  await getVersions()
})

async function getVersions() {
  const response = await fetch(props.versionUrl)
  const apiRes: { tag_name: string }[] = await response.json()
  for (let i = 0; i < apiRes.length; i++) {
    versions.value.push(apiRes[i].tag_name)
  }
  version.value = versions.value[0]
  updateVersion()
}
</script>

<template>
  <div>
    <h3 style="padding: 5px">Version:</h3>
    <select @change="updateVersion" v-model="version">
      <option v-for="(version, index) in versions" :key="index" :value="version">
        {{ version }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
