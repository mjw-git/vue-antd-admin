<template>
  <div>
    <a-config-provider :locale="locale">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>
<script>
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { ref } from "vue";
export default {
  setup() {
    const locale = ref(zhCN);
    return { locale };
  }
};
</script>
<style lang="less">
</style>
