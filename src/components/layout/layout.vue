<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo">Vue-antd-admin</div>

      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <div v-for="item of Menu" :key="item.id">
          <a-sub-menu v-if="item.children">
            <template #title
              ><component :is="item.icon"></component>
              <span class="nav-text">{{ item.value }}</span></template
            >
            <a-menu-item v-for="item2 in item.children" :key="item2.id">{{
              item2.value
            }}</a-menu-item>
          </a-sub-menu>
          <a-menu-item @click="goMenu(item.path)" v-else>
            <component :is="item.icon"></component>
            <span class="nav-text">{{ item.value }}</span>
          </a-menu-item>
        </div>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px', background: '#eee' }">
      <a-layout-header id="header" :style="{ background: '#fff', padding: 0 }">
        <span class="title">{{ title }}</span>
        <a-popover placement="bottomLeft" title="">
          <template #content>
            <div id="person_msg">
              <a-avatar :src="user_info.avatar" :size="40" />
              <!-- <template #icon><UserOutlined /></template> -->

              <div>最近登录时间:2020-1-1 9:10</div>
              <div id="quit" @click="quit">退出登录</div>
            </div>
          </template>
          <span id="nickname">{{ user_info.name }}</span>
        </a-popover>
      </a-layout-header>
      <a-layout-content>
        <Main></Main>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Main from "./main";
import { useStore } from "vuex";
import {
  UserOutlined,
  BarsOutlined,
  ProfileOutlined,
  PayCircleOutlined,
  RobotOutlined,
  TransactionOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons-vue";
import { getMenu } from "../../api/global/global-api";
export default {
  components: {
    Main,
    BarsOutlined,
    UserOutlined,
    ProfileOutlined,
    PayCircleOutlined,
    RobotOutlined,
    TransactionOutlined,
    AppstoreOutlined,
    SettingOutlined
  },
  setup(props, content) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const user_info = reactive({
      name: store.state.user.USER_DETAIL.name,
      avatar: store.state.user.USER_DETAIL.avatar
    });
    const selectedKeys = computed(() => [route.meta.id]);
    const Menu = ref([]);
    getMenu().then((res) => {
      Menu.value = res.data;
    });
    const quit = () => {
      localStorage.clear();
      router.push("/");
    };
    const title = computed(() => route.meta.name);
    const goMenu = (data) => {
      router.push(data);
    };
    return {
      Menu,
      selectedKeys,
      store,
      user_info,
      title,
      quit,
      goMenu
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
  height: 50px;
  line-height: 50px;
  .title {
    margin-left: 20px;
    color: #000;
    font-weight: 500;
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;
  }

  #nickname {
    float: right;
    font-size: 16px;
    cursor: pointer;
    margin-right: 20px;
  }
}
#person_msg {
  flex-direction: column;
  display: flex;
  align-items: center;
}
#quit {
  text-align: center;
  color: #1890ff;
  font-size: 14px;
  cursor: pointer;
}
</style>