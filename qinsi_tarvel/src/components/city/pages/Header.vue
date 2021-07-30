<template>
  <header>
    <div class="return" @click="returnHome">
      <span class="iconfont icon-jiantou"></span>
    </div>
    <div class="title">
      城市选择
    </div>
  </header>
</template>
<script type="text/ecmascript-6">
    export default {
      methods:{
        returnHome(){
          /*this.$router.push({name:'Home'})*/
          this.$router.push('/')//push/replace/go
        }
      }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  @import "~@/assets/css/common.styl"
  header
    width: 100%
    line-height: .88rem
    background-color: $bgColor
    font-size: .28rem
    color:#ffffff
    display: flex
    .return
      width: .6rem
      text-align: center
      font-size: .36rem
      position: absolute
    .title
      width: 100%
      text-align: center
      font-size: .32rem
</style>
