<template>
  <div class="pay">
     <div v-title>在线支付</div>
     <div class="item">
        <img class="video" src="static/img/ask_questions.png" />
        <div class="item-right">
            <div class="title article">这里有一个视频名字，如果名字比较长可以换一行。</div>
            <span class="sred">￥9.9</span>
        </div>
     </div>
      <div class="seway">
        <span>请选择支付方式</span>
      </div>
      <div class="payways">
        <div class="item">
            <div class="left">
                    <img class="paylogo" src="static/img/alipay.png" />
                    <span>支付宝支付</span>
            </div>
            <img class="selected" src="static/img/selected.png" />
        </div>
         <div class="item">
            <div class="left">
                <img class="paylogo" src="static/img/weChat_payment.png" />
                <span>微信支付</span>
            </div>
            <img class="selected" src="static/img/unselected.png" />
        </div>
     </div>
      <!--start footer -->
      <div class="footer">
          <div class="foot-l">
            <span class="g">待支付</span>
              <span class="r">￥9.9</span>
          </div>
          <router-link class="foot-r" to="/complete">提交订单</router-link>
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
    .order {
        height : 100%;
        padding-bottom : 50px;
    }
    .item {
        display : flex;
        padding : 10px;
        background : #fff;
        align-items  : center;
        margin-top : 10px;
    }
    .item span {
        display : block;
        padding : 10px 0;
    }
    .item .video {
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
    .suborder {
        background : #0cb80a;
    }
    .suborder span {
        color :#fff;
    }
    .payways .item {
        display : flex;
        justify-content: space-between;
        margin : 0;
    }
    .payways .left {
        display : flex;
    }
    .payways .left span {
        margin-left : 10px;
    }
    .payways .paylogo {
        width : 50px;
        height : 50px;
        border : none;
    }
    .selected {
        width : 20px;
        height : 20px;
    }
    .selected:hover {
        cursor: pointer;
    }
    .certain {
        color : #9b9898;
        width : 100%;
        display : flex;
        justify-content: space-between;
        align-items : center;
    }
    .certain span {
        margin-left : 10px;
    }
    .certain .input {
        width : 100px;
        border : none;
        color : #fff;
        text-align: center;
        background : #0cb80a;
        padding : 14px;
    }
    .seway {
        color : #9b9898;
        font-size : 12px;
        padding : 10px;
    }
     .footer {
        width: 100%;
        height: 50px;
        position: absolute;
        display: flex;
        align-items: center;
        bottom: 0;
        z-index: 500;
        background: #fff;
    }
    .foot-l {
        width : 70%;
    }
    .foot-l span {
        margin-left: 10px;
    }
    .g {
        color : #999;
    }
    .r {
        color : #ff5a34;
    }
    .foot-r {
        height : 100%;
        width : 30%;
        display : flex;
        justify-content: center;
        align-items: center;
        background: #0cb80a;
    }
</style>