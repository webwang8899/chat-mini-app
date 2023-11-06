<template>
  <div class="home_info">
    <van-nav-bar
      title="咬文嚼字"
      left-arrow
      fixed
      @click-left="$router.push('/LoginPage')"
    />
    <div class="home-center">
      <!-- 上传文档文件 -->
      <div class="upload_erea">
        <upload-file @onSave="OnSave"> </upload-file>
      </div>
      <!-- 使用方法 -->
      <div class="usage_method">
        <p>使用方法:</p>
        <div class="usage_info">1.从手机本地文件夹上传文档文件;</div>
        <div class="usage_info">
          2.苹果手机可先将文档文件发送到传输助手，点击上传，从聊天会话中选择传输助手，然后选择需要解析的语音;
        </div>
        <div class="usage_info">
          3.目前支持的文档格式有：PDF、Word、ppt、txt。
        </div>
      </div>
      <!-- 显示列表 -->
      <div class="show_lists">
        <div
          class="show_every"
          v-for="(item, i) in fileLists"
          :key="i"
          @click="goDetails(item)"
        >
          <div class="left">
            <van-icon name="todo-list-o" size="18px" />&nbsp;<span
              class="info_length"
              >{{ item }}</span
            >
          </div>
          <div class="right">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadFile from "../../components/uploadFile.vue";
export default {
  name: "HomeWork",
  data() {
    return {
      fileLists: [],
    };
  },
  components: { UploadFile },
  mounted() {
    sessionStorage.getItem("saveDatas")
      ? (this.fileLists = JSON.parse(sessionStorage.getItem("saveDatas")).value)
      : (this.fileLists = []);
  },
  methods: {
    OnSave(val) {
      if (val && val.length != 0) {
        this.fileLists = val;
        let datas = {
          value: val,
        };
        sessionStorage.setItem("saveDatas", JSON.stringify(datas));
      }
    },
    goDetails(val) {
      this.$router.push({
        path: "/FileChat",
        query: {
          name: val,
        },
      });
    },
  },
  computed: {},
};
</script>

<style scoped lang="less">
.home-center {
  padding: 0 20px;
  .usage_method {
    margin-bottom: 20px;
    .usage_info {
      margin: 5px 0;
      font-size: 14px;
    }
  }
  .show_lists {
    .show_every {
      display: flex;
      height: 48px;
      align-items: center;
      background: #e5f2fd;
      border-radius: 10px;
      margin: 10px 0;
      padding: 0 10px;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        .info_length {
          display: inline-block;
          width: 250px;
          overflow: hidden; //超出隐藏
          white-space: nowrap; //不折行
          text-overflow: ellipsis; //溢出显示省略号
        }
      }
    }
  }
}
</style>
