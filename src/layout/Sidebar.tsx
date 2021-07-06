import routes from '@/router/routes'
import { Menu, MenuItem, SubMenu } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    const selectedKeys1 = ref<string[]>(['2'])
    const selectedKeys2 = ref<string[]>(['1'])
    const collapsed = ref<boolean>(false)
    const openKeys = ref<string[]>(['/demo'])

    return () => {
      const menuStyle = {
        height: '100%',
        borderRight: 0
      }

      const getSlots = (title: any, Icon?: any) => {
        return {
          title: () => (
            <div>
              {Icon ? <Icon /> : ''}
              <span>{title}</span>
            </div>
          )
        }
      }

      return <Menu
        mode="inline"
        v-models={[
          [selectedKeys2.value, 'selectedKeys'],
          [openKeys.value, 'openKeys']
        ]}
        style={menuStyle}
      >
        {
          routes.map(item =>
            <SubMenu key={item.path} v-slots={getSlots(item.name, item.icon)}>
              {
                item.children?.map(child => <MenuItem key={child.path}>{child.name}</MenuItem>)
              }
            </SubMenu>
          )
        }
      </Menu>
    }
  }
})