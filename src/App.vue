<template>
  <div id="app">
    <transition :name="$router.app.pageTransition">
       <router-view></router-view>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "~animate.css";
@import '~mint-ui/lib/style.css';
@import "./assets/css/common.css";
body,html{
  padding:0;
  margin:0;
}
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
}
</style>
