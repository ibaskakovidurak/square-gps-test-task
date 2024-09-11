<template>
  <v-skeleton-loader
    v-if="loading"
    class="mx-auto mt-6"
    elevation="12"
    type="article, button"
  />
  <v-skeleton-loader
    v-if="loading"
    class="mx-auto mt-6"
    elevation="12"
    type="article, button"
  />
</template>

<script setup>
const props = defineProps(['loading'])
</script>