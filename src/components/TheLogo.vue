<template>
  <v-col sm="12" lg="3" cols="12">
      <span
        class="
          text-h6
          text-md-h5
          text-xl-h5
          text-truncate
       "
      >
        {{ appName }}
      </span>
  </v-col>
</template>

<script setup>
  const appName = import.meta.env.VITE_APP_NAME
</script>