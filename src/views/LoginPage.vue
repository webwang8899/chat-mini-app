<template>
  <div>
    <div class="login-bg">
      <div class="login-card">
        <!-- 表单 -->
        <van-form @submit="onSubmit" ref="loginFrom">
          <van-field
            v-model="userInfo.username"
            size="large"
            type="number"
            maxlength="12"
            focus="focusClick"
            name="username"
            clearable
            placeholder="学号/手机号"
            :rules="usernameRules"
          >
            <div slot="left-icon">
              <van-icon
                size="20"
                class="iconfont"
                class-prefix="icon-sum_login_phone"
                color="#C2C7DA"
              />
            </div>
          </van-field>

          <van-field
            v-model="userInfo.password"
            size="large"
            :type="passwordType"
            maxlength="20"
            name="password"
            placeholder="初始密码: Xaiu#身份证后六位"
            left-icon="weapp-nav"
            :rules="passwordRules"
          >
            <template #right-icon>
              <van-icon
                name="eye"
                @click="viewPassword"
                size="18"
                color="#c8c9cc"
              />
            </template>
            <template #left-icon>
              <van-icon
                size="20"
                class="iconfont"
                class-prefix="icon-sum_login_password"
                color="#C2C7DA"
              />
            </template>
          </van-field>

          <div class="button-bg">
            <van-button
              square
              block
              type="info"
              native-type="submit"
              @click="login"
              >登录</van-button
            >
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {
      visible: false,
      userInfo: {
        username: "15334893960",
        password: "Xaiu#200011",
      },
      // 密码type
      passwordType: "password",
      // 验证
      usernameRules: [
        { required: true, message: "请输入学号" },
        {
          validator: (value) => {
            return /^[0-9]{8}|[0-9]{12}$/.test(value);
          },
          message: "请输入正确的学号或手机号",
          trigger: "onBlur",
        },
      ],
      passwordRules: [{ required: true, message: "请输入密码" }],
      loginState: true,
      currentTime: "",
      verificationCodeImage: "",
      isWeixin: false,
    };
  },
  mounted() {
    // 控制动画
    this.visible = !this.visible;
  },
  methods: {
    onSubmit(values) {
      values;
    },
    // 查看密码
    viewPassword() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
    login() {
      this.$refs.loginFrom.validate().then(() => {
        this.$toast({
          message: "登录成功",
          position: "top",
        });
        this.$router.push("/HomeWork");
      });
    },
  },
};
</script>

<style scoped>
.login-bg {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #359dfa;
  background-image: url(../assets/image/loginbg.png);
  background-repeat: no-repeat;
  background-position: bottom;
}
.login-card {
  padding: 20px 16px;
  background-color: #fff;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  margin-bottom: 16px;
}

.button-bg {
  margin: 20px;
}
</style>