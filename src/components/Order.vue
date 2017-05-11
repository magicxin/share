<template>
  <div class="order">
     <div v-title>确认订单</div>
     <div class="item">
        <img src="static/img/ask_questions.png" />
        <div class="item-right">
            <div class="title article">这里有一个视频名字，如果名字比较长可以换一行。</div>
            <span class="sred">￥9.9</span>
        </div>
     </div>
     <div class="waitpay">
        <span>待支付</span><span class="sred">￥9.9</span>
     </div>
     <!--start footer -->
      <div class="footer">
          <router-link class="tabbar" to="/pay">提交订单</router-link>
      </div>
      <!--end footer -->
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
    .item {
        display : flex;
        padding : 10px;
        background : #fff;
        align-items  : center;
        margin-top : 10px;
        border-bottom : 1px solid #d9d8d8;
    }
    .item span {
        display : block;
        padding : 10px 0;
    }
    .item img {
        width : 80px;
        height : 80px;
        border : 1px solid #d9d8d8;
        margin-right : 10px;
    }
    
    .item-right {
        flex : 3 1 0;
    }
    .sred {
        color : #ff5a34;
    }
    .waitpay {
        color : #999;
        padding : 10px;
        background : #fff;
    }
    .suborder {
        background : #0cb80a;
    }
    .suborder span {
        color :#fff;
    }
     .footer {
        width: 100%;
        height: 50px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        z-index: 500;
        background: #0cb80a;
    }
    
</style>