<template>
  <div class="login">
     <div v-title>登录</div>
     <div class="hover">
        <div class="logo">
            <img src="../../static/img/logo.png" />
        </div>
        <form @submit.prevent="submit">
            <div class="username">
                <img src="../../static/img/login_user.png"/>
                <input type="text"  placeholder="手机号" v-model="user.phone"/> 
            </div>
            <div class="password">
                <img src="../../static/img/login_password.png"/>
                <input type="tel" placeholder="密码" v-model="user.pwd"/>
            </div>
            <div class="btn">
                <input type="submit" value="登录"/>
            </div>
            <div class="a-link">
                <router-link to="register">注册</router-link><router-link to="forgetpwd">忘记密码</router-link>
            </div>
        </form>
     </div>
   </div>
</template>
<script>
    
    export default {
        props: [],
        components: {
            
        },
        data() {
            return {
                user : {
                    phone: "",
                    pwd : ""
                }
            }
        },
        created() {
           
        },
        methods: {
            submit: function() {
              var formData = JSON.stringify(this.user); // 表单数据

              this.$http.post('http://192.168.51.86:8080/sku/MemberLogins', formData).then((response) => {
                  // success callback
                  console.log(response)
              }, (response) => {
                  // error callback
                  console.log("error")
              });
            }
        }
    }
</script>
<style scoped>
    .login {
        height : 100%;
        background : url("../../static/img/login_bg.jpg") no-repeat;
        background-size : 100% auto;
    }
    .hover {
        height : 100%;
        display : flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .logo {
        display : flex;
        justify-content: center;
    }
    .logo img {
        width : 50%;
        height : 50%;
    }
    .username,.password {
        display : flex;
        align-items: center;
        margin-top : 10px;
        background : #fff;
        border-radius: 30px;
        padding : 10px 10px;
    }
    .username input,.password input {
        width : 180px;
        border : none;
    }
     input::placeholder {
        text-align: center;
    }
    .username img,.password img{
        width : 20px;
    }
    .btn input{
        width : 240px;
        margin-top : 20px;
        color : #fff;
        height : 40px;
        background : #0cb80a;
        border : none;
        border-radius: 30px;
    }
    .a-link {
        color : #fff;
        display : flex;
        font-size : 12px;
        justify-content: space-between;
        padding : 10px 10px;
    }
    a:visited,a:link,a:hover,a:active {
        text-decoration: none;
        color : #fff;
    }
    
    
    
</style>
























