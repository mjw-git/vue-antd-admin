<template>
  <div>
    <a-input
      v-model:value="value"
      :style="{ width: width + 'px' }"
      v-if="is_edit"
    ></a-input>
    <span v-else>{{ value }}</span>
    <EditOutlined v-if="!is_edit" @click="edit" />
    <CheckOutlined @click="edit" v-else />
  </div>
</template>

<script>
import { EditOutlined, CheckOutlined } from "@ant-design/icons-vue";
import { reactive, ref } from "vue";
export default {
  props: {
    width: {
      type: Number,
      default: 80
    },
    value: {
      type: String,
      default: ""
    }
  },
  components: {
    EditOutlined,
    CheckOutlined
  },
  setup() {
    const is_edit = ref(false);
    const edit = () => {
      is_edit.value = !is_edit.value;
    };
    return {
      is_edit,
      edit
    };
  }
};
</script>

<style lang="less" scoped>
</style>