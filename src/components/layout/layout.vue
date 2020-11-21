<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo">基于vue3和antd的后台</div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item v-for="(item, index) of Menu" :key="index">
          <span class="nav-text">{{ item.value }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px', background: '#eee' }">
      <a-layout-content>
        <Main></Main>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { ref } from "vue";
import Main from "./main";
import { getMenu } from "../../api/global/getMenu";
export default {
  components: {
    Main
  },
  setup(props, content) {
    const selectedKeys = ref([0]);
    const Menu = ref([]);
    getMenu().then((res) => {
      Menu.value = res.data;
    });

    return {
      Menu,
      selectedKeys
    };
  }
};
</script>

<style lang="less" scoped>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #fff;
  line-height: 32px;
  font-size: 16px;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}
</style>