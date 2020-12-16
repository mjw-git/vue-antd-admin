<template>
  <div>
    <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }">
      <a-form-item required label="活动名称"
        ><a-input
          class="width-250"
          maxLength="15"
          placeholder="请输入活动名称，最多15字"
          v-model:value="activity_form.activity_name"
      /></a-form-item>
      <a-form-item required label="活动时间">
        <a-range-picker v-model:value="activity_form.activity_time"
      /></a-form-item>
      <a-form-item required label="活动图"
        ><image-upload :img_list="img_list" @deleteChange="deleteChange" />
      </a-form-item>
      <a-form-item required label="折扣商品"
        ><a-button @click="showAddModal" type="primary">添加商品</a-button>
        <a-button type="danger" @click="showBatchSetting" class="marginLeft"
          >批量设置商品活动折扣</a-button
        >
        <a-table rowKey="id" :columns="column" :data-source="table_data">
          <template #discount="{ record }">
            <editText :value="record.discount" />
          </template>
          <template #action><span class="color">删除</span></template>
        </a-table>
      </a-form-item>
    </a-form>
    <modal-pro
      title="添加商品"
      @cancel="is_show_addModal = false"
      :visible="is_show_addModal"
    >
      <template #content>
        <a-form layout="inline">
          <a-form-item label="商品名称"><a-input></a-input></a-form-item>
          <a-form-item><a-button type="primary">搜索</a-button></a-form-item>
        </a-form>
        <a-table
          :data-source="modal_table.detail"
          :pagination="pagination"
          :columns="addModal_column"
          rowKey="id"
        >
        </a-table>
      </template>
    </modal-pro>
    <modal-pro
      :width="350"
      title="批量设置活动折扣"
      :visible="is_show_batch"
      @cancel="is_show_batch = false"
    >
      <template #content>
        <a-form>
          <a-form-item label="活动折扣"><a-input></a-input></a-form-item>
        </a-form>
      </template>
    </modal-pro>
  </div>
</template>

<script>
import imageUpload from "../../components/upload/image-upload";
import editText from "../../components/edit-text/edit-text";
import modalPro from "../../components/modal/modal-pro";
import { reactive, ref, computed } from "vue";
export default {
  components: {
    modalPro,
    editText,
    imageUpload
  },
  setup() {
    const activity_form = reactive({
      activity_name: "",
      activity_time: []
    });
    const column = reactive([
      {
        title: "商品名称",
        dataIndex: "product_name",
        key: "product_name"
      },
      {
        title: "商品图片",
        dataIndex: "product_img",
        key: "product_img"
      },
      {
        title: "商品价格",
        dataIndex: "product_price",
        key: "product_price"
      },
      {
        title: "活动折扣",
        key: "discount",
        slots: { customRender: "discount" }
      },
      {
        title: "操作",
        key: "action",
        slots: { customRender: "action" }
      }
    ]);
    const table_data = reactive([
      {
        id: 1,
        product_name: "商品信息",
        product_img: "111",
        product_price: 28,
        discount: "7"
      }
    ]);
    //新增
    const addModal_column = reactive([
      {
        title: "商品名称",
        dataIndex: "product_name",
        key: "product_name"
      },
      {
        title: "商品图片",
        dataIndex: "product_img",
        key: "product_img"
      },
      {
        title: "商品价格",
        dataIndex: "product_price",
        key: "product_price"
      },
      {
        title: "商品库存",
        dataIndex: "product_stock",
        key: "product_stock"
      }
    ]);
    const modal_table = ref({
      total: 1,
      limit: 10,
      current: 1,
      detail: [
        {
          product_name: "商品名称",
          product_img: "",
          product_price: 1111,
          product_stock: 11
        }
      ]
    });
    const is_show_addModal = ref(false);
    const showAddModal = () => {
      is_show_addModal.value = true;
    };
    const pagination = computed(() => {
      return {
        current: modal_table.value.current,
        pageSize: modal_table.value.limit,
        showTotal: (total) =>
          `一共${modal_table.value.total}条数据，每页${modal_table.value.limit}条`,
        total: modal_table.value.total
      };
    });
    //批量设置
    const is_show_batch = ref(false);
    const showBatchSetting = () => {
      is_show_batch.value = true;
    };
    //图片上传
    const img_list = ref([
      "http://ww1.sinaimg.cn/large/005ZSj0Ggy1gh1a2vjfkoj30hr0hst9t.jpg"
    ]);
    console.log(img_list);
    const deleteChange = (value) => {
      console.log(value);
      img_list = value;
    };
    return {
      is_show_batch,
      activity_form,
      table_data,
      column,
      showAddModal,
      is_show_addModal,
      modal_table,
      pagination,
      addModal_column,
      showBatchSetting,
      deleteChange,
      img_list
    };
  }
};
</script>

<style lang="less" scoped>
.marginLeft {
  margin-left: 10px;
}
</style>