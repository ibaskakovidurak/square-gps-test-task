import { createYmaps } from 'vue-yandex-maps'

/**
 * Init Yandex Map
 *
 * @type {{install(app: App): void}}
 */
export const map = createYmaps({
    apikey: import.meta.env.VITE_YMAPS_KEY
})