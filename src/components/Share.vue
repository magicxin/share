<template>
  <div class="share">
      <div v-title>SKU0课程</div>
        <div v-if="is_bay">
            <!--
                   <video controls width="100%" poster="" >
                   <source src="http://html5demos.com/assets/dizzy.mp4" type="video/mp4" />
                   </video>
        --><video controls width="100%" poster="" src="static/video/cat.mp4" id="video" ref="myVideo">
        <!--
                   <source v-bind:src="videosrc" type="video/mp4"/>
                  <p>Your browser does not support H.264/MP4.</p>
        -->
              </video>
        </div>
        
     
      <div class="content">
          <div class="tab">
            <div class="tab-item" @click="handler(showclass)">
                <div :class="showclass?'gtext':'text'">课程详情</div>
                <div :class="showclass?'gborder':'border'"></div>
            </div>
            <div class="tab-item" @click="handler(showinfo)">
                <div :class="showinfo?'gtext':'text'">全部问答</div>
                <div :class="showinfo?'gborder':'border'"></div>
            </div>
          </div>
<!--
          <tab class="tab-bar">
              <tab-item :selected="true" @on-item-click="handler" custom-bar-width="50px">课程详情</tab-item>
              <tab-item class="tab-right" @on-item-click="handler">全部问答</tab-item>
          </tab>
-->

<!--
        <div class="tab-bar">
            <div class="tab-left">课程详情</div>
            <div class="tab-right">全部问答</div>
        </div>
-->
        
            <div v-show="showclass" class="class-info">
                <div class="price">
                    <div class="item-left">￥{{tutorial.coursePrice}}</div>
                    <div class="item-right">已有{{tutorial.courseNum}}人报名</div>
                </div>
                <div class="title">课程介绍</div>
                <div class="article" v-html="tutorial.courseDetail"></div>

<!--
                <img class="info-img" v-bind:src="infosrc" />
                <div class="article">我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍 我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
                </div>
-->
            </div>
             <div v-show="showinfo" class="ask-info">
                <div class="ask-title">热门问答</div>
                <div class="item" v-for="item in fiveAnswers">
                  <div class="top">
                    <div class="left">
                        <img v-bind:src="item.picon"/>
                        <span class="author">{{item.name}}</span>
                    </div>
                    <div class="right" @click="isLike(item.num)">
                        <img v-bind:src="item.like"/>
                        <span>{{item.like_count}}</span>
                    </div>
                  </div>
                    <div class="bottom">
                        <div class="question">
                            <div class="left">
                                <img v-bind:src="item.askicon" />
                            </div>
                            <div class="right">
                                <span class="article">{{item.problem}}</span>
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
                                    <span v-show="item.showBtn" class="showmore" @click="showMore(item.num)">查看更多</span>
                                </span>
                                <span v-else="item.showAll" class="answer-show"ref="myArticle">
                                    {{item.answerAll}}
                                    <span class="showmore" @click="showMore(item.num)">收起</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="show-all">
                    <router-link type="button" class="show-all-btn" to="/answer">查看全部</router-link>
                </div>
            </div>
        
      </div>
      
      <!--start footer -->
      <div class="footer">
          <router-link class="tabbar" to="ask">
            <img src="static/img/ask_questions.png" />
              <span>提问</span>
          </router-link>
          <div class="tabbar" @click="showqr">
              <img src="static/img/customer_service.png" />
              <span>客服</span>
          </div>
          
              <div v-if="is_bay===false"  class="tabbtn">
                  <div>
                    <router-link to="/order">立即购买</router-link>
                  </div>
              </div>
                  
              <div v-if="is_bay===true" class="tabbtn"> 
                  <div @click="play">
                    <span>立即观看</span>
                  </div>
              </div>
          
      </div>
      <!--end footer -->
      
      <!-- start 分享 -->
<!--
      <div v-show="show_icons" class="showicons">
          <div class="bottom">
              <div class="share-icons">
                  <div class="share-wechat">
                        <img src="static/img/wechat.png" />
                        <span>微信</span>
                    </div>
                  <div class="share-friends">
                        <img src="static/img/circle_of_friends.png" />
                        <span>朋友圈</span>
                    </div>
              </div>
              <div class="cancel">
                    <input type="button" value="取消" @click="cancel"/>
              </div>
          </div>
      </div>
-->
      <!--end 分享 -->
      
      <!-- start qrcode-->
      <div v-show="qrcode" class="qrcode">
          <div class="box">
                <img src="static/img/qr_code.png" />
                <span>如果您有任何疑问，可扫下方二维码，调价我们的公众号并提出您的宝贵意见！</span>
            </div>
          <img class="close" src="static/img/close.png" @click="cancelqr"/>
      </div>
      <!--end qrcode -->
      
      <!--start 淡入淡出 -->
