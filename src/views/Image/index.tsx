import Logo from '@/assets/logo.png';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Image',
  setup() {
    return () => (
      <>
        <img src={Logo} alt="" />
      </>
    );
  },
});
