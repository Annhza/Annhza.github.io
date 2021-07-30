<template>
  <div class="city-sort">
    <div class="sort-title">字母排序</div>
    <ul class="sort-list">
      <!--<li @click="jump(key)" class="sort-item" v-for="(item,key) of cities" :key="key">{{ key }}</li>-->
      <li v-for="(item,key) of cities" :key="key" class="sort-item">{{key}}</li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      props:{
        cities:Object
      }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .city-sort
    font-size: .28rem
    .sort-title
      padding:.2rem .3rem
    .sort-list
      background-color: #fff
      overflow: hidden
      .sort-item
        line-height: .9rem
        width: 16.666%
        text-align: center
        float: left
</style>
