import { createApp } from 'vue'
import router from './router'
import store from '@/store/index.js'
import vuetify from '@/plugins/vuetify.js'
import { map } from '@/plugins/map.js'
import i18n from '@/plugins/i18n.js'
import App from './App.vue'


const app = createApp(App)

app.use(map)
    .use(router)
    .use(store)
    .use(vuetify)
    .use(i18n)

app.mount('#app')
