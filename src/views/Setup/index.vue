<template>
  <div class="content">
    <p>{{ msg }}</p>
  </div>
  <div class="component">
    <a-space>
      <a-button
        v-for="btn in btns"
        :key="btn"
        :type="msg === btn ? 'primary' : 'default'"
        @click="changeMsg(btn)"
        >{{ btn }}</a-button
      >
    </a-space>

    <!-- <DemoComponent name="局部引入组件" :id="123" :msg="msg" ref="demoComponent" /> -->
    <!-- <demo-component name="全局引入组件" :id="123" :msg="msg" /> -->
  </div>
  <div class="component">
    <TestCom
      ref="testCom"
      name="123"
      class="test-com"
      :id="123"
      @click="onChangeTestComText"
      @change="onChangeTestComText"
    >
      <p>插槽</p>
    </TestCom>
    <a-button type="default" @click="onChangeTestComText">点一下</a-button>
  </div>

  <div class="component">
    <Demo />
  </div>
</template>

<script lang="ts" setup>
  /**
   * 1. script setup 基本用法
   * 2. import的组件、指令等自动注册
   * 3. defineXXX 系列 api的使用
   *    3.1. defineProps：定义 props 相关信息
   *      结合withDefaults方法定义默认值
   *    3.2. defineEmits：定义 emits 相关信息
   *    3.3. defineExpose: 手动暴露变量、方法
   * 4. hook api
   *    useAttrs：获取 attrs 数据，包含:属性(除去props定义的)、方法(除去emits定义的)。
   *    useSlots: 获取插槽
   *    useCssModule 允许在 setup 的单文件组件函数中访问 CSS 模块。只能在 render 或 setup 函数中使用。
   *      https://v3.cn.vuejs.org/api/global-api.html#usecssmodule
   *      https://vue-loader.vuejs.org/zh/guide/css-modules.html#%E7%94%A8%E6%B3%95
   *    useCssVars: v-bind in styles。
   *    useTransitionState
   *    useSSRContext
   *
   */
  import { ref } from 'vue'
  // import DemoComponent, { DemoComponentProps } from '@/components/DemoComponent'

  import TestCom from './TestCom.vue'
  import Demo from './Demo.vue'

  const testCom = ref(null)
  const onChangeTestComText = () => {
    console.log(123)
    // 存在类型问题
    /** @ts-ignore */
    // testCom.value?.changeText(String(+new Date()))
  }

  const btns = ['JS', 'Java', 'Vue3']
  const msg = ref('JS')
  const changeMsg = (text: string) => {
    msg.value = text
  }

  // const demoComponent = ref<DemoComponentProps>()
  // onMounted(() => {
  //   console.log(demoComponent.value?.id)
  // })
</script>

<style lang="scss" scoped>
  .component {
    border: 1px solid palegreen;
    margin-top: 20px;
  }
</style>
