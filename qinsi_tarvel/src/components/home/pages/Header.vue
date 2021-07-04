<template>
  <header>
    <div class="return">
      <span class="iconfont icon-jiantou"></span>
    </div>
    <div class="search">
      <span class="iconfont icon-sousuoxiangqing"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="next">
      西安<span class="iconfont icon-sanjiaoxing"></span>
    </div>
  </header>
</template>
<script type="text/ecmascript-6">
    export default {}
</script>
<style lang="stylus" rel="text/stylus" scoped> //scoped 只作用于当前组件
  header
    width :100%
    height :.88rem
    background-color :#00afc7
    font-size: .28rem
    color :#ffffff
    display :flex
    line-height: .88rem
    .return
      width: .6rem
      text-align :center
      font-size :.36rem

    .search
      flex :1
      background-color :#ffffff
      height: .6rem
      margin-top: .14rem
      border-radius :.1rem
      color : #bec9cc
      line-height :.6rem
      padding:0 .2rem

    .next
      padding:0 .2rem

</style>
