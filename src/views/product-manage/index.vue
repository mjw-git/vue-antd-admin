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
    <a-button type="danger" @click="showAddModal">添加商品</a-button>
    <a-button
      @click="exportTable"
      :style="{ marginLeft: '10px' }"
      type="primary"
      >导出</a-button
    >
    <a-table
      :pagination="pagination"
      :data-source="table.detail"
      :columns="column"
      rowKey="id"
      :loading="is_loading"
      :style="{ marginTop: '10px' }"
    >
      <template #product_img="{ record }">
        <a-popover placement="top" title="">
          <template #content>
            <img class="l_img" :src="record.product_img" alt="" />
          </template>
          <img class="s_img" :src="record.product_img" alt="" />
        </a-popover>
      </template>
      <template #action>
        <span class="color">删除</span>
      </template>
    </a-table>
    <modal-pro :title="title" :visible="visible" @ok="ok" @cancel="cancel">
      <template #content>1</template>
    </modal-pro>
  </div>
</template>

<script>
import XLSX from "xlsx";
import { getTable } from "../../api/product/product";
import { reactive, ref, toRef, toRaw, computed } from "vue";
import modalPro from "../../components/modal/modal-pro";
export default {
  components: {
    modalPro
  },
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
    //表格部分
    const is_loading = ref(false);
    const column = reactive([
      {
        title: "商品ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "商品名称",
        dataIndex: "product_name",
        key: "product_name"
      },
      {
        title: "商品图片",
        dataIndex: "product_img",
        key: "product_img",
        slots: { customRender: "product_img" }
      },
      {
        title: "价格",
        dataIndex: "price",
        key: "price"
      },
      {
        title: "上架时间",
        dataIndex: "entered_time",
        key: "enter_time"
      },
      {
        title: "库存",
        dataIndex: "stock",
        key: "stock"
      },
      {
        title: "操作",
        key: "action",
        slots: { customRender: "action" }
      }
    ]);
    const table = ref({});
    const getTableMsg = async () => {
      is_loading.value = true;
      const res = await getTable();
      if (res.status === 200) {
        is_loading.value = false;
      }
      table.value = res.data;
    };
    getTableMsg();
    const excel_title = ref({
      商品id: "id",
      商品名称: "product_name",
      商品图片: "product_img",
      商品价格: "price",
      上架时间: "entered_time",
      库存: "stock"
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
    //导出
    const exportTable = () => {
      const header = [
        ["商品id", "商品名称", "商品图片", "价格", "上架时间", "库存"]
      ];
      const sheet_header = XLSX.utils.aoa_to_sheet(header);
      const sheet = XLSX.utils.sheet_add_json(
        sheet_header,
        table.value.detail,
        { skipHeader: true, origin: "A2" }
      );
      const wb = XLSX.utils.book_new(); //新建workbook将sheet加入进去
      XLSX.utils.book_append_sheet(wb, sheet, "sheetName");
      XLSX.writeFile(wb, "商品.xlsx");
    };
    //添加商品弹框
    const title = "添加商品";
    const visible = ref(false);
    const ok = () => {
      visible.value = false;
    };
    const showAddModal = () => {
      visible.value = true;
    };
    const cancel = () => {
      visible.value = false;
    };
    return {
      select_option,
      select_id,
      search_form,
      clearForm,
      is_loading,
      column,
      table,
      excel_title,
      pagination,
      exportTable,
      title,
      visible,
      ok,
      cancel,
      showAddModal
    };
  }
};
</script>

<style lang="less" scoped>
.color {
  color: #1da57a;
  cursor: pointer;
}
.s_img {
  width: 60px;
  height: 60px;
}
.l_img {
  width: 200px;
  height: 200px;
}
</style>