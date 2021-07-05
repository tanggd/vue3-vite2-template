import { Menu, MenuItem, SubMenu } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    const selectedKeys1 = ref<string[]>(['2'])
    const selectedKeys2 = ref<string[]>(['1'])
    const collapsed = ref<boolean>(false)
    const openKeys = ref<string[]>(['sub1'])

    return () => (
      <Menu
          mode="inline"
          v-model:selectedKeys={selectedKeys2.value}
          v-model:openKeys={openKeys.value}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1">
            {/* <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template> */}
            <MenuItem key="1">option1</MenuItem>
            <MenuItem key="2">option2</MenuItem>
            <MenuItem key="3">option3</MenuItem>
            <MenuItem key="4">option4</MenuItem>
          </SubMenu>
          <SubMenu key="sub2">
            {/* <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template> */}
            <MenuItem key="5">option5</MenuItem>
            <MenuItem key="6">option6</MenuItem>
            <MenuItem key="7">option7</MenuItem>
            <MenuItem key="8">option8</MenuItem>
          </SubMenu>
          <SubMenu key="sub3">
            {/* <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template> */}
            <MenuItem key="9">option9</MenuItem>
            <MenuItem key="10">option10</MenuItem>
            <MenuItem key="11">option11</MenuItem>
            <MenuItem key="12">option12</MenuItem>
          </SubMenu>
        </Menu>
    )
  }
})