import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import vuetify from './plugins/vuetify'

// Import custom styles
import './assets/styles.css'

// Components
import App from './App.vue'

createApp(App)
  .use(router)
  .use(vuetify)
  .use(createPinia())
  .mount('#app')
