<template>
  <div>
    <h1 @click="goOut">退出登录</h1>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
  data() {
    return {};
  },
  created() {},
  methods: {
    goOut() {
      this.$router.push("/LoginPage");
      sessionStorage.removeItem("saveDatas");
    },
  },
  computed: {},
};
</script>

<style scoped lang="less">
h1 {
  text-align: center;
}
</style>
