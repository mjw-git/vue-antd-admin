const mock = require("mockjs");
import { product, loginSuccess, loginFail } from "./data";
const Random = mock.Random;
const code = 200;
const domain = "http://mockjs/api";
const API = {
  getMenu: `${domain}/admin/getMenu`,
  login: `${domain}/admin/login`,
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
