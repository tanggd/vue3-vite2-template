import { computed, defineComponent } from 'vue'
import VueTypes from 'vue-types'
import styles from './style/index.module.scss'

const demoComponentProps = {
  // TODO：更改值，或新增加属性，页面热更新并未更新该值的问题
  name: VueTypes.string.def('组件示例'),
  msg: VueTypes.string,
  id: VueTypes.number.isRequired,
}

const DemoComponent = defineComponent({
  name: 'DemoComponent',
  props: demoComponentProps,
  setup(props) {
    const msg = computed(() => `Hello ${props.msg}`)

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
        </div>
      )
    }
  },
})

export default DemoComponent
