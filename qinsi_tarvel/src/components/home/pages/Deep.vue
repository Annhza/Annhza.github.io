<template>
  <div class="deep">
    <ul class="deep-item">
      <li class="deep-list" v-for="item of deepList"><a href="#">{{item}}</a></li>
    </ul>
    <p class="media">
      <span class="phone">触屏版</span>
      <span>电脑版</span>
    </p>
    <p class="feedback">Qunar京ICP备05021087</p>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          "deepList":["登录","我的订单","最近浏览","关于我们",]
        }
      }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .deep
    font-size: .28rem
    color: #25a4bb;
    .deep-item
      overflow :hidden
      border-bottom : 1px solid #d2dfe2
      .deep-list
        float:left
        padding-left:.4rem
        line-height: .8rem
        height: .8rem
        &>a
          color: #25a4bb;
    .media
      padding: 10px 0 0 0;
      text-align: center;
      .phone
        color: #000
        padding-right: .4rem
    .feedback
      color: #9e9e9e;
      text-align: center;
      padding: .2rem


</style>
