<template>
  <div class="img-upload-container">
    <div
      v-for="(item, index) of url_list"
      :key="index"
      class="img-container margin"
    >
      <img :src="item" alt="" />
      <div class="mask">
        <ZoomInOutlined @click.stop="showPicture(item)" class="s-size" />
        <DeleteOutlined @click.stop="deleteImg(index)" class="s-size" />
      </div>
    </div>
    <div id="upload">
      <a-upload>
        <UploadOutlined class="cursor size" />
      </a-upload>
    </div>
    <ModalPro
      :showFooter="false"
      @cancel="show_picture = false"
      :visible="show_picture"
    >
      <template #content>
        <img width="400" :src="show_img_url" alt="" />
      </template>
    </ModalPro>
  </div>
</template>

<script>
import ModalPro from "../modal/modal-pro";
import {
  UploadOutlined,
  DeleteOutlined,
  ZoomInOutlined
} from "@ant-design/icons-vue";
import { computed, nextTick, ref } from "vue";
export default {
  name: "imageUpload",
  props: {
    img_list: {
      type: Array,
      default: []
    }
  },
  components: {
    UploadOutlined,
    DeleteOutlined,
    ZoomInOutlined,
    ModalPro
  },
  setup(props, { emit }) {
    const show_img_url = ref("");
    const show_picture = ref(false);
    const showPicture = (item) => {
      show_picture.value = true;
      nextTick(() => {
        show_img_url.value = item;
      });
    };
    const url_list = computed({
      get: () => props.img_list,
      set: (newVal) => emit("deleteChange", newVal)
    });
    const deleteImg = (index) => {
      url_list.value.splice(index, 1);
    };
    return {
      show_picture,
      showPicture,
      show_img_url,
      deleteImg,
      url_list
    };
  }
};
</script>

<style lang="less" scoped>
.margin {
  margin-right: 5px;
}
.img-upload-container {
  vertical-align: top;
  display: flex;
  flex-direction: row;
  align-items: center;
  .img-container {
    cursor: pointer;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    text-align: center;
    vertical-align: middle;

    .mask {
      display: flex;
      flex-direction: row;
      position: absolute;
      align-items: center;
      top: 0;
      transition: all 0.8s;
      width: 40px;
      height: 40px;
      z-index: 999;
      .s-size {
        display: none;
        width: 20px;
        height: 20px;
        transition: all 0.8s;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        .s-size {
          display: block;
          width: 20px;
          height: 20px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
    img {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
.size {
  width: 35px;
  height: 35px;
}
#upload {
  // border-radius: 1px;
  border: 1px solid rgba(0, 0, 0, 0.301);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #eee;
    box-shadow: 0px 0px 2px skyblue, 0px 0px 2px skyblue;
  }
}
</style>