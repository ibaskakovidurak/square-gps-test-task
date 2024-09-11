<template>
  <yandex-map
    :settings="{
      location: {
        center: mapCenter,
        zoom: 15,
      },
    }"
    height="81vh"
  >
    <yandex-map-default-scheme-layer :settings="{ theme: 'dark' }" />
    <yandex-map-default-features-layer/>
    <yandex-map-default-marker
        v-for="marker in markers"
        :settings="{
          coordinates: marker.coordinates,
          color: marker.active ? colors.active : colors.default,
          onClick: () => balloonClick(marker)
        }"
    />
    <yandex-map-listener
      :settings="{
        onClick: mapClick('dom', 'click')
      }"
    />
  </yandex-map>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapListener,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker
} from 'vue-yandex-maps'

const store = useStore()
const emits = defineEmits(['addedMarker', 'watchOnMap', 'creating', 'created'])
const props = defineProps({
  editing: Boolean,
  created: Boolean,
  markers: Array,
  mapCenter: Array
})
const colors = {
  default: import.meta.env.VITE_BALOON_COLOR_DEFAULT,
  active: import.meta.env.VITE_BALOON_COLOR_ACTIVE,
}
const debouncing = ref(true)


/**
 * Async(emulation) function for adding a marker to the store
 *
 * @param coords
 * @return {Promise<void>}
 */
const addMarker = async (coords) => {
  await store.dispatch('addMarker', { coords: [coords[0], coords[1]] })
}

/**
 * Add a marker on the map
 *
 * @param category
 * @param type
 * @return {(function(*, *): Promise<void>)|*}
 */
const mapClick = (category, type) => {
  if (typeof type !== 'boolean' && props.editing === true && debouncing.value === true) {
    return async (object, event) => {
      if (object?.type !== 'marker') {
        debouncing.value = false
        emits('creating')
        await addMarker(event.coordinates)
        emits('addedMarker', true)
        emits('creating')
        emits('created')

        setTimeout(() => {
          debouncing.value = true
        }, 500)
      }
    }
  }
}

/**
 * Emitting a balloon click
 *
 * @param marker
 */
const balloonClick = (marker) => {
  emits('watchOnMap', marker)
}
</script>