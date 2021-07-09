import DemoComponent from '@/components/DemoComponent'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComponentDemo',
  setup() {
    return () => (
      <div>
        <DemoComponent msg="hello JS" />
      </div>
    )
  },
})
