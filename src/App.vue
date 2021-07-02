<template>
  <div>
    <router-link
      class="router-item"
      v-for="item in routes"
      :key="item.name"
      :to="item.path">
      {{ item.name }}
    </router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { routes } from '@/router'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    return {
      routes
    }
  }
})
</script>

<style lang="less" scoped>
.router-item {
  margin-right: 10px;
  color: red;
}
</style>
