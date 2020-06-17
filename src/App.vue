<template>
  <div id="app">
    <Header></Header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>
<script>
import  Header from "components/header/Header"
import Tab from "components/tab/Tab"
export default {
  name: 'App',
  components:{
    Header,
    Tab
  }
}
</script>
<style lang="less">
@import "assets/css/base.css";
</style>
