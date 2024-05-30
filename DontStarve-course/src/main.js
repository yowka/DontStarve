import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/components/router/routing.js'
createApp(App).use(router).mount('#app')
