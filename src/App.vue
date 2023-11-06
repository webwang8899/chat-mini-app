<template>
  <div id="app">
    <keep-alive>
      <router-view class="router" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view class="router" v-if="!$route.meta.keepAlive" />
    <van-tabbar
      v-model="active"
      fixed
      placeholder
      route
      v-if="['HomeWork', 'MyRecords', 'Personal'].includes($route.name)"
      @change="change"
    >
      <van-tabbar-item to="/HomeWork" name="0" icon="todo-list"
        >文档</van-tabbar-item
      >
      <van-tabbar-item to="/MyRecords" name="1" icon="column"
        >访问记录</van-tabbar-item
      >
      <van-tabbar-item to="/Personal" name="3" icon="manager"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import "./assets/css/base.css";
export default {
  name: "app",
  data() {
    return {
      active: 0,
      noticeShow: false,
    };
  },
  mounted() {},
  methods: {
    // 切换
    change(index) {
      this.active = index;
      window.localStorage.setItem("tabIndex", index);
    },
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        if (val.path == "/HomeWork" || val.path === "/MyRecords") {
          localStorage.removeItem("messageNew");
        }
      },
      // 深度观察监听
      deep: true,
    },
    "$route.name"(value) {
      if (value === "HomeWork" || value === "MyRecords" || value === "Personal")
        return (this.noticeShow = true);
      this.noticeShow = false;
    },
  },
};
</script>

<style scoped lang="less">
#app {
  height: 100%;
}
</style>
