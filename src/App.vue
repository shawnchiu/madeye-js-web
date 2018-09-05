
<template>
    <router-view></router-view>
</template>
<script>
import Index from './components/index/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body,#app,el-container  {
  height: 100%;
  padding:0px;
  margin: 0px;
  }
</style>
