<template>
  <div class="login">
      <div class="fixed"></div>
      <div class="loginConter">
          <div class="loginConter-top" >
                <div class="loginConter-top-conter">
                    <h1>勿等贷</h1>
                    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
                        <el-form-item class="login-name" label="账号" prop="Name">
                            <el-input type="text" v-model="ruleForm2.Name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item class="loginConter-button">
                            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="login-edit"><router-link to="/edit">忘记密码</router-link></div>
          </div>
           
          <div class="loginConter-bottom"></div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        Name: "",
        password: ""
      },
      rules2: {
        password: [{ required: true, validator: validatePass }],
        Name: [{ required: true, message: "请输入账户" }]
      },
      Name: "",
      password: ""
    };
  },
  methods: {
    submitForm(ruleForm2) {
      var that = this;
      this.$refs[ruleForm2].validate(valid => {
        if (valid) {
          that.$http
            .get("http://192.168.2.178:53960/api/Admin", {
              params: {
                Password: that.ruleForm2.password,
                Name: that.ruleForm2.Name
              }
            })
            .then(
              data => {
                var check = data.body.Status;
                if (check == 0) {
                  that.$alert("登录成功", "提示信息");
                  setTimeout(`location.href="#/index"`, 3000);
                } else {
                  that.$alert(
                    "登陆失败，" + data.body.Msg,
                    "提示信息"
                  );
                }
              },
              err => {
                console.log(err);
              }
            );
        } else {
         that.$alert(
                    "用户名和密码不能为空",
                    "提示信息"
                  );
        }
      });
    }
  }
};
</script>

<style scoped>
.demo-ruleForm {
  padding: 0 20px;
  border: 2px solid #d2d3d7;
  border-radius: 6px;
  background-color: #e5e6ea;
  margin-top: 64px;
}
.fixed {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: url("../../../static/image/login.png") no-repeat fixed 0 0;
  background-size: cover;
  z-index: -9;
}
.login {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login .loginConter {
  width: 573px;
  height: 600px;
  position: relative;
}
.login .loginConter .loginConter-top {
  width: 541px;
  height: 565px;
  margin: 0 auto;
  padding: 40px 52px;
  background-color: #ebeeea;
}
.login .loginConter .loginConter-button {
  width: 100%;
  height: 102px;
  margin: 0 auto;
  position: absolute;
  bottom: 133px;
  left: 0px;
}
.login .loginConter .loginConter-button > div {
  width: 100%;
  height: 100%;
}
.login .loginConter .loginConter-button button {
  width: 100%;
  height: 100%;
  background-color: #ea8b0f;
  border: none;
  border-radius: 4px;
  font-size: 29px;
  color: #ebeeea;
  cursor: pointer;
}
.loginConter .login-name {
  border-bottom: 2px solid #d2d3d7;
}
.login .loginConter label {
  display: inline-block;
  width: 20%;
  color: #9d9da0;
  font-size: 21px;
  line-height: 40px;
}
.login .loginConter .el-input {
  display: inline-block;
  width: 75%;
  border: none;
}
.loginConter-top-conter h1 {
  font-size: 37px;
  color: #616161;
  font-family: AdobeSongStd-Light;
  font-weight: normal;
}
.loginConter-top-conter {
  text-align: center;
}
.loginConter-top-conter > div {
  background-color: #e5e6ea;
  padding: 0 10px;
  border: 2px solid #d2d3d7;
  border-radius: 6px;
  margin-top: 60px;
}
.loginConter-top-conter > div > div {
  border-bottom: 2px solid #d2d3d7;
  padding: 10px 0;
}
.loginConter-top-conter > div > div:last-child {
  border: none;
}
.loginConter-bottom {
  width: 541px;
  height: 20px;
  margin: 0 auto;

  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #ea8b0f;
}
.login .login-edit {
  position: absolute;
  bottom: 63px;
  right: 56px;
  color: #afafb2;
  font-size: 21px;
}
.login .login-edit a {
  color: #afafb2;
  font-size: 21px;
}
</style>
