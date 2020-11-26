<template>
  <div id="loginForm">
    <div id="title">vue-antd-admin</div>
    <div>
      <a-form
        labelAlign="right"
        id="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item v-bind="validateInfos.username">
          <template #label><span id="label"> 用户名</span></template>
          <a-input
            allowClear
            v-model:value="form.username"
            placeholder="1366666666"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <template #label><span id="label"> 密码</span></template>
          <a-input
            allowClear
            v-model:value="form.password"
            placeholder="123456"
          />
        </a-form-item>
        <a-form-item style="margin-left: 50px">
          <a-button @click="login" type="primary">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { userLogin } from "../../api/global/global-api";
import { SET_USER_DETAIL } from "../../store/type";
import { useRouter } from "vue-router";
import { reactive, ref, toRaw, getCurrentInstance, inject } from "vue";
import { useStore } from "vuex";
import { useForm } from "@ant-design-vue/use";
import { Form, message } from "ant-design-vue";
export default {
  setup() {
    const message = inject("$message");
    console.log(message);
    const router = useRouter();
    const store = useStore();
    const form = reactive({
      username: "",
      password: ""
    });
    const labelCol = reactive({
      span: 6
    });
    const wrapperCol = reactive({
      span: 18
    });
    const rules = reactive({
      username: [
        {
          required: true,
          message: "请输入用户名"
        }
      ],
      password: [
        {
          required: true,
          message: "请输入正确格式的密码,至少六位",
          pattern: /.{6,}/
        }
      ]
    });
    const { resetFields, validate, validateInfos } = useForm(form, rules);

    const login = () => {
      validate()
        .then(async () => {
          const res = await userLogin(form);
          console.log(res.data.data);
          if (res.data.code === 200) {
            message.success("登录成功");
            store.commit(`user/${SET_USER_DETAIL}`, res.data.data);
            localStorage.setItem("user_info", JSON.stringify(res.data.data));
            router.push("/admin/introduction");
          } else {
            message.error("用户名或密码输入错误");
          }
          toRaw(form);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return {
      form,
      labelCol,
      wrapperCol,
      login,
      validateInfos
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
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>