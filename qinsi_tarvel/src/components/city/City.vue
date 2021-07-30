<template>
  <div class="city">
    <city-header></city-header>
    <!--<city-hot :hotCities="hotCities"></city-hot>-->
    <!--<city-sort :cities="cities"></city-sort>-->
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
  </div>
</template>
<script type="text/ecmascript-6">
    import CityHeader from './pages/Header'
    // import CityHot from './pages/Hot'
    // import CitySort from './pages/Sort'
    import CityList from './pages/List'
    export default {
      data(){
        return{
          hotCities:[],
          cities:{}
        }
      },
      mounted(){
        this.$http({
          url:'http://localhost:8080/api/getcity'
        }).then(res=> {
          // alert();
          // console.log(res.data.data);   //打印城市信息列表
          let data = res.data.data;
          this.hotCities=data.hotCities
          this.cities=data.cities
        })
      },
      components:{
        CityHeader,
        // CityHot,
        // CitySort,
        CityList,
      }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  /*.city*/
    /*background-color :#f5f5f5*/
</style>
