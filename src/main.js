import {createApp, ref} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import './assets/style.css'

import PrimeVue from "primevue/config";

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)

app.mount('#app')
