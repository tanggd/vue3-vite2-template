import { Layout, LayoutContent, LayoutHeader, LayoutSider } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'
// import Sidebar from './Sidebar'

export default defineComponent({
  name: 'Layout',
  setup() {
    const total = ref(1)

    const add = () => {
      total.value++
      console.log(total.value)
    }

    return () => (
      <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <Layout>
          <LayoutSider width="200">
            {/* <a-input vModelValue={total.value} /> */}
            <a-button onClick={add}>add</a-button>
            {/* <Sidebar /> */}
          </LayoutSider>
          <LayoutContent>Content</LayoutContent>
        </Layout>
      </Layout>
    )
  }
})