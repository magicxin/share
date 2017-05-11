<template>
  <div class="toast">
      <!--start 淡入淡出 -->
          <transition>
            <div class="toast-com">请先购买</div>
          </transition>
      <!--end 淡入淡出 -->
   </div>
</template>
<script>
</script>
<style scoped>
 /*start 淡入淡出*/
    .toast-com {
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
     /*start 淡入淡出*/
</style>