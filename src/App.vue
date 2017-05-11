<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app'
    }

</script>

<style>
    html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    
    html,body {
        height: 100%;
        font-family: "微软雅黑";
        margin: 0;
        overflow-y: scroll;
        background: #f5f5f5;
        color: #333;
    }
    
    * {
        margin: 0;
        padding: 0;
    }
    
    a img {
        border: 0;
    }
    
    a {
        text-decoration: none;
    }
    
    a:link,a:visited {
        color : #fff;
    }
    
    .article {
        line-height: 24px;
    }
    
    #app {
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

</style>
