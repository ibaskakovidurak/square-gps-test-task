<template>
  <v-col cols="12">
    <h1>{{ $locale('notFound', lang) }}</h1>
  </v-col>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const lang = computed(() => store.getters.getLocale)
</script>