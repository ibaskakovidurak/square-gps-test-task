<template>
  <v-app>
    <the-header />
    <v-main class="pt-6 bg-grey-lighten-5">
      <v-container>
        <v-row>
          <RouterView />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>