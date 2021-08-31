<template>
  <h1>這是登錄也</h1>
  <button @click="goHome">去欢迎页</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<style>

</style>