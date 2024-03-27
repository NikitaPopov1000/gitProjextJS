import {createApp, ref} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import './assets/style.css'
import Card from "@/components/BaseComponents/Cards/Card.vue";

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
