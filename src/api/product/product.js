import { instance } from "../../untils/request";
export async function getTable() {
  return await instance.get("/admin/product");
}
