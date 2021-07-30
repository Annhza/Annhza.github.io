<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="banner">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      props:{
        swiperList:{
          type:Array,
          default:[]
        }
      },
      data() {
        return {
          swiperOption: {
            pagination: {
              el: '.swiper-pagination',
              // type : 'progressbar',
              // type: 'fraction',
            },
            loop:true,
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false
            }
          },
          /*"swiperList":[
            {
              "id":"01",
              "imgUrl":require("@/assets/img/swipers/swiper01.jpg")
            },
            {
              "id":"02",
              "imgUrl":require("@/assets/img/swipers/swiper02.jpg")
            },
            {
              "id":"03",
              "imgUrl":require("@/assets/img/swipers/swiper03.jpg")
            }, {
              "id":"04",
              "imgUrl":require("@/assets/img/swipers/swiper04.jpg")
            }
            ]*/
          }
        }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  @import "../../../assets/css/common.styl"
  .swiper
    width: 100%
    height: 100%
/*    background-color: #ccc
    padding-bottom: 37.087%*/
    img
      width: 100%
      /*height:100%*/
/*    .swiper-container
      !*--swiper-theme-color: #ff6600;*!
      --swiper-pagination-color: #00ff33;!* 两种都可以 *!*/
  >>> .swiper-pagination-bullet
    width: .12rem
    height: .12rem
    background-color: #fff
    opacity: 0.2
  >>> .swiper-pagination-bullet-active /* 样式穿透 */
    opacity: 1
    background: #3b5aff
</style>
