<template>
  <div class="forgetpwd">
     <div v-title>找回密码</div>
     <form>
        <div class="item">
            <img src="static/img/login_user.png"/>
            <input type="tel" placeholder="手机号" />
        </div>
        <div class="items">
            <div class="check">
                <img src="static/img/registered_massage.png"/>
                <input type="" placeholder="验证码" />
            </div>
            <input class="getcheck" type="submit" value="获取验证码" />
        </div>
         <div class="item">
            <img src="static/img/login_password.png"/>
            <input type="" placeholder="字母加数字，不超过16位" />
        </div>
         <div class="item">
            <img src="static/img/login_password.png"/>
            <input type="" placeholder="再一次确认密码" />
        </div>
<!--
         <div class="reinfo">
            <span>点击注册即同意<span style="color : #0cb80a;">《用户协议》</span></span>
         </div>
-->
         <input class="submit" type="submit" value="确认" />
     </form>
   </div>
</template>
<script>
    
    export default {
        props: [],
        components: {
            
        },
        data() {
            return {
                answers : [{
                    picon : "static/img/person.png",
                    like : "static/img/like_grey.png",
                    askicon : "static/img/question.png",
                    pointicon : "static/img/round_green.png",
                    author : "",
                    question : "这里有一个问题",
                    date : "2016-08-28 14:54:23",
                    answer : "这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，",
                    isStar : false,
                    stars : 122
                },{
                    picon : "static/img/person.png",
                    like : "static/img/like_green.png",
                    askicon : "static/img/question.png",
                    pointicon : "static/img/round_green.png",
                    author : "一只小猪在天上飞",
                    question : "这里有一个问题",
                    date : "2016-08-28 14:54:23",
                    answer : "这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，",
                    isStar : true,
                    stars : 233
                }]
            }
        },
        created() {
           
        },
        methods: {
            
        }
    }
</script>
<style scoped>
    .forgetpwd {
        width : 100%;
        padding : 20px 0;
    }
    form {
        width : 90%;
        margin : 0 auto;
        display : flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .item {
        width: 90%;
        display : flex;
        align-items: center;
        margin : 10px 0;
        background : #fff;
        border-radius: 30px;
        padding : 10px 0;
    }
    .items {
        width: 90%;
        display : flex;
        align-items: center;
        margin : 10px 0;
    }
    .item img {
        margin-left : 10px;
    }
    .item input {
        border : none;
        width : 70%;
        margin-left : 10px;
    }
    .check {
        flex : 3 1 0;
        display : flex;
        border-radius: 30px;
        background : #fff;
        padding : 10px 0 10px 10px;
        margin-right : 10px;
    }
    .items input {
        width : 70%;
    }
    .check input {
        width : 100px;
        border : none;
        margin-left : 10px;
    }
    .getcheck {
        flex : 1 1 0;
        height : 40px;
        color : #0cb80a;
        font-size: 12px;
        border-radius: 30px;
        background : #fff;
        border : none;
    }
    .item img,.items img {
        width : 20px;
        height : 20px;
    }
    .reinfo {
        display : flex;
        justify-content: center;
        font-size : 12px;
        color : #999;
    }
    .submit {
        width : 60%;
        border : none;
        color : #fff;
        line-height : 40px;
        background : #0cb80a;
        border-radius: 30px;
        margin-top : 20px;
    }
    
</style>









