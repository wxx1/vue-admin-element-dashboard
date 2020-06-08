<template>
  <div id="home">
    <div class="header">
      <div class="header-wrapper">
        <div class="header-l">欢迎登陆</div>
        <div class="header-r">
          没有账号？
          <router-link to="/register">请注册></router-link>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="main">
        <div class="login">
          <div class="ms-title">线下教育后台管理系统</div>
          <el-form
            :model="param"
            :rules="rules"
            ref="login"
            label-width="0px"
            class="ms-content"
            size="large"
          >
            <el-form-item prop="username">
              <el-input v-model="param.username" placeholder="username">
                <el-button slot="prepend" icon="el-icon-user"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                placeholder="password"
                v-model="param.password"
                @keyup.enter.native="submitForm()"
              >
                <el-button slot="prepend" icon="el-icon-lock"></el-button>
              </el-input>
            </el-form-item>

            <div class="login-btn">
              <el-button type="danger" @click="submitForm('login')" size="large">登录</el-button>
            </div>
            <p class="login-tips">用户名密码随便输都可进去系统</p>
          </el-form>
        </div>
      </div>

      <div class="footer">线下教育平台 Copyright:1301</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      param: {
        username: "admin",
        password: "admin"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods:{
      submitForm(formName){
          this.$refs[formName].validate((vaild) => {
              if(vaild){
                  alert('submit!');
                  this.$router.push('/admin');
                  localStorage.setItem('username',this.param.username);
              }
          })
      }
  }
};
</script>
<style scope>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  line-height: 110px;
  margin: 0 10%;
}
.header-l {
  font-size: 0.32rem;
  /* font-size: 24px; */
  color: #333;
}
.header-r {
  color: #999;
  font-size: 0.16rem;
  /* font-size: 16px; */
}
.header-r a {
  color: red;
}
.main {
  width: 100%;
  margin: 0.8rem auto;
}
.main .login {
  /* width:50%; */
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  font-size: 0.22rem;
  color: #666;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}
@media screen and (min-width: 360px) {
  .main {
    width: 100%;
    margin: 0.5rem auto;
  }
  .login {
    width: 90%;
  }
}
@media screen and (min-width: 640px) {
  .main {
    /* 触发父盒子BFC */
    overflow: hidden;
  }
  .login {
    box-sizing: border-box;
    width: 346px;
    height: 400px;
    float: right;
    right: 20px;
    margin: 50px;
    border: 1px solid #ccc;
    padding: 20px;
  }
  .ms-content {
    padding: 30px 30px;
  }
}

.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #666;
  letter-spacing: 1px;
}
.footer {
  bottom: 0;
  border-top: 1px solid #e6e6e6;
  padding: 30px;
  text-align: center;
  color: #999;
  font-size: 12px;
}
</style>