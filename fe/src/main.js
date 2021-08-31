import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import request from './utils/request'
import storage from './utils/storage'
import config from './config'
const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage

app.use(router).mount('#app')
