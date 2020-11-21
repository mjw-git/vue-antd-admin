import { instance } from "../../untils/request";
export async function getMenu() {
  return await instance.get("/admin/getMenu");
}
