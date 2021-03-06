import { withInstall } from '@/utils/component'
import type { ExtractPropTypes } from 'vue'
import { computed, defineComponent, PropType } from 'vue'
import VueTypes, { number } from 'vue-types'
import styles from './style/index.module.scss'

interface Info {
  name: string
  age: number
}

const demoComponentProps = {
  // TODO：更改值，或新增加属性，页面热更新并未更新该值的问题
  name: VueTypes.string.def('组件示例'),
  msg: VueTypes.oneOf(['JS', 'Java', 'Vue3']).def('JS'),
  id: number(),
  info: {
    // 如果字段较少的话，直接写在PropType<>里，便于提示;多就interface
    type: Object as PropType<Info>,
    default: () => ({}),
  },
}

const DemoComponent = defineComponent({
  name: 'DemoComponent',
  props: demoComponentProps,
  emits: ['change'],
  setup(props, { emit }) {
    const msg = computed(() => `Hello ${props.msg}`)

    const btnClick = () => {
      emit('change', 1)
    }

    return () => {
      return (
        <div class={[styles['border'], styles['border-red']]}>
          <div>
            <span>标题：</span>
            <span>{props.name}</span>
          </div>
          <div>
            <span>信息：</span>
            <span>{msg.value}</span>
          </div>
          <div>
            <span>id：</span>
            <span>{props.id}</span>
          </div>
          <a-button type="primary" onClick={btnClick}>
            点击一下
          </a-button>
        </div>
      )
    }
  },
})

export type DemoComponentProps = Partial<ExtractPropTypes<typeof demoComponentProps>>

export default withInstall(DemoComponent)
