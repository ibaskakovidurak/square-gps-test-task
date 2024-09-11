<template>
  <v-snackbar
    v-model="snackbar"
    :color="color"
    elevation="24"
    :timeout="3000"
  >
    {{ text }}
    <template v-slot:actions>
      <v-btn
        color="white"
        variant="text"
        @click="snackbar = false"
      >
        &times;
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { ref} from 'vue'

const props = defineProps(['color', 'text'])
const snackbar = ref(true)
</script>