<template>
  <v-row dense class="overflow-auto row-max-height">
    <v-col cols="12" class="mb-6">
      <h1
        class="
          text-h4
          text-md-h2
          text-xl-h1
          text-truncate
       "
      >
        {{ $locale('markers', lang) }}
      </h1>
      <p
        v-if="!markers.length && !loading"
        class="mt-6"
      >
        {{ $locale('markersEmpty', lang) }}
      </p>
      <skeleton-marker-list
        :loading="loading"
      />
    </v-col>
    <v-col
      v-for="marker in markers"
      :key="marker"
      cols="12"
      :class="marker.active ? 'bg-blue' : ''"
    >
      <v-card
        :title="`${$locale('buttons.marker', lang)} #${marker.id}`"
        :text="`${$locale('buttons.address', lang)}: ${marker.address}`"
      >
        <template v-slot:actions>
          <v-btn
            color="primary"
            variant="text"
            @click="watchOnMap(marker)"
          >
            {{ $locale('buttons.watchOnMap', lang) }}
          </v-btn>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import SkeletonMarkerList from "@/components/SkeletonMarkerList.vue";

const props = defineProps({
  loading: Boolean,
  markers: Array,
})
const store = useStore()
const lang = computed(() => store.getters.getLocale)
const emits = defineEmits(['watchOnMap'])

/**
 * Emitting function to show a marker on the map
 *
 * @param marker
 */
const watchOnMap = (marker) => {
  emits('watchOnMap', marker)
}
</script>