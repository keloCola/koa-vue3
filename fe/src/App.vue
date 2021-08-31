<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'app',
  mounted() {
    this.$storage.setItem('userInfo',{name:'kelo',age:18})
  }
}
</script>
<style>
</style>
