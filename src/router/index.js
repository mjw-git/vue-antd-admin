import { createRouter, createWebHistory } from "vue-router";
import { Indexroutes, Mainroutes } from "./router.config";
import { message } from "ant-design-vue";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...Indexroutes, ...Mainroutes],
});
// 全局路由监听
const all_path = [];
const full_path = [...Indexroutes, ...Mainroutes];
full_path.map((item) => {
  if (item.children) {
    item.children.map((item) => {
      all_path.push(item.path);
    });
  }
  all_path.push(item.path);
});
router.beforeEach((to, from, next) => {
  if (all_path.indexOf(to.path) === -1) {
    router.push("/404");
  } else {
    if (to.path !== "/" && !localStorage.user_info) {
      message.error("请先登录");
      next("/");
    } else next();
  }
});
export default router;
