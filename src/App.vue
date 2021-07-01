<template>
  <div>
    <router-link to="/home">home11</router-link> | 
    <router-link to="/antDesign">Ant Design</router-link> |
    <router-link to="/jsxtsx">JSX TSX</router-link> |
    <router-link to="/vuex">vuex</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
