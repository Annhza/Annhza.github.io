<template>
  <div class="like">
    <div class="like-title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢"> 猜你喜欢
    </div>
    <div class="like-list">
      <div class="like-item" v-for="like of likeList" :key="like.id">
        <div class="like-tag" v-if="like.tag">
          <span v-if="like.tag === '随买随用'" :class="{tagcolor1:true}">
            {{ like.tag }}
          </span>
          <span v-else-if="like.tag === '可订明日'" :class="{tagcolor2:true}">
            {{ like.tag }}
          </span>
        </div>
        <img class="like-img" :src="like.imgUrl" alt="">
        <div class="like-content">
          <p class="like-title">{{like.title}}</p>
          <p class="rating">
            <img v-for="item of [1,2,3,4,5]" :key="item" src="@/assets/img/star.png" alt="star">
            <span class="connent">{{like.comment}}条评论</span>
          </p>
          <p class="price"><span>￥{{like.price}}</span>起</p>
          <p class="area">{{like.area}}</p>
          <div class="mark" v-if="like.mark">{{like.mark}}</div>   <!--没有mark时消除上外边距-->
        </div>
      </div>
    </div>
    <a class="findmore" href="#">查看所有产品</a>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      props:{
        likeList:{
          type:Array,
          default:[]
        }
      },
      data(){
        return{
          /*"likeList":[
            {
              "id":"01",
              "imgUrl":"http://img1.qunarzz.com/sight/p0/1606/4a/4ae2bbafcc977a54e2.water.jpg_200x200_2724c6a1.jpg",
              "title":"合肥海洋世界",
              "price":128.99,
              "comment":1327,
              "area":"合肥",
              "mark":"小伙伴们都收藏了，去看看吧！",
              "tag":"随买随用"
            },{
              "id":"02",
              "imgUrl":"http://img1.qunarzz.com/sight/p0/1704/a3/a3e4f87ebd5c55a1a3.water.jpg_200x200_f1fc0289.jpg",
              "title":"合肥幻太奇梦幻海洋馆",
              "price":128.99,
              "comment":1327,
              "area":"蜀山区",
              "mark":"",
              "tag":""
            },{
              "id":"03",
              "imgUrl":"http://img1.qunarzz.com/sight/p0/1609/ca/ca736c64da554ffaa3.water.jpg_200x200_5efad21c.jpg",
              "title":"合肥融创乐园",
              "price":148.99,
              "comment":56566,
              "area":"包河区",
              "mark":"群山披绿，古木参天，万木峥嵘",
              "tag":"可订明日"
            }
          ]*/
        }
      },
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .like
    padding-top : .2rem
    border-top :.2rem solid #ffeaec
    .like-title
      font-size :.3rem
      img
        width: .3rem
        height: .3rem

    .like-list
      padding-left: .2rem
      .like-item
        padding: .2rem 0
        overflow: hidden
        border-bottom:1px solid #d2dfe2
        position :relative
      .like-tag
        position: absolute
        font-size: .24rem
        width : 1.02rem
        height: .38rem
        line-height :.38rem
        color: #ffffff
        top: .2rem
        left:0
        text-align: center
        border-bottom-right-radius :.1rem
      .tagcolor1
        display:block
        background-color :#ffa51a
      .tagcolor2
        display:block
        background-color: #0bd5ef
      .like-img
        width: 2rem
        height: 2rem
        float: left
        margin-right: .2rem
      .like-content
        float: left
        font-size: .24rem
        color :#616161
        .like-title
          font-size: .32rem
          margin :.24rem 0 .18rem 0
        .rating>img
          width: .25rem
          height: .25rem
        .price
          margin-top:.22rem
          span
            font-size: .4rem
            color :#ff8300
        .area
          position: absolute;
          top: 1.5rem
          right: 0.3rem
        .mark
          color: #ff5555
          margin-top:.6rem
    .findmore
      padding: .2rem 0;
      color: #00afc7;
      font-size: .28rem;
      line-height: .4rem;
      text-align: center
      display: block
      border-bottom: 1px solid #d2dfe2
</style>
