import { Layout, LayoutContent, LayoutHeader, LayoutSider } from 'ant-design-vue'
import { defineComponent } from 'vue'
import Sidebar from './Sidebar'

export default defineComponent({
  name: 'Layout',
  setup() {

    return () => (
      <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <Layout>
          <LayoutSider width="200">
            <Sidebar />
          </LayoutSider>
          <LayoutContent>
            <router-view/>
          </LayoutContent>
        </Layout>
      </Layout>
    )
  }
})