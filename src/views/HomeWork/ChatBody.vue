<template>
  <div class="center_bos">
    <van-overlay :show="show" @click="onClose">
      <div class="wrapper" @click.stop>
        <div
          class="info_every"
          v-for="(item, index) in infoList"
          :key="index"
          @click="goDetails(item)"
        >
          {{ item.msg }}
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      infoList: [
        {
          id: 1,
          msg: "简单概述一下这份文件讲了些什么内容?",
        },
        {
          id: 2,
          msg: "这些项目中那些是最重要的，需要特别关注?",
        },
        {
          id: 3,
          msg: "这份文件可以用于哪些方面的青少年健康评估?",
        },
      ],
    };
  },
  methods: {
    onClose() {
      this.$emit("onClosed");
    },
    goDetails(val) {
      this.$emit("sendMsg", val);
    },
  },
};
</script>

<style scoped lang="less">
:deep(.van-overlay) {
  z-index: 30;
  background-color: #ffffffae;
}
.wrapper {
  position: fixed;
  bottom: 100px;
  left: 15px;
  z-index: 30;
  .info_every {
    width: 320px;
    background-color: #cde4fd;
    min-height: 30px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
}
</style>