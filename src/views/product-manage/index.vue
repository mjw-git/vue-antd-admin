<template>
  <div>
    <a-form layout="inline">
      <a-form-item>
        <template #label>
          <a-select v-model:value="select_id">
            <a-select-option
              v-for="item in select_option"
              v-bind:value="item.id"
              :key="item.id"
              >{{ item.value }}</a-select-option
            >
          </a-select>
        </template>
        <a-input allowClear v-model:value="search_form" placeholder="请输入" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary">搜索</a-button>
      </a-form-item>
      <a-form-item>
        <span @click="clearForm" class="color">清空搜索记录</span>
      </a-form-item>
    </a-form>
    <a-button type="primary">导出</a-button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    //搜索模块
    const search_form = ref("");
    const select_id = ref(1);
    const select_option = ref([
      {
        id: 1,
        value: "商品ID"
      },
      {
        id: 2,
        value: "商品名称"
      }
    ]);
    const clearForm = () => {
      search_form.value = "";
    };
    return {
      select_option,
      select_id,
      search_form,
      clearForm
    };
  }
};
</script>

<style lang="less" scoped>
.color {
  color: #1da57a;
  cursor: pointer;
}
</style>