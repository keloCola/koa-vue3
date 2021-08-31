import {createRouter,createWebHashHistory} from 'vue-router'
import {Home} from '../../src/components/Home.vue'
import {Welcome} from '../../src/components/Welcome.vue'
import {Login} from '../../src/components/Login.vue'

const router = [
  {
    name:'home',
    path:'/',
    meta:{
      title:'首页'
    },
    component:Home,//
    redirect:Welcome,//重定向
    children:[
      {
        name:'welcome',
        path:'/welcome',
        component:Welcome,//
        meta:{
          title:'欢迎页'
        },
      },
      {
        name:'login',
        path:'/login',
        component:Login,//
        meta:{
          title:'登录页'
        },
      },
    ]
  }
]