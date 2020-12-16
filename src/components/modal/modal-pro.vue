<template>
  <div class="box">
    <a-modal
      :width="width"
      :title="title"
      :maskClosable="maskClosable"
      :visible="visible"
      :footer="null"
      @cancel="cancel"
      :closable="closable"
    >
      <slot name="content"></slot>
      <div class="footer" v-if="showFooter">
        <a-button class="modal-btn" @click="cancel">
          {{ cancelText }}
        </a-button>
        <a-button
          class="modal-btn"
          type="primary"
          :loading="confirmLoading"
          @click="ok"
        >
          {{ okText }}
        </a-button>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "ModalPro",
  props: {
    title: {
      //标题
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    },
    okText: {
      //确定文字
      type: String,
      default: "确定"
    },
    cancelText: {
      // 取消文字
      type: String,
      default: "取消"
    },
    confirmLoading: {
      //异步加载
      type: Boolean,
      default: false
    },
    showFooter: {
      //是否显示页脚
      type: Boolean,
      default: true
    },
    closable: {
      //是否显示右上角关闭图标
      type: Boolean,
      default: true
    },
    maskClosable: {
      //点击蒙层是否关闭
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 500
    }
  },
  setup(props, { emit }) {
    const ok = () => {
      emit("ok");
    };
    const cancel = () => {
      emit("cancel");
    };
    return {
      ok,
      cancel
    };
  }
};
</script>

<style lang="less" scoped>
:global(.ant-modal-footer) {
  border-top: none;
}
:global(.ant-modal-header) {
  border-bottom: none;
}
:global(.ant-modal-body) {
  padding-bottom: 10px;
}
.footer {
  padding-top: 30px;
  text-align: right;
  .modal-btn {
    margin-right: 10px;
  }
}
</style>