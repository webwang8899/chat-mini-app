<template>
  <div>222</div>
</template>

<script>
export default {
  name: "MyRecords",
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
};
</script>

<style scoped lang="less">
::v-deep .van-steps {
  background-color: #f8f8f8 !important;
}

.homework-card-bg {
  margin-top: 8px;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
}
.homework-card-title-bg {
  display: flex;
  justify-content: space-between;
}
.homework-card-title {
  font-size: 16px;
  line-height: 24px;
  color: #333;
  font-weight: bold;
}
.title-new {
  width: 42px;
  height: 18px;
  background-color: #fff1d8;
  font-weight: 700;
  color: #f7a916;
  font-size: 10px;
  border-radius: 3px;
  line-height: 18px;
  text-align: center;
}
.stateColored {
  font-size: 12px;
  color: #f53f3f;
}
.homework-card-time-bg {
  display: flex;
  justify-content: space-between;
}
.homework-card-line {
  border-top: rgb(243, 243, 243) 1px solid;
  margin: 6px 0;
}
.homework-card-centent {
  line-height: 20px;
  color: #86909c;
  font-size: 12px;
}
.homework-card-title {
  font-size: 14px;
  color: #1d2129;
}
.time {
  font-size: 12px;
}
.tag {
  font-size: 12px;
  color: #359DFA;
}
.tag2 {
  font-size: 12px;
  color: #ff9950;
}
.empty {
  margin-top: 20vh;
}
.van-dialog {
  overflow: visible !important;
}
/* 弹窗样式 */
.dialog {
  /deep/ .van-dialog__header {
    background: #fff url(@/assets/image/backImg.png) top center no-repeat;
    background-size: 100%;
  }
  .notice {
    padding: 8px 10px;
    margin: 10px 0 20px 0;
    text-align: justify;
    font-size: 14px;
    color: #4e5969;
    line-height: 24px;
    background: #f7f8fa;
    max-height: 200px;
    overflow: auto;
    img {
      width: 58px;
      height: 58px;
      position: absolute;
      top: -24px;
      right: 22px;
    }
  }
  .time {
    color: #86909c;
    font-size: 12px;
    margin-top: 10px;
  }
  /deep/ .van-dialog__header {
    text-align: left;
    color: #1d2129;
    padding: 0 20px;
    padding-top: 60px;
    border-radius: 16px 16px 0 0;
    font-size: 20px;
  }
  /deep/ .van-dialog__content {
    padding: 0 20px !important;
    margin-bottom: 10px;
  }
  /deep/ .van-dialog__footer {
    border-radius: 0 0 16px 16px;
  }
}
</style>