<!--
<div id="toast">
  <transition>
    <div v-show="toast"  class="toast">请先购买</div>
  </transition>
</div>
-->
      <toast v-show="toast"></toast>
      <!--end 淡入淡出 -->
  </div>
</template>

<script>
    import Global from './Global.vue'
    import Vue from 'vue'
    //console.log(Global)
    export default {
        props: [],
        components: {

        },
        data() {
            return {
                showclass: true,
                showinfo: false,
                show_icons: false,
                qrcode: false,
                is_bay: false,
                is_login : false,
                tutorial : "",
                fiveAnswers : "",
                videosrc: "",
                infosrc: "",
                toast : "",
                fiveAnswers: ""
            }
        },
        mounted(){
            let that = this;
            console.log(window.location.href)
            console.log(window.location.search)
         
               //课程信息
         this.axios.post('http://192.168.51.86:8080/sku/Course', {})
          .then(function (response) {
             Vue.set(that, "tutorial" , response.data.data.list);
             console.log(that.tutorial)
//            that.tutorial = response.data.data.list;
            //问答
                 that.axios.post('http://192.168.51.86:8080/sku/courseAll', {"courseId":response.data.data.list.id})
                  .then(function (res) {
                   let answerList = res.data.data.answerList;
                   for(var i=0; i<answerList.length; i++){
                       answerList[i].picon =  "static/img/person.png";
                       answerList[i].like= "static/img/like_grey.png";
                       answerList[i].askicon= "static/img/question.png";
                       answerList[i].pointicon="static/img/round_green.png";
                       answerList[i].num = i;
                       answerList[i].showCut = true;
                       answerList[i].showAll = "";
                       answerList[i].showBtn = true;
                   }
                     Vue.set(that, "fiveAnswers" , answerList); 
                     //显示隐藏全部答案
                     let width = (window.innerWidth-20)*10/11;

                        for(var i=0; i < that.fiveAnswers.length; i++){
                            let answer = [];
                            answer[i] = that.fiveAnswers[i].answer.slice();
                            let obj = format(that.fiveAnswers[i].answer,width);
                            that.fiveAnswers[i].answer = obj.showStr;
//                            console.log(obj.showStr)
            //                console.log(answer)
            //                console.log(this.answers[i].answer)
                            that.fiveAnswers[i].answerAll = answer[i];
                            if(obj.showStr.length > answer[i].length){
                                that.fiveAnswers[i].showBtn = false;
                                that.fiveAnswers[i].answer = that.fiveAnswers[i].answerAll;
                            }
                        }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              })
              .catch(function (error) {
                console.log(error);
              });
        
            
//             console.log(format(this.answers[0].answer,width)[1])
            
            //设置点击，同时避免一次执行内多次点击
//            var alarm = {
//              remind: function(aMessage) {
//                alert(aMessage);
//                this.timeoutID = undefined;
//              },
//
//              setup: function() {
//                if (typeof this.timeoutID === 'number') {
//                  this.cancel();
//                }
//
//                this.timeoutID = window.setTimeout(function(msg) {
//                  this.remind(msg);
//                }.bind(this), 1000, 'Wake up!');
//              },
//
//              cancel: function() {
//                window.clearTimeout(this.timeoutID);
//                this.timeoutID = undefined;
//              }
//            };
//            window.onclick = function() { alarm.setup(); };
        },
        created() {
            let that = this;
//            this.isbay = true;
            if(document.body.scrollHeight==window.innerHeight)
            console.log(document.body.scrollHeight)
            console.log(document.body.clientHeight)
        },
        methods: {
            handler(data) {
                if (!data) {
                    this.showclass = !this.showclass;
                    this.showinfo = !this.showinfo;
                }
            },
//            showbottom() {
//                this.show_icons = true;
//            },
            showqr() {
                this.qrcode = true;
            },
            
//            cancel() {
//                this.show_icons = false;
//            },
            //关闭二维码
            cancelqr() {
                this.qrcode = false;
            },
            //提示购买
            cimg() {
                var that = this;
                
                this.toast = 'toast';
                setTimeout(function(){
                    that.toast = "";
                },2000);
            },
            //按钮播放
            play(){
                this.$refs.myVideo.play();
            },
            //问答显示全部
            showMore(i){
                
                this.fiveAnswers[i].showCut = !this.fiveAnswers[i].showCut;
                this.fiveAnswers[i].showAll = !this.fiveAnswers[i].showAll;
                console.log(this.fiveAnswers[i].answerAll)
            },
            //点赞
            isLike(i){
                var that = this;
                that.axios.post('http://192.168.51.86:8080/sku/courseLike', {"answerId":that.tutorial.id,"openId":"1"})
                  .then(function (res) {
//                    console.log(that.fiveAnswers[i])
                        that.fiveAnswers[i].like= that.fiveAnswers[i].like=="static/img/like_grey.png"?"static/img/like_green.png":"static/img/like_grey.png";
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .content {
        width: 100%;
    }
    
    .video {
        width: 100%;
        cursor: pointer;
    }
    
    .tab {
        display: flex;
        padding: 10px 0;
        color: #999;
        font-weight: 500;
    }
    
    .tab-item {
        flex: 1 1 0;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    
    .gtext {
        color: #0cb80a;
    }
    
    .text {
        color: #999;
    }
    
    .gborder {
        width: 30px;
        padding: 0 0 10px 0;
        border-bottom: 4px solid #0cb80a;
    }
    
    .border {
        width: 30px;
        padding: 0 0 10px 0;
        border-bottom: 4px solid #f5f5f5;
    }
    
    .price {
        width: calc(100% - 50px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        margin: 10px auto 0 auto;
        padding: 10px 15px;
        border-radius: 4px;
    }
    
    .price .item-left {
        font-size: 28px;
        color: #ff5a34;
    }
    
    .price .item-right {
        font-size: 12px;
        color: #999;
    }
    
    .class-info {
        width: calc(100% - 20px);
        text-align: justify;
        color: #666;
        margin: 0 auto;
        padding-bottom: 50px;
    }
    
    .class-info .title {
        margin: 10px 0 10px -10px;
        padding-left: 10px;
        line-height: 40px;
        color: #fff;
        background: url("../../static/img/class_introduction.png") no-repeat;
        background-size: auto 100%;
    }
    
    .info-img {
        width: 100%;
    }
    
    .footer {
        width: 100%;
        height: 50px;
        position: absolute;
        display: flex;
        bottom: 0;
        z-index: 500;
        background: #f5f5f5;
    }
    
    .tabbar {
        width: 25%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        color: #999;
        font-size: 12px;
    }
    
    .tabbar img {
        width: 20px;
        height: 20px;
        margin-bottom: 4px;
    }
    
    .tabbtn {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: #0cb80a;
    }
    
    .show-all {
        display: flex;
        width: calc(100% - 40px);
        margin: 0 auto;
        padding: 10px 0 50px 0;
        background: #f5f5f5;
    }
    
    .show-all .show-all-btn {
        display: flex;
        justify-content: center;
        flex: 1 1 0;
        padding: 10px;
        color: #0cb80a;
        border: 1px solid #0cb80a;
        border-radius: 30px;
    }
    
    .ask-title {
        margin-top: 10px;
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
        margin-left: 8px;
    }
    
    .date {
        font-size: 12px;
        color: #999;
        padding: 4px 0;
        margin-left: 28px;
    }
    /*下部绝对定位栏*/
    
    .showicons {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: flex-end;
        bottom: 0;
        z-index: 600;
        background-color: rgba(0, 0, 0, 0.4);
    }
    
    .bottom {
        width: 100%;
        display: flex;
        flex-flow: column;
        background: #fff;
    }
    
    .share-icons {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #f5f5f5;
    }
    
    .share-icons img {
        width: 64px;
    }
    
    .share-wechat,
    .share-friends {
        display: flex;
        flex-flow: column;
        align-items: center;
        margin-left: 20px;
    }
    
    .cancel {
        width: 100%;
        padding: 10px 0 10px 0;
    }
    
    .cancel input {
        width: 100%;
        border: none;
        background: none;
        color: #999;
        margin: 0 auto;
    }
    
    /*下部绝对定位栏*/
    /*二维码*/
    .qrcode {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        bottom: 0;
        z-index: 600;
        background-color: rgba(0, 0, 0, 0.4);
    }
    
    .box {
        width: 60%;
        max-width: 200px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        background: #fff;
    }
    
    .box img {
        width: 80%;
        margin: 20px;
    }
    
    .box span {
        display: flex;
        color: #3f4143;
        padding: 0 20px 20px 20px;
        text-align: justify;
    }
    
    .close {
        margin-top: 10px;
        width: 60px;
    }
    
    /*start 淡入淡出*/
/*
    .toast {
        display : flex;
        width : 100px;
        height : 100px;
        color : #fff;
        justify-content: center;
        align-items: center;
        position : absolute;
        top : calc(50% - 50px);
        left : calc(50% - 50px);
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 4px;
    }
*/
     /*start 淡入淡出*/
    
   /*start 查看更多*/
    .showmore {
        color:#0cb80a;
        position:absolute;
        bottom:0;
        right:0;
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
    /*end 查看更多*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</style>