import { defineComponent } from 'vue'
import styles from './style/index.module.scss'

const demoComponentProps = {
  msg: {
    type: String,
    default: 'Hello Vue3-tsx',
  },
}

const DemoComponent = defineComponent({
  name: 'DemoComponent',
  props: demoComponentProps,
  setup(props) {
    return () => {
      return <div class={[styles.border, styles.color]}>{props.msg}</div>
    }
  },
})

export default DemoComponent
