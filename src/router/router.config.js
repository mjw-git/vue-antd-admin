export const Indexroutes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login/login.vue"),
  },
];
export const Mainroutes = [
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/layout/layout"),
  },
];
