<template>
  <div class="upload_box">
    <van-uploader
      v-model="fileList"
      :after-read="afterRead"
      multiple
      :max-count="9"
      accept=".jpg,.gif,.png,.jpeg,.txt,.pdf,.doc,.docx,.xls,.xlsx,.ppt,"
    >
      <van-button size="small" color="#359DFA" type="info" round>
        上传文档文件</van-button
      >
    </van-uploader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    afterRead(val) {
      let result = [];
      if (val && val.length > 1) {
        val.forEach((item) => {
          result.push(item.file.name);
        });
      } else {
        result[0] = val.file.name;
      }
      this.$emit("onSave", result);
    },
  },
};
</script>

<style scoped lang="less">
:deep(.van-uploader) {
  width: 240px;
}

:deep(.van-uploader__wrapper) {
  width: 240px;
}

:deep(.van-uploader__preview) {
  display: none;
}

:deep(.van-uploader__preview-image) {
  display: none;
}

:deep(.van-uploader__preview-delete) {
  display: none;
}
:deep(.van-button--round) {
  width: 240px;
  height: 50px;
  font-size: 18px;
}
.upload_box {
  width: 100%;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>