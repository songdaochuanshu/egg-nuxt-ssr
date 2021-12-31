<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-12 23:55:23
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 03:30:15
 * @FilePath: \test\nuxt\pages\index.vue
-->
<template>
  <div class="container">
    <a-button type="primary">{{ msg }}</a-button>
  </div>
</template>

<script lang="ts">
import vue from "vue";
export default vue.extend({
  data() {
    return {
      msg: "" as string,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { $axios } = this;
      const res = await $axios.get("/test");
      this.msg = res.data;
    },
  },
});
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
