<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,key) of page" :key="key">
        <li class="icons-item" v-for="icon of item" :key="icon.id">
          <img :src="icon.imgUrl" alt="banner">
          <p>{{ icon.title }}</p>
        </li>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      props:{
        iconsList:{
          type:Array,
          default:[]
        }
      },
      data(){
        return{
          swiperOption: {
            pagination: {
              el: '.swiper-pagination',
              // type : 'progressbar',
              // type: 'fraction',
            },
            /*loop: true,
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false
            }*/
          },
          /*"iconsList":[
            {
              "id":"01",
              "imgUrl":require("@/assets/img/icons/icons01.png"),
              "title":"景点门票"
            },
            {
              "id":"02",
              "imgUrl":require("@/assets/img/icons/icons02.png"),
              "title":"酒店"
            },{
              "id":"03",
              "imgUrl":require("@/assets/img/icons/icons03.png"),
              "title":"机票"
            },{
              "id":"04",
              "imgUrl":require("@/assets/img/icons/icons10.png"),
              "title":"火车票"
            },{
              "id":"05",
              "imgUrl":require("@/assets/img/icons/icons04.png"),
              "title":"度假"
            },{
              "id":"06",
              "imgUrl":require("@/assets/img/icons/icons05.png"),
              "title":"海外酒店"
            },{
              "id":"07",
              "imgUrl":require("@/assets/img/icons/icons06.png"),
              "title":"低价机票"
            },{
              "id":"08",
              "imgUrl":require("@/assets/img/icons/icons07.png"),
              "title":"汽车票船票"
            },{
              "id":"09",
              "imgUrl":require("@/assets/img/icons/icons08.png"),
              "title":"自由行"
            },{
              "id":"10",
              "imgUrl":require("@/assets/img/icons/icons09.png"),
              "title":"攻略"
            }
          ]*/
        }
      },
      computed:{
        page(){    //将一维数组变成二维数组
          let pages=[];
          this.iconsList.forEach((item,index)=>{
            let idx=Math.floor(index/8);
            if(!pages[idx])pages[idx]=[];
            pages[idx].push(item);
          });
          return pages;
        }
      }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .icons
    width :100%
    overflow :hidden
    .icons-item
      width :25%
      height: 1.6rem
      text-align: center
      margin-top : .2rem
      font-size :.28rem
      list-style-type :none
      float :left
      img
        width :1.1rem
        height:1.1rem
    .swiper-container
      height:200px
    >>> .swiper-pagination-bullet
      width: 6px
      height: 6px
      background-color: #3025cc
      opacity: 0.2
    >>> .swiper-pagination-bullet-active /* 样式穿透 */
      opacity: 1
      background: #ff428a
</style>
