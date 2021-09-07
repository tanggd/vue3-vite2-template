<template>
  <div>
    <p>{{ text }}</p>
    <div class="test-style">22</div>
  </div>
</template>

<script setup lang="ts">
  import { ref, useAttrs, useCssModule, getCurrentInstance } from 'vue'

  const instance = getCurrentInstance()
  console.log(instance)

  const styles = useCssModule()
  // 获取到chunk化后的classname，提供动态的class绑定
  console.log(styles)

  const props = defineProps({
    id: {
      type: Number,
      default: null,
    },
  })
  console.log(props)

  // const props = defineProps({
  //   name: {
  //     type: String,
  //     default: ''
  //   }
  // })
  // interface Props {
  //   name?: string,
  //   id?: number | string
  // }
  // const props = withDefaults(defineProps<Props>(), {
  //   name: '',
  //   id: ''
  // })

  // // 定义emits
  // const emits = defineEmits(['change', 'input'])
  // // 使用emits
  // emits('change', 1)
  interface Emits {
    (e: 'change', id: number): void
    (e: 'input', text: string): void
  }
  const emits = defineEmits<Emits>()
  emits('change', 1)
  emits('input', '22')

  const text = ref('test')
  const changeText = (msg: string) => {
    text.value = msg
  }

  defineExpose({
    text,
    changeText,
  })

  const attrs = useAttrs()
  console.log(attrs)
</script>

<style lang="scss">
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
