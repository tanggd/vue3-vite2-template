
import { defineComponent, ref, withModifiers } from 'vue'
export default defineComponent({
  name: 'JSXTSX',
  setup() {
    const total = ref(2)

    const add = () => {
      total.value++
    }

    return () => (
      <>
        <div>jsx tsx</div>
        <div>{ total.value }</div>
        <a-button type="primary" onClick={add}>按钮</a-button>
        <a-button type="primary" onClick={withModifiers(add, ['self'])}>按钮</a-button>
      </>
    )
  }
})