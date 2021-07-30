<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-location></home-location>
    <home-hot :hotList="hotList"></home-hot>
    <home-like :likeList="likeList"></home-like>
    <home-footer></home-footer>
    <home-deep></home-deep>
  </div>
</template>
<script type="text/ecmascript-6">
  import HomeHeader from './pages/Header'
  import HomeSwiper from './pages/Swiper'
  import HomeIcons from './pages/Icons'
  import HomeLocation from './pages/Location'
  import HomeHot from './pages/Hot'
  import HomeLike from './pages/Like'
  import HomeFooter from './pages/Footer'
  import HomeDeep from './pages/Deep'
  import { mapState } from 'vuex'
  export default {
    data(){
      return{
        iconsList:[],
        hotList:[],
        likeList:[],
        swiperList:[],
        changeCity:''
      }
    },
/*    mounted(){
      this.$http({
        url:'http://localhost:8080/static/mock/data/travel.json'
      }).then(res=>{
        console.log(res.data.data[0])
      }).catch(err=>{//异常处理
        console.log(err)
      })
    },*/
    methods:{
      getHttp(){
        this.$http({
          url:'http://localhost:8080/api/travel'     //使用localhost会出现跨域 可以改成127.0.0.1
        }).then(res=>{
          // alert();
          // console.log(res.data.data[0]);   //打印合肥信息列表
          // console.log(this.cityName);
          let data = res.data.data;
          // console.log(data);
          data.forEach(item =>{
            // console.log(item.city)
            if(item.city==this.cityName){
              this.iconsList = item.iconsList;
              this.hotList = item.hotList;
              this.likeList = item.likeList;
              this.swiperList = item.swiperList;
            }
          });
          // this.iconsList = data.iconsList;
          // this.hotList = data.hotList;
          // this.likeList = data.likeList;
          // this.swiperList = data.swiperList;
        }).catch(err=>{//异常处理
          console.log(err)
        })
      }
    },
    computed:{
      ...mapState(['cityName'])
    },
    mounted(){
      this.getHttp()
    },
/*    activated(){
      if(this.changeCity != this.cityName){
        this.getHttp();
        this.changeCity = this.cityName;
      }
    },*/
    components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeLocation,
      HomeHot,
      HomeLike,
      HomeFooter,
      HomeDeep
    }
  }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .home
    background-color :#f5f5f5
</style>
