<template>
  <header>
    <div class="return">
      <span class="iconfont icon-jiantou"></span>
    </div>
    <div class="search">
      <span class="iconfont icon-sousuoxiangqing"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="next">
        {{cityName}}
        <span class="iconfont icon-sanjiaoxing"></span>
      </div>
    </router-link>
  </header>
</template>
<script type="text/ecmascript-6">
    import { mapState } from 'vuex'
    export default {
      computed:{
          ...mapState(['cityName'])
      }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped> //scoped 只作用于当前组件
  @import "../../../assets/css/common.styl"
  header
    width :100%
    height :.88rem
    background-color :$bgColor
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
    a
      color: #fff
      .next
        padding:0 .2rem

</style>
