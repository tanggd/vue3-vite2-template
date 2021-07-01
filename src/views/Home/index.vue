<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const msg = ref('home')
    return {
      msg
    }
  }
})
</script>