<template>
  <div class="city-hot">
    <div class="hot-title">热门城市</div>
    <ul class="hot-list">
      <!--<li @click="changeCityName(city.name)" v-for="city of hotCities" class="hot-item" :key="city.id">-->
        <!--{{ city.name }}-->
      <!--</li>-->
      <li  v-for="item of hotCities" class="hot-item" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      props:['hotCities']
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .city-hot
    font-size: .28rem
    .hot-title
      padding:.2rem .3rem
    .hot-list
      background-color: #fff
      position: relative
      overflow: hidden
      &:before
        content:""
        position: absolute
        width: 33.3333%
        height: 100%
        left: 33.3333%
        border-left: 1px solid #ddd
        border-right: 1px solid #ddd
      .hot-item
        line-height: .9rem
        width: 33.3333%
        text-align: center
        float: left
        position: relative
      .hot-item+.hot-item+.hot-item+.hot-item
        border-top: 1px solid #ddd
</style>
