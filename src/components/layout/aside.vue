<template>
  <a-sub-menu :key="''+Menu.id" v-bind="$attrs">
    <template #title>
      <component :is="Menu.icon"></component>{{ Menu.value }}
    </template>
    <template v-for="item in Menu.children" :key="item.id">
      <template v-if="!item.children">
        <a-menu-item :key="''+item.id">
          <router-link :to="`${item.path}`">
            <component v-if="item.icon" :is="item.icon"></component>
            <span class="nav-text">{{ item.value }}</span>
          </router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <Aside :Menu="item" :key="''+item.id" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import {
  UserOutlined,
  BarsOutlined,
  ProfileOutlined,
  PayCircleOutlined,
  RobotOutlined,
  TransactionOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    BarsOutlined,
    UserOutlined,
    ProfileOutlined,
    PayCircleOutlined,
    RobotOutlined,
    TransactionOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  props: ['Menu'],
  name: 'Aside',
  setup(props) {
    console.log(props);
  },
};
</script>

<style>
</style>