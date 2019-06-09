<template>
  <div id="app">
    <el-page-header @back="goBack" content="详情页面">
    </el-page-header>

    <router-link to="/adminView">ad</router-link>
    <router-link to="/announcementView">ad</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    }


  }
</script>

<style>


</style>
