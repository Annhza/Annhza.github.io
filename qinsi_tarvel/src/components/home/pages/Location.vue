<template>
  <div class="location">
    <div class="location-part">
        <span class="iconfont icon-dingwei1"></span><p @click="changeLocation">{{txt}}</p>
    </div>
    <div class="location-part">
      <span class="iconfont icon-diqiu"></span>必游榜单
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import { mapMutations } from 'vuex'
  // import BMap from 'BMap'
  import getCurrentCityName from '@/common/js/getUserLocation.js'
  export default {
    inject:['reload'],
    data () {
      return {
        location:'',
        txt:'开启定位'
      }
    },
    mounted () {
      // this.ready()
      this.getCurrentCity();
    },
    methods: {
      /*ready () {
        var geolocation = new BMap.Geolocation();
        console.log(geolocation)
        geolocation.getCurrentPosition((r) => {
          //console.log(r.address.city)
          this.location= r.address.city.replace('市','');
          // console.log(this.location)
          this.txt=this.location==this.cityName?'定位成功':"开启定位"
        }, { enableHighAccuracy: true })*/
      getCurrentCity(){
        getCurrentCityName().then((city)=>{
          // console.log(city)
          this.location =city.replace('市','');
          // this.location=city;
          this.txt=this.location==this.cityName?'定位成功':"开启定位"
        })
      },
      changeLocation(){
        var city= this.location;
        // console.log(city);
        // this.$router.push('/');
        this.changeCity(city);
        this.reload();
      },
      ...mapMutations(['changeCity'])    // 特别注意方法一定要写在methods里面 不要和属性一样写在computed里面
    },
    computed:{
      ...mapState(['cityName']),
      }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .location
    width :100%
    line-height :1rem
    display :flex
    font-size :.28rem
    overflow :hidden
    position: relative
    border-top:.02rem solid #e0e0e0
/*   &:after
     content:''
     display:block
     width: 100%
     height: .02rem
     border-top:.02rem solid #e0e0e0
     position:absolute*/
    .location-part
      flex: 1
      text-align: center
      span
        margin-right :.1rem
      p
        display: inline-block
      &:before
        content:''
        display:block
        left: 50%
        width: .02rem
        height: 100%
        border-right:.02rem solid #e0e0e0
        position:absolute
</style>
