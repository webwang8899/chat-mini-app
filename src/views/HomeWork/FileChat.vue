<template>
  <div class="file_info">
    <!-- 头部信息固定 -->
    <div class="fixed_boxs">
      <van-nav-bar :title="name" left-arrow @click-left="$router.back(-1)" />
      <div class="file_title">
        <div class="file_left">
          <van-icon name="todo-list-o" size="18px" />&nbsp;
          <span class="info_length">{{ name }}</span>
        </div>
        <div class="file_right">
          <div class="right_box">
            <van-icon name="upgrade" size="18px" /><span>导出</span>
          </div>
          <div class="right_box">
            <van-icon name="notes-o" size="18px" /><span>复制</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 聊天机器人 -->
    <div class="file_center">
      <div class="chat_messages" v-if="messages && messages.length != 0">
        <div
          v-for="(item, index) in messages"
          :key="index"
          :class="item.position == 'left' ? 'message_left' : 'message_right'"
        >
          <div class="username">{{ item.username }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <!-- 底部固定 发送 -->
    <div class="bottom_boxs">
      <van-field
        v-model.trim="newMessage"
        center
        clearable
        placeholder="问些文档相关的问题吧"
      >
        <template #button>
          <van-button
            size="small"
            type="primary"
            color="#359dfa"
            @click="sendMessage"
            >发送</van-button
          >
        </template>
      </van-field>
    </div>
    <!-- 右侧固定 -->
    <div class="right_fixed" @click="infoShow = true">
      <van-icon name="question-o" size="24px" />
    </div>
    <!-- 弹层 -->
    <ChatBody
      @onClosed="infoShow = false"
      v-if="infoShow"
      @sendMsg="sendMsg"
    ></ChatBody>
  </div>
</template>

<script>
import ChatBody from "./ChatBody.vue";
export default {
  components: {
    ChatBody,
  },
  name: "FileChat",
  data() {
    return {
      name: "",
      newMessage: "",
      messages: [],
      infoShow: false,
    };
  },
  created() {
    this.name = this.$route.query.name;
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        this.messages.push({
          username: "提问者",
          content: this.newMessage,
          position: "right",
        });
        setTimeout(() => {
          //模拟系统延时1秒回答
          this.messages.push({
            username: "嚼字机器人",
            content: this.newMessage,
            position: "left",
          });
          this.newMessage = "";
        }, 1000);
      } else {
        this.$toast({
          message: "错了哦，消息不可为空",
          position: "top",
        });
      }
    },
    sendMsg(val) {
      if (val) {
        this.messages.push({
          username: "提问者",
          content: val.msg,
          position: "right",
        });
        this.infoShow = false;
        setTimeout(() => {
          //模拟系统延时1秒回答
          this.messages.push({
            username: "嚼字机器人",
            content: val.msg,
            position: "left",
          });
        }, 1000);
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="less">
:deep(.van-field__control) {
  background: #f7f7f7;
  height: 40px;
  padding-left: 10px;
}
:deep(.van-button--small) {
  width: 100px;
  border-radius: 10px;
  height: 40px;
  font-size: 16px;
}
.fixed_boxs {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background: #fff;
  .file_title {
    display: flex;
    height: 58px;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    padding: 0 10px;
    justify-content: space-between;
    .file_left {
      width: 75%;
      display: flex;
      height: 44px;
      align-items: center;
      background: #e5f2fd;
      border-radius: 10px;
      padding: 0 10px;
      .info_length {
        display: inline-block;
        width: 250px;
        overflow: hidden; //超出隐藏
        white-space: nowrap; //不折行
        text-overflow: ellipsis; //溢出显示省略号
      }
    }
    .file_right {
      width: 25%;
      display: flex;
      justify-content: space-around;
      .right_box {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        height: 44px;
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }
}
.file_center {
  padding: 120px 20px 40px 20px;
  .chat_messages {
    min-height: 600px;
    overflow-y: scroll;
    .message_right {
      margin-bottom: 20px;
      text-align: right;
      .content {
        background: #359dfa;
        padding: 12px;
        min-height: 20px;
        line-height: 20px;
        border-radius: 10px;
        color: #fff;
        font-size: 14px;
      }
      .username {
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
    .message_left {
      margin-bottom: 20px;
      .content {
        background: #fff;
        padding: 12px;
        min-height: 20px;
        line-height: 20px;
        border-radius: 10px;
        color: #000;
        font-size: 14px;
      }
      .username {
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
}
.bottom_boxs {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 20;
  height: 50px;
  background: #fff;
  display: flex;
}
.right_fixed {
  position: fixed;
  padding: 10px 0;
  width: 50px;
  bottom: 150px;
  right: 0;
  background: #359dfa;
  z-index: 20;
  text-align: center;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  color: #fff;
}
</style>