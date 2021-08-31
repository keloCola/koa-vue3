<template>
  <h1>這是登錄也</h1>
  <button @click="goHome">去欢迎页</button>
</template>

<script >
import Welcome from './Welcome.vue'
export  default {
  name:'login',
  mounted() {
    this.$request({
      method:'get',
      components:{Welcome},
      url:'login',
      data:{
        name:'kelo'
      }
    }).then((res)=>{
      console.log(res)
    })
  },
  methods:{
    goHome(){
      this.$router.push('/weclome')
    }
  }
}
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const goHome = () => {
//   router.push('/')
// }
</script>

<style>

</style>