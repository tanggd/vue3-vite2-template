<template>
  <InputSearch
    v-model:value="userName"
    placeholder="输入github名称"
    enter-button="Search"
    @search="onSearch"
    style="width: 500px"
  />
  <pre>{{ userInfo }}</pre>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { getUserInfo } from './api';
  import { InputSearch } from 'ant-design-vue';

  export default defineComponent({
    name: 'Axios',
    components: {
      InputSearch,
    },
    setup() {
      const userName = ref('tang');
      const userInfo = ref({});

      const getUserInfoData = async () => {
        try {
          userInfo.value = await getUserInfo(userName.value);
        } catch (error) {
          console.error(error);
        }
      };

      const onSearch = () => {
        getUserInfoData();
      };

      onMounted(() => {
        getUserInfoData();
      });

      return {
        userName,
        onSearch,
        userInfo,
      };
    },
  });
</script>
