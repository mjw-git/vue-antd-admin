<template>
  <div>
    <a-form layout="inline">
      <a-form-item label="活动名称"
        ><a-input
          placeholder="输入活动名称"
          v-model:value="search_form.activity_name"
      /></a-form-item>
      <a-form-item label="活动时间">
        <a-range-picker v-model:value="search_form.activity_time"
      /></a-form-item>
      <a-form-item>
        <a-button type="primary">搜索</a-button>
      </a-form-item>
      <a-form-item>
        <span @click="clearForm" class="color">清空搜索记录</span>
      </a-form-item>
    </a-form>
    <span class="color">添加活动</span>
    <a-table
      :pagination="pagination"
      :columns="column"
      :dataSource="table.detail"
      rowKey="id"
    >
      <template #action>
        <div class="color">编辑</div>
        <div class="delete_color">删除</div>
      </template>
    </a-table>
  </div>
</template>

<script>
import moment from "moment";
import { reactive, computed, ref } from "vue";
export default {
  setup() {
    const search_form = reactive({
      activity_name: "",
      activity_time: []
    });
    const clearForm = () => {
      search_form.activity_name = "";
      search_form.activity_time = [];
    };

    const table = ref({
      limit: 10,
      total: 1,
      current: 1,
      detail: [
        {
          id: 1,
          activity_name: "活动名称",
          activity_img: "",
          activity_product: "活动商品",
          activity_time: "2020-10-2~2020-10-3",
          activity_discount: 9
        }
      ]
    });
    const pagination = computed(() => {
      return {
        current: table.value.current,
        pageSize: table.value.limit,
        showTotal: (total) =>
          `一共${table.value.total}条数据，每页${table.value.limit}条`,
        total: table.value.total
      };
    });
    const column = reactive([
      {
        title: "活动ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "活动名称",
        dataIndex: "activity_name",
        key: "activity_name"
      },
      {
        title: "活动图",
        dataIndex: "activity_img",
        key: "activity_img"
      },
      {
        title: "活动商品",
        dataIndex: "activity_product",
        key: "activity_product"
      },
      {
        title: "活动时间范围",
        dataIndex: "activity_time",
        key: "activity_time"
      },
      {
        title: "活动折扣",
        dataIndex: "activity_discount",
        key: "activity_discount"
      },
      {
        title: "活动状态",
        dataIndex: "activity_status",
        key: "activity_status"
      },
      {
        title: "操作",
        key: "action",
        slots: { customRender: "action" }
      }
    ]);
    //表格部分
    return {
      search_form,
      clearForm,
      column,
      pagination,
      table
    };
  }
};
</script>

<style lang="less" scoped>
</style>