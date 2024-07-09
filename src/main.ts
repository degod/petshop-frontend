import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import vuetify from './plugins/vuetify'

// Import custom styles
import './assets/global.css'
import './interceptors/axios'

// Components
import App from './App.vue'

createApp(App).use(router).use(vuetify).use(createPinia()).mount('#app')
