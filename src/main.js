import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { instance } from "./untils/request";
import {
  Button,
  Layout,
  Menu,
  Popover,
  Avatar,
  Form,
  Input,
  message,
  Select,
  Table,
  Modal,
} from "ant-design-vue";
// import "ant-design-vue/dist/antd.less";
import Mock from "./mock/mock.js";
const app = createApp(App);
app.config.globalProperties.$axios = instance;
app.config.globalProperties.$message = message;
app.provide("$message", message);
app
  .use(Button)
  .use(Layout)
  .use(Menu)
  .use(Popover)
  .use(Avatar)
  .use(Form)
  .use(Input)
  .use(Select)
  .use(Table)
  .use(Modal);
app.use(router);
app.use(store);
app.mount("#app");
