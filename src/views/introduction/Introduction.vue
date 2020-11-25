<template>
  <div>
    <h1>vue-antd-admin</h1>
    <p>基于vue3.0+antd2.0.0+vuex4.0+vue-router4.0</p>
    <p>
      欢迎使用vue-antd-admin，这是一个基于vue3.0+antd2.0.0+vuex4.0+vue-router4.0的适合新手学习的项目，后台全部采用了composition
      API
      的写法，作者也只是个刚出学校的初级菜鸟前端，在vue3的路上不断摸索，不断踩坑，目前的想法是效仿vue-element-admin做一个通用后台，数据使用mock数据
      ，未来会考虑拿ts重构。
    </p>
    <p>1、antd支持主题的变换，可以在vue.config.js中进行修改</p>
    <p>
      2、mock数据保存在mock文件夹下，data.js可以用来初始化常量数据，mock.js为主文件，如要关闭mock数据只需在main.js中注释mock的引入即可，封装
      的axios在untils/request.js下,axios挂载在全局上推荐使用inject，provide来使用。
    </p>
    <p>3、。。。。</p>

    <router-link to="/admin/product">点击开始</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
h1 {
  font-size: 50px;
}
p {
  font-weight: 400;
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>