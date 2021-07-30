<template>
  <footer>
    <ul class="nav-list">
      <li class="nav-item" v-for="(nav,index) in navList" :key="index">
        <span :style="{'background-position':ps(index)}"></span>
        <a class="title" href="#">{{nav}}</a>
      </li>
    </ul>
    <div class="toggle" v-on:click="toggle"><img :src="imgUrl" alt="toggle">{{ txt }}</div>
  </footer>
</template>
<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          "navList":["机票","酒店","公寓","团购"],
          flag:0,
          txt: "更多",
          "deepList":["登录","我的订单","最近浏览","关于我们"],
          "imgUrl":require("@/assets/img/toggle.png")
        }
      },
      methods:{
        ps(index){
          return -(index<7?index:index-7) * 25 +'px '+ (index>6?-25:0)+'px'
        },
        toggle(){
          if(this.flag===0){
            this.navList = ["机票","酒店","公寓","团购","火车票","景点","接送机","度假","攻略","旅图","车车","当地人"];
            this.flag=1;
            this.txt="收起";
            this.imgUrl=require("@/assets/img/toggle1.png")
          }else{
            this.navList = ["机票","酒店","公寓","团购"];
            this.txt='更多';
            this.flag=0;
            this.imgUrl=require("@/assets/img/toggle.png")
          }
        }
      }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  footer
    color: #9e9e9e
    position: relative
    .nav-list
      /*width:6.4rem*/
      margin: 0 auto
      font-size :.24rem
      overflow:hidden
      padding:.2rem .2rem 0 .9rem
      .nav-item
        width: 1.3rem
        float: left
        height: .6rem
        line-height :.6rem
        padding-left: .2rem
        position :relative
        span
          width: .44rem
          height: .44rem
          /*display: inline-block*/
          float: left
          background: url("~@/assets/img/footer.png")
          background-repeat : no-repeat
          background-size: 3.5rem 1rem  /*把原来的精灵图缩小一倍*/
        .title
          float :left
          position:absolute
          top: -.06rem
          left :.65rem
          text-decoration: underline;
          color: #9e9e9e
    .toggle
      font-size: .18rem
      position: absolute
      bottom: -0.2rem
      right: 0.5rem
      img
        width:.22rem
        height:.22rem
</style>
