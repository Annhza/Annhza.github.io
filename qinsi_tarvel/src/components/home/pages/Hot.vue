<template>
  <div class="hot">
    <div class="hot-title">
      <div class="hot-title-left">
        <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单"> 本周热门榜单
      </div>
      <div class="hot-title-right">
        全部榜单<span class="iconfont icon-arrow-right"></span>
      </div>
    </div>
    <div class="hot-list">
      <li class="hot-item" v-for="hot of hotList" :key="hot.id">
        <!--<img @click="toDetails(hot.id)" :src="hot.imgUrl" alt="banner">-->
        <router-link :to="{name:'Details',params:{id:hot.id}}"><img :src="hot.imgUrl" alt="banner"></router-link>
        <p class="hot-item-title">{{hot.title}}</p>
        <p class="hot-price"><span>￥{{hot.price}}</span>起</p>
      </li>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      props:{
        hotList:{
          type:Array,
          default:[]
        }
      },
      data(){
        return{
         /* "hotList":[
            {
              "id":"01",
              "imgUrl":require('@/assets/img/hot/hot01.jpg'),
              "title":"合肥海洋世界",
              "price":"155.0"
            }, {
              "id":"02",
              "imgUrl":require('@/assets/img/hot/hot02.jpg'),
              "title":"合肥融创乐园",
              "price":"10.0"
            }, {
              "id":"03",
              "imgUrl":require('@/assets/img/hot/hot03.jpg'),
              "title":"合肥融创水世界",
              "price":"99.0"
            }, {
              "id":"04",
              "imgUrl":require('@/assets/img/hot/hot04.jpg'),
              "title":"阳光海岸水世界",
              "price":"118.0"
            }, {
              "id":"05",
              "imgUrl":require('@/assets/img/hot/hot05.jpg'),
              "title":"深业半汤御泉庄温泉",
              "price":"108.0"
            }, {
              "id":"06",
              "imgUrl":require('@/assets/img/hot/hot06.jpg'),
              "title":"三河古镇",
              "price":"45.0"
            }, {
              "id":"07",
              "imgUrl":require('@/assets/img/hot/hot07.jpg'),
              "title":"徽园",
              "price":"20.0"
            }, {
              "id":"08",
              "imgUrl":require('@/assets/img/hot/hot08.jpg'),
              "title":"李鸿章故居",
              "price":"1.4"
            }, {
              "id":"09",
              "imgUrl":require('@/assets/img/hot/hot09.jpg'),
              "title":"姥山岛",
              "price":"50.0"
            }, {
              "id":"10",
              "imgUrl":require('@/assets/img/hot/hot10.jpg'),
              "title":"合肥融创文化旅游城",
              "price":"10.0"
            },
          ]*/
        }
      },
/*      methods:{
        toDetails(data){
          this.$router.push({
            name:'Details',
            params:{
              id:data,
            },
            query:{
              newhotList:JSON.stringify(this.hotList),
            }
          })
        }
      },*/
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  @import "~@/assets/css/common.styl"
  .hot
    border-top :.2rem solid #ffeaec
    font-size :.24rem
    .hot-title
      padding :.2rem 0
      overflow :hidden
      .hot-title-left
        float: left
        font-size :.30rem
        img
          width: .3rem
          height: .3rem
      .hot-title-right
        float: right
        color: #616161
    .hot-list
      padding: .06rem .2rem .2rem .2rem;
      overflow-x: scroll;
      overflow-y: hidden
      white-space: nowrap;
      .hot-item
        text-align: center
        width:2rem
        display: inline-block
        margin-right: .13rem
        position: relative
        &:nth-child(1):before
          $imgTop('http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png')
        &:nth-child(2):before
          $imgTop('http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png')
        &:nth-child(3):before
          $imgTop('http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png')
        &:last-child
          margin-right: 0
        img
          width:2rem
          height:2rem
        .hot-item-title
          margin-top: .12rem;
          font-size: .24rem;
          line-height: .32rem;
          text-overflow: ellipsis
          white-space: nowrap
          overflow: hidden
         .hot-price
            color: #616161;
            font-size: .24rem;
            line-height: .36rem
            span
              color: #ff8300;

</style>
