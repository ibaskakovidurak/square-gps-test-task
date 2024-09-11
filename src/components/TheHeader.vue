<template>
  <header class="bg-blue">
    <v-container>
      <v-row class="align-center">
        <the-logo />
        <the-nav :lang="lang" />
        <the-lang :lang="lang" />
      </v-row>
    </v-container>
  </header>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import TheLogo from "@/components/TheLogo.vue";
import TheNav from "@/components/TheNav.vue";
import TheLang from "@/components/TheLang.vue";

const store = useStore()
const lang = computed(() => store.getters.getLocale)
</script>