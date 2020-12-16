export const product = [
  {
    id: 1,
    value: "商品管理",
    icon: "BarsOutlined",
    path: "/admin/product",
  },
  {
    id: 2,
    value: "订单管理",
    icon: "ProfileOutlined",
    path: "",
  },
  {
    id: 3,
    value: "活动设置",
    icon: "PayCircleOutlined",
    path: "/admin/activity",
  },
  {
    id: 4,
    value: "客户管理",
    icon: "RobotOutlined",
    path: "",
  },
  {
    id: 5,
    value: "财务报表",
    icon: "TransactionOutlined",
    path: "",
  },
  {
    id: 6,
    value: "商品类别",
    icon: "AppstoreOutlined",
    path: "",
  },
  {
    id: 7,
    value: "人员管理",
    icon: "SettingOutlined",
    children: [
      {
        id: 8,
        value: "消费者账户",
        path: "/setting/user",
      },
      {
        id: 9,
        value: "管理员账户",
        path: "/setting/manager",
      },
    ],
  },
];
export const loginSuccess = {
  code: 200,
  message: "登录成功",
  data: {
    name: "权限管理员",
    username: 1366666666,
    avatar: "http://ww1.sinaimg.cn/large/005ZSj0Ggy1gh1a2vjfkoj30hr0hst9t.jpg",
  },
};
export const loginFail = {
  code: 500,
  message: "登录失败",
  data: null,
};
