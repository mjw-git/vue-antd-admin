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
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Mock from "./mock/mock.js";
const app = createApp(App);
app.config.globalProperties.$axios = instance;
app
  .use(Button)
  .use(Layout)
  .use(Menu)
  .use(Popover)
  .use(Avatar)
  .use(Form)
  .use(Input);
app.use(router);
app.use(store);
app.mount("#app");
