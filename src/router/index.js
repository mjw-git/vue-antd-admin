import { createRouter, createWebHistory } from "vue-router";
import { Indexroutes, Mainroutes } from "./router.config";
import { message } from "ant-design-vue";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...Indexroutes, ...Mainroutes],
});
// 全局路由监听

router.beforeEach((to, from, next) => {
  if (to.path !== "/" && !localStorage.islogin) {
    message.error("请先登录");
    next("/");
  } else next();
});
export default router;
