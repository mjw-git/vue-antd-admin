<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo">Vue-antd-admin</div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item v-for="(item, index) of Menu" :key="index">
          <span class="nav-text">{{ item.value }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px', background: '#eee' }">
      <a-layout-header id="header" :style="{ background: '#fff', padding: 0 }">
        <a-popover placement="bottomLeft" title="">
          <template #content>
            <div id="person_msg">
              <a-avatar :size="40">
                <template #icon><UserOutlined /></template>
              </a-avatar>
              <div>最近登录时间:2020-1-1 9:10</div>
              <div id="quit">退出登录</div>
            </div>
          </template>
          <span id="nickname">管理员</span>
        </a-popover>
      </a-layout-header>
      <a-layout-content>
        <Main></Main>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { ref } from "vue";
import Main from "./main";
import { UserOutlined } from "@ant-design/icons-vue";
import { getMenu } from "../../api/global/global-api";
export default {
  components: {
    Main,
    UserOutlined
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
#header {
  text-align: right;
}
#quit {
  text-align: center;
  color: #1890ff;
  font-size: 14px;
  cursor: pointer;
}
#nickname {
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
}
#person_msg {
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>