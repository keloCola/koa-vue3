<template>
  <h1>這是歡迎頁</h1>
  <button @click="goLogin">去登錄</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goLogin = () => {
  router.push('/login')
}
</script>

<style>
</style>