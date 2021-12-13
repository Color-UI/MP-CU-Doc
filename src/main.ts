import { createApp } from 'vue'
import { setupRouter } from './router'
import App from './App.vue'

import coloruiVue from "colorui-vue"
import "colorui-vue/dist/index.css"

import '@/assets/scss/vuedoc.scss'
import '@/assets/scss/app.scss'

const app = createApp(App)
setupRouter(app)
app.use(coloruiVue)
app.mount('#app')