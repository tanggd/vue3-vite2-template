<template>
  <div>
    <h1>vuex</h1>
    <div>{{ count }}</div>
    <div>{{ count2 }}</div>
    <a-button type="primary" @click="add">add</a-button>
    <a-button type="primary" @click="fetch">fetch</a-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'

  export default defineComponent({
    name: 'Vuex',
    setup() {
      const store = useStore()

      console.log(store)

      const count = computed(() => store.getters['testModule/count'])
      const count2 = computed(() => store.getters['testModule/count2'])

      // store.getters.

      return {
        count,
        count2,
        add: () => store.commit('testModule/SET_COUNT', +new Date()),
        fetch: () => store.dispatch('testModule/FETCH_COUNT'),
      }
    },
  })
</script>
