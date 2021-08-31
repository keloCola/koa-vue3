import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import config from './config'
const app = createApp(App)
console.log(config);
axios.get(config.mockApi + 'login').then((res)=>{
  console.log(res);
})
app.use(router).mount('#app')
