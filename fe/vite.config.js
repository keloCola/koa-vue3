import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  /*  */
  server:{
    host:'localhost',
    port:8080,//更改端口
    // proxy:{

    // },
  },
  plugins: [vue()]
})
