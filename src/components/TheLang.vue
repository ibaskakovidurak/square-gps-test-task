<template>
  <v-col cols="3" md="6" sm="6" xs="6" lg="3" class="d-flex justify-end">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn append-icon="mdi-web" variant="text" v-bind="props">
          <template v-slot:prepend>
            <v-icon />
          </template>
          <span>{{ lang }}</span>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="setLang(item.title)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-col>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  lang: String
})
const items = [
  { title: 'RU' },
  { title: 'EN' }
]

/**
 * Set a language(locale)
 *
 * @param strLang
 */
const setLang = (strLang) => {
  store.dispatch('setLocale', { locale: strLang })
}

</script>