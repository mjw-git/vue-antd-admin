<template>
  <div id="loginForm">
    <div id="title">vue-antd-admin</div>
    <div>
      <a-form id="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item>
          <template #label><span id="label"> 用户名</span></template>
          <a-input v-model:value="form.username" placeholder="1366666666" />
        </a-form-item>
        <a-form-item>
          <template #label><span id="label"> 密码</span></template>
          <a-input v-model:value="form.password" placeholder="123456" />
        </a-form-item>
        <a-form-item>
          <a-button @click="login" type="primary">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { SET_IS_LOGIN } from "../../store/type";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const labelCol = reactive({
      span: 6
    });
    const wrapperCol = reactive({
      span: 18
    });
    const form = reactive({
      username: "",
      password: ""
    });
    const login = () => {
      store.commit(`user/${SET_IS_LOGIN}`, true);

      router.push("/admin");
    };
    return {
      form,
      labelCol,
      wrapperCol,
      login
    };
  }
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "vue-admin";
  font-display: swap;
  src: url("//at.alicdn.com/t/webfont_ezqmehiikn.eot"); /* IE9*/
  src: url("//at.alicdn.com/t/webfont_ezqmehiikn.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//at.alicdn.com/t/webfont_ezqmehiikn.woff2")
      format("woff2"),
    url("//at.alicdn.com/t/webfont_ezqmehiikn.woff") format("woff"),
    /* chrome、firefox */ url("//at.alicdn.com/t/webfont_ezqmehiikn.ttf")
      format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url("//at.alicdn.com/t/webfont_ezqmehiikn.svg#NotoSansHans-Black")
      format("svg"); /* iOS 4.1- */
}
#title {
  animation: come 1s ease;
  animation-fill-mode: forwards;
  margin-top: 60px;
  font-family: "vue-admin";
  font-size: 64px;
  color: #eee;
}
@keyframes come {
  from {
    transform: translateY(-100px);
    opacity: 0;
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
    opacity: 1;
  }
}
#form {
  margin-top: 80px;
  animation: come 1s ease;
  animation-fill-mode: forwards;
}
#label {
  font-weight: bolder;
  font-size: 15px;
}
#loginForm {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("http://ww1.sinaimg.cn/large/005ZSj0Ggy1gkzm4hcwhyj31hc0u0npd.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>