<template>
  <div class="container" ref="container">
    <div>
      <!-- hot-->
      <div class="city-hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
          <!--<li @click="changeCityName(city.name)" v-for="city of hotCities" class="hot-item" :key="city.id">-->
          <!--{{ city.name }}-->
          <!--</li>-->
          <li  @click="changeCityName(item.name)" v-for="item of hotCities" class="hot-item" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <!--sort-->
      <div class="city-sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
          <li @click="jump(key)" v-for="(item,key) of cities" :key="key" class="sort-item">{{key}}</li>
        </ul>
      </div>
      <!--list-->
      <div class="list">
        <div :ref="key" v-for="(item,key) of cities" :key="key" class="city-list">
          <div class="list-title">{{key}}</div>
          <ul class="list-group">
            <li @click="changeCityName(items.name)" v-for="items of item" :key="items.id" class="list-item">{{items.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    import { mapMutations } from 'vuex'
    export default {
      props:{
        cities:Object,
        hotCities:Array
      },
      data(){
        return{
          scroll
        }
      },
      mounted(){
        //const container = this.$refs['container'];
        const container = this.$refs.container;
        this.scroll = new BScroll(container,{
          click:true
        });    //高版本的未能滚动 ，安装了1.15.2版本的better-scroll
        // console.log(this.scroll)
      },
      methods:{
        jump(key){
          // console.log(key);
          //console.log(this.$refs[key][0]);
          this.scroll.scrollToElement(this.$refs[key][0], 500)
        },
        changeCityName(cityData){
          // console.log(cityData)
          // var a='合肥'
          this.$router.push('/');
          this.changeCity(cityData)
        },
        ...mapMutations(['changeCity'])
      }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .container
    position: absolute
    left:0
    right:0
    bottom:0
    top:.88rem
    overflow: hidden
    background-color: #f5f5f5
    color:#212121
    /*hot*/
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
    /*sort*/
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
    /*list*/
    .city-list
      font-size: .28rem
      .list-title
        padding:.2rem .3rem
      .list-group
        background-color: #fff
        position: relative
        overflow: hidden
        &:before
          content:""
          position: absolute
          width: 25%
          height: 100%
          left: 25%
          border-left: 1px solid #ddd
          border-right: 1px solid #ddd
        &:after
          content:""
          position: absolute
          width: 25%
          height: 100%
          right: 0
          border-left: 1px solid #ddd
        .list-item
          line-height: .88rem
          width: 25%
          text-align: center
          float: left
          border-bottom: 1px solid #ddd
          margin-bottom: -1px
          position: relative
          z-index: 9999  //提高优先级，防止为元素标签覆盖而点击不到item
</style>
