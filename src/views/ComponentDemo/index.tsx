import DemoComponent from '@/components/DemoComponent'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ComponentDemo',
  setup() {
    const btns = ['JS', 'Java', 'Vue3']
    const msg = ref('')
    const changeMsg = (text: string) => {
      msg.value = text
    }

    return () => {
      return (
        <div>
          <a-space>
            {btns.map((text) => (
              <a-button
                type={msg.value === text ? 'primary' : 'default'}
                onClick={() => {
                  changeMsg(text)
                }}
              >
                {text}
              </a-button>
            ))}
          </a-space>

          <DemoComponent id={123} msg={msg.value} />
        </div>
      )
    }
  },
})
