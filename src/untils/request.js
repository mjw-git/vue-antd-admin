import axios from "axios";
import { message } from "ant-design-vue";
const baseURL = "http://mockjs/api";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 15000,
});
instance.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  return config;
});
instance.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response;
});
export { instance };
