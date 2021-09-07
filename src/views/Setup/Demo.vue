<template>
  <p>文本</p>
</template>

<script lang="ts" setup>
  import { useCssModule } from 'vue'

  const styles = useCssModule()
  // 获取到chunk化后的classname，提供动态的class绑定
  console.log(styles)
</script>

<style lang="scss" module>
  .test-style {
    color: red;

    .a {
      color: palegreen;
    }

    .b {
      color: palegreen;
    }
  }
</style>

<style lang="scss" module="moduleA">
  .test-style {
    color: red;

    .a {
      color: palegreen;
    }

    .b {
      color: palegreen;
    }
  }
</style>
