export const Indexroutes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/404",
    name: 404,
    component: () => import("../views/404.vue"),
  },
];
export const Mainroutes = [
  {
    path: "/admin/introduction",
    name: "Admin",
    component: () => import("../components/layout/layout"),
    children: [
      {
        path: "/admin/introduction",
        name: "Introduction",
        component: () => import("../views/introduction/introduction"),
        meta: { name: "后台介绍", id: 0 },
      },
      {
        path: "/admin/product",
        name: "Product",
        component: () => import("../views/product-manage/index"),
        meta: { name: "商品管理", id: 1 },
      },
    ],
  },
];
