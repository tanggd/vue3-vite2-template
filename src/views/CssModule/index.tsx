import { defineComponent } from 'vue'
import styles from './index.module.css'
import stylesScss from './index.module.scss'

export default defineComponent({
  name: 'CssModule',
  setup() {
    return () => (
    <>
      <h2>CssModule</h2>
      <div class={styles.red}>CssModule1</div>
      <div class={`${styles.red} ${styles.pink}`}>CssModule2</div>
      <div class="red">CssModule3</div>
      
      <h2>ScssModule</h2>
      <div class={stylesScss.main}>
        <div class={stylesScss.red}>CssModule1</div>
        <div class={`${stylesScss.red} ${stylesScss.pink}`}>CssModule2</div>
        <div class="red">CssModule3</div>
      </div>
    </>
    )
  }
})