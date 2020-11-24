import { instance } from "../../untils/request";
export async function getMenu() {
  return await instance.get("/admin/getMenu");
}
export async function userLogin(send_data) {
  return await instance.post("/admin/login", send_data);
}
