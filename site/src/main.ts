import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pina = createPinia()
pina.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pina)
app.use(router)

app.mount('#app')
