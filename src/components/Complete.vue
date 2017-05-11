<template>
  <div class="complete">
     <div v-title>支付成功</div>
     <div class="success">
        <img src="static/img/buy_finish.png" />
        <span class="sblack">支付成功</span>
        <span class="sgrey">您已成功支付$9.9</span>
        <span class="sgrey pad">{{seconds}}秒后返回</span>
        <input type="button" @click="goback" value="立即返回"/>
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
                seconds : 4,
                timeout : '',
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
            var that = this;
            //3秒返回
            for(let i=0; i<4; i++){
                that.timeout = setTimeout(function(){
                   that.seconds -= 1; 
                    if(that.seconds === 0){
                    that.$router.go(-3)
                }
                },1000*i);
                
            }
        },
        methods: {
            goback() {
               this.$router.go(-3)
                clearTimeout(this.timeout);
            }
        }
    }
</script>
<style scoped>
    .success {
        display : flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        padding : 40px 0;
        background : #fff;
    }
    .success img{
        width : 60px;
        height : 60px;
        padding : 10px;
    }
    .sblack {
        font-weight: bolder;
        padding : 10px;
    }
    .sgrey {
        color : #999;
    }
    .pad {
        padding-top : 40px;
    }
    input {
        width : 100px;
        border : 1px solid #0cb80a;
        background : none;
        color : #0cb80a;
        line-height : 40px;
        border-radius: 30px;
        margin-top : 10px;
    }
</style>