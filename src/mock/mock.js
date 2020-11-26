const mock = require("mockjs");
import { product, loginSuccess, loginFail } from "./data";
const Random = mock.Random;
const code = 200;
const domain = "http://mockjs/api";
const API = {
  getMenu: `${domain}/admin/getMenu`,
  login: `${domain}/admin/login`,
  getProduct: `${domain}/admin/product`,
};
const table_detail = () => {
  let product_list = [];
  for (let i = 0; i < 10; i++) {
    product_list.push({
      id: i + 1,
      product_name: Random.ctitle(),
      product_img:
        "http://ww1.sinaimg.cn/large/005ZSj0Ggy1gl2wchofffj307n053a9y.jpg",
      price: Random.natural(1, 100),
      entered_time: Random.datetime(),
      stock: Random.natural(10, 100),
    });
  }
  return product_list;
};
const table = {
  current: 1,
  limit: 10,
  total: 10,
  detail: table_detail,
};
mock.mock(API.login, "post", (options) => {
  console.log(options);
  if (
    JSON.parse(options.body).username === "13666666666" &&
    JSON.parse(options.body).password === "123456"
  ) {
    return loginSuccess;
  }
  return loginFail;
});
mock.mock(API.getMenu, "get", product);
mock.mock(API.get, "get", table);
