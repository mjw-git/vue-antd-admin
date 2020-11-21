const mock = require("mockjs");
import { product } from "./data";
const Random = mock.Random;
const code = 200;
const domain = "http://mockjs/api";
const API = {
  getMenu: `${domain}/admin/getMenu`,
};
mock.mock(API.getMenu, "get", product);
