import { defineComponent } from 'vue'
import styles from './index.module.css'

export default defineComponent({
  name: 'CssModule',
  setup() {
    return () => (
    <>
      <div class={styles.red}>CssModule1</div>
      <div class={`${styles.red} ${styles.pink}`}>CssModule2</div>
      <div class="red">CssModule3</div>
    </>
    )
  }
})