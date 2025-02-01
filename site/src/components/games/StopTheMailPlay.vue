<script setup lang="ts">
import { hostingSite, backendSite } from '@/consts'
import DS from '@/components/embedded/DS.vue'
</script>

<template>
  <h3>What is it?</h3>
  <p>Stop the mail is a tower defense game for the Nintendo DS written in C++ 20.</p>
  <DS
    :versionUrl="`${backendSite}/api/reporele/stop-the-mail`"
    :resourceUrl="`/desmond/main.html?url=${hostingSite}/stm/versions/`"
    :fileName="`stop-the-mail.nds`"
  />
</template>

<style scoped>
@import '@/assets/main.css';
</style>
