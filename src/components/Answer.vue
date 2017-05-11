<template>
  <div class="answer">
     <div v-title>全部问答</div>
     <div class="tab">
            <div class="tab-item" @click="handler(showclass)">
                <div :class="showclass?'gtext':'text'">最新发布</div>
                <div :class="showclass?'gborder':'border'"></div>
            </div>
            <div class="tab-item" @click="handler(showinfo)">
                <div :class="showinfo?'gtext':'text'">最热问答</div>
                <div :class="showinfo?'gborder':'border'"></div>
            </div>
          </div>
     <div class="item" v-for="item in answers">
        <div class="top">
            <div class="left">
                <img v-bind:src="item.picon" />
                <span class="author">{{item.author}}</span>
            </div>
            <div class="right">
                <img v-bind:src="item.like" />
                <span>{{item.stars}}</span>
            </div>
        </div>
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
                    <span>{{item.answer}}</span>
                </div>
            </div>
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
                showclass: true,
                showinfo: false,
                answers: [{
                    picon: "static/img/person.png",
                    like: "static/img/like_grey.png",
                    askicon: "static/img/question.png",
                    pointicon: "static/img/round_green.png",
                    author: "",
                    question: "这里有一个问题",
                    date: "2016-08-28 14:54:23",
                    answer: "这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，",
                    isStar: false,
                    stars: 122
                }, {
                    picon: "static/img/person.png",
                    like: "static/img/like_green.png",
                    askicon: "static/img/question.png",
                    pointicon: "static/img/round_green.png",
                    author: "一只小猪在天上飞",
                    question: "这里有一个问题",
                    date: "2016-08-28 14:54:23",
                    answer: "这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，这里是导师的回答，",
                    isStar: true,
                    stars: 233
                }]
            }
        },
        created() {
            this.answers[0].author = "magic"
        },
        methods: {
            handler(data) {
                if(!data){
                    this.showclass = !this.showclass;
                    this.showinfo = !this.showinfo;
                }
            },
        }
    }

</script>
<style scoped>
    .tab {
        display : flex;
        padding : 10px 0;
        color : #999;
        font-weight: 500;
    }
    .tab-item {
        flex : 1 1 0;
        display : flex;
        flex-flow : column;
        justify-content: center;
        align-items: center;
    }
    .gtext {
        color : #0cb80a;
    }
    .text {
        color : #999;
    }
    .gborder {
         width : 30px;
         padding :0 0 10px 0;
         border-bottom : 4px solid #0cb80a;
    }
    .border {
        width : 30px;
        padding :0 0 10px 0;
        border-bottom : 4px solid #f5f5f5;
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
    
    .question {
        display: flex;
        align-items: flex-start;
        padding: 10px 0 0 0;
    }
    
    .answers .left,
    .question .left {
        flex: 1 1 0;
        min-width: 20px;
    }
    
    .answers .right,
    .question .right {
        flex: 10 1 0;
    }
    
    .question img,
    .top img {
        width: 20px;
        height: 20px;
    }
    
    .answers img {
        margin-left: 5px;
        width: 10px;
        height: 10px;
    }
    
    .top {
        display: flex;
        padding-bottom: 10px;
        justify-content: space-between;
        border-bottom: 2px solid #f5f5f5;
    }
    
    .top .left,
    .top .right {
        display: flex;
        align-items: center;
    }
    
    .top span {
        font-size: 12px;
        line-height : 20px;
        margin-left: 8px;
    }
    .date {
            font-size : 12px;
            line-height : 20px;
            color : #b4b4b4;
            padding : 4px 0;
            margin-left : 28px;
        }
    /*
     .item {
            padding : 10px;
            background : #fff;
            margin-top : 10px;
            text-align: justify;
        }
        .top {
            display : flex;
            padding-bottom : 10px;
            justify-content: space-between;
            border-bottom : 2px solid #f5f5f5; 
        }
        .top img,.question img {
            width : 20px;
            height : 20px;
        }
        .top .left,.top .right{
            display : flex;
            align-items: center;
        }
        .top span {
            font-size : 12px;
            margin-left : 8px;
        }
        .bottom {
            padding : 10px 0;
        }
        .question {
            display : flex;
            align-items: flex-start;
            padding : 4px 0;
        }
        .question span {
            margin-left : 8px;
        }
        .date {
            font-size : 12px;
            color : #b4b4b4;
            padding : 4px 0;
            margin-left : 28px;
        }
        .answers {
            display : flex;
            font-size : 12px;
            padding : 4px 0;
        }
        .answers img {
            width : 10px;
            height : 10px;
            margin-top : 4px;
        }
        .answers span {
            margin-left : 18px;
        }
*/

</style>
