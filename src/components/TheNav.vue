<template>
  <v-col cols="9" md="6" sm="6" xs="6" lg="6" class="d-flex">
    <nav>
      <v-btn variant="text" to="/">{{ $locale('menu.about', lang) }}</v-btn>
      <v-btn variant="text" to="/map">{{ $locale('menu.map', lang) }}</v-btn>
    </nav>
  </v-col>
</template>

<script setup>
  const props = defineProps({
    lang: String
  })
</script>