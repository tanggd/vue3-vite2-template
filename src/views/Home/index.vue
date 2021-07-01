<template>
  <a-button type="primary">Primary</a-button>
  <a-button>Default</a-button>
  <a-button type="dashed">Dashed</a-button>
  <a-button type="danger">Danger</a-button>
  <a-button type="primary">按钮</a-button>
  <a-button type="link">Link</a-button>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const msg = ref('11111')
    return {
      msg
    }
  }
})
</script>