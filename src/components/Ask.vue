<template>
  <div class="ask">
     <div v-title>我的提问</div>
     <div class="ask-title">我的问答</div>
     <div class="item" v-for="item in answers">
<!--
        <div class="top">
            <div class="left">
                <img v-bind:src="item.picon" />
                <span class="author"></span>
            </div>
            <div class="right">
                <img v-bind:src="item.like" />
                <span></span>
            </div>
        </div>
-->
        <div class="bottom">
            <div class="question">
                <div class="left">
                    <img v-bind:src="item.askicon" />
                </div>
                <div class="right">
                    <span class="article">{{item.question}}</span>
                </div>
            </div>
            <div class="date">{{item.date}}</div>
            <div class="answers">
                <div class="left">
                    <img v-bind:src="item.pointicon" />
                </div>
                <div class="right">
                    <span v-if="item.showCut" class="answer-hide"ref="myArticle">
                        {{item.answer}}
                        <span v-show="item.showbtn" class="showmore" @click="showMore(item.num)">查看更多</span>
                    </span>
                    <span v-if="item.showAll" class="answer-show"ref="myArticle">
                        {{item.answerAll}}
                        <span class="showmore" @click="showMore(item.num)">收起</span>
                    </span>
                </div>
            </div>
        </div>
     </div>
      <div class="msg">
        <div class="top">
            <span class="to-ask">我要提问</span>
            <span class="nums">0/100</span>
        </div>
        <div class="bottom">
            <div class="in">
                <div class="back">
                <input type="text" placeholder="请写下你的问题，100字以内"/>
                </div>
            </div>
            <router-link class="sub" to="/login">发布</router-link>
        </div>
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
                
                answers: [{
                        picon: "static/img/person.png",
                        like: "static/img/like_grey.png",
                        askicon: "static/img/question.png",
                        pointicon: "static/img/round_green.png",
                        author: "",
                        question: "这里有一个问题",
                        date: "2016-08-28 14:54:23",
                        answer: "这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的按时付款了；水电费快速登录看过了；的孤苦伶仃；个看到啦；刚开始的了；个看到啦；三个快乐；都看过了；上课搞定啦；看赏个脸；是的空格",
                        answerAll : "",
                        isStar: false,
                        stars: 122,
                        num : 0,
                        showCut : true,
                        showAll : "",
                        showbtn : true
                    }, {
                        picon: "static/img/person.png",
                        like: "static/img/like_green.png",
                        askicon: "static/img/question.png",
                        pointicon: "static/img/round_green.png",
                        author: "一只小猪在天上飞",
                        question: "这里有一个问题",
                        date: "2016-08-28 14:54:23",
                        answer: "这里是导师，这里是导师的回答，",
                        answerAll : "",
                        isStar: true,
                        stars: 233,
                        num : 1,
                        showCut : true,
                        showAll : "",
                        showbtn : true
                    },
                    {
                        picon: "static/img/person.png",
                        like: "static/img/like_green.png",
                        askicon: "static/img/question.png",
                        pointicon: "static/img/round_green.png",
                        author: "一只小猪在天上飞",
                        question: "这里有一个问题",
                        date: "2016-08-28 14:54:23",
                        answer: "这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，",
                        answerAll : "",
                        isStar: true,
                        stars: 233,
                        num : 2,
                        showCut : true,
                        showAll : "",
                        showbtn : true
                    }
                ]
            }
        },
         mounted () {
            var that = this;
            let width = (window.innerWidth-20)*10/11;
            
            for(var i=0; i < 3; i++){
                let answer = [];
                answer[i] = this.answers[i].answer.slice();
                let obj = format(this.answers[i].answer,width);
                this.answers[i].answer = obj.showStr;
//                console.log(answer)
//                console.log(this.answers[i].answer)
                this.answers[i].answerAll = answer[i];
                if(obj.showStr.length > answer[i].length){
                    this.answers[i].showbtn = false;
                    this.answers[i].answer = answer[i];
                }
            }
//             console.log(format(this.answers[0].answer,width)[1])
             
        },
        created() {
            //console.log(FormValidator)
        },
        methods: {
            showMore(i){
                this.answers[i].showCut = !this.answers[i].showCut;
                this.answers[i].showAll = !this.answers[i].showAll;
            }
        }
    }

</script>
<style scoped>
    .ask {
        padding : 10px 0 90px 0;
    }
    
    .ask-title {
        padding-left: 10px;
        border-left: 4px solid #0cb80a;
        background: #f5f5f5;
    }
    
    .item {
        padding: 10px;
        background: #fff;
        margin-top: 10px;
        text-align: justify;
    }
    
    .answers {
        display: flex;
        font-size: 12px;
        padding: 4px 0;
    }
    
    .left {
        flex: 1 1 0;
        min-width: 20px;
    }
    .answer-hide {
        display : block;
        width : 100%;
        height : 28px;
        position: relative;
    }
      .answer-show {
        display : block;
        width : 100%;
        position: relative;
    }
    .right {
        flex: 10 1 0;
    }
    
    .question {
        display: flex;
        align-items: flex-start;
        padding: 4px 0;
    }
    
    .question img {
        width: 20px;
        height: 20px;
    }
    
    .answers img {
        margin-left: 5px;
        width: 10px;
        height: 10px;
    }
    
    .msg {
        width: calc(100% - 20px);
        display: flex;
        flex-flow: column;
        position: absolute;
        bottom: 0;
        z-index: 500;
        background: #fff;
        padding: 10px 10px;
    }
    
    .msg .top {
        margin: 0 0 10px -10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .msg .top .nums {
        display: flex;
        color: #999;
    }
    
    .to-ask {
        color: #666;
        padding-left: 10px;
        font-weight: bolder;
        border-left: 4px solid #0cb80a;
    }
    .date {
            font-size : 12px;
            color : #999;
            padding : 4px 0;
            margin-left : 28px;
        }
    .msg .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .msg .bottom .in {
        display: flex;
        justify-content: center;
        flex: 4 1 0;
        height: 40px;
    }
    
    .msg .bottom .back {
        display: flex;
        justify-content: center;
        width: 90%;
        background: #e9e9e9;
        border-radius: 30px;
    }
    
    .msg .bottom input {
        width: 90%;
        border: none;
        background: #e9e9e9;
    }
    
    .msg .bottom .sub {
        display: flex;
        padding : 10px 0;
        justify-content: center;
        color: #fff;
        flex: 1 1 0;
        border-radius: 30px;
        background: #0cb80a;
    }
    
    .showmore {
        color:#0cb80a;
        position:absolute;
        bottom:0;
        right:0;
    }
</style>
