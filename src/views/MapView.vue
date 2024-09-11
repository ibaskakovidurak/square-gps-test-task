<template>
  <v-col cols="12" lg="4" md="4">
    <marker-list
      :markers="markers"
      :loading="loading"
      @watch-on-map="watchOnMap"
    />
  </v-col>
  <v-col cols="12" lg="8" md="8">
    <markers-map
      class="bg-white"
      :markers="markers"
      :map-center="mapCenter"
      :editing="editing"
      :creating="created"
      @created="created = true"
      @creating="creating = true"
      @added-marker="getMarkers"
      @watch-on-map="watchOnMap"
    />
    <v-col
      cols="12"
      class="d-flex justify-end position-relative"
    >
      <v-btn
        icon="mdi-plus"
        size="large"
        :base-color="editing ? 'orange' : 'blue'"
        class="position-absolute btn-create"
        :class="{
          '--editing': editing
        }"
        @click="editing = !editing"
      />
    </v-col>
  </v-col>
  <tooltip
    v-if="created"
    :color="'green'"
    :text="$locale('notification.success', lang)"
  />
  <tooltip
    v-if="creating"
    :color="'primary'"
    :text="$locale('notification.creating', lang)"
  />
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, ref, watch} from 'vue'
import { useRouter } from 'vue-router'
import MarkerList from '@/components/MarkerList.vue'
import MarkersMap from '@/components/Map.vue'
import Tooltip from '@/components/Tooltip.vue'

const router = useRouter()
const currentRouteName = ref(router.currentRoute)
const store = useStore()
const lang = computed(() => store.getters.getLocale)
const creating = ref(false)
const created = ref(false)
const editing = ref(false)
const loading = ref(true)
const markers = ref([])
const mapCenterDefault = [import.meta.env.VITE_MAP_CENTER_LONGTITUE, import.meta.env.VITE_MAP_CENTER_LATITUDE]
const mapCenter = ref(mapCenterDefault)


/**
 * Clear an active marker from the list
 *
 * @param currentName
 * @return {Promise<void>}
 */
const clearActiveMarker = async (currentName) => {
  if (currentName.name === 'map') {
    markers.value.forEach(el => el.active = false)
    mapCenter.value = mapCenterDefault

    await store.dispatch('addMarkers', { data: markers.value})
  }
}

/**
 * Emulating 404 page
 *
 * For what? Two routes use the same component because when using different components
 * the map is rendered twice when switching routes. To prevent it and preserve the functionality
 * of routes after a reboot I created this feature
 *
 * @param markers
 */
const emulatePageNotFound = (markers) => {
  const routeMarkerId = currentRouteName.value.params?.id
  const findMarker = markers.find(el => el.id === routeMarkerId)

  if (!findMarker && routeMarkerId) {
    router.push({ name: 'notFound' })
  }
}

/**
 * Get all the markers
 *
 * @param status
 * @return {Promise<void>}
 */
const getMarkers = async (status) => {
  const result = await store.dispatch('getMarkers')

  markers.value = result.sort((a, b) => parseInt(b.id) - parseInt(a.id))

  if (status) {
    created.value = creating.value = editing.value = false
  }

  emulatePageNotFound(markers.value)

  const findMarker = markers.value.find(el => el.active === true)

  if (findMarker) {
    const [lon, ltd] = findMarker.coordinates
    mapCenter.value = [lon, ltd]
  }

  loading.value = false
}


/**
 * Show the current marker on the map & switch to another route
 *
 * @param marker
 * @return {Promise<void>}
 */
const watchOnMap = async (marker) => {
  const [lon, ltd] = marker.coordinates

  const findMarker = markers.value.find(el => {
    const [lon1, ltd2] = el.coordinates
    return lon === lon1 && ltd === ltd2
  })

  if (findMarker) {
    const [lon, ltd] = findMarker.coordinates

    markers.value.forEach(el => el.active = false)
    findMarker.active = true
    mapCenter.value = [lon, ltd]

    await store.dispatch('addMarkers', { data: markers.value})
    await router.push({ name: 'mapItem', params: { id: findMarker.id } })
  }
}

onMounted(async () => {
  await getMarkers()
})

watch(currentRouteName, async (val) => {
  await clearActiveMarker(val)
}, { deep: true })
</script>

<style scoped>
.btn-create{
  bottom: 70px;
  right: 20px;
  transition: all .3s;
}
.btn-create.--editing{
  transform: rotate(45deg);
}
.row-max-height{
  max-height: 82vh;
}
</style>