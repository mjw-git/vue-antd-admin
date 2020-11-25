<template>
  <div id="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style lang="less" scoped>
#content {
  margin: 10px;
  background: #fff;
  width: 98%;
  min-height: 580px;
  padding: 20px;
}
</style>