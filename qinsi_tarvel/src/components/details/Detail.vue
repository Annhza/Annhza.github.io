<template>
  <div class="details">
    <keep-alive>
      <site-header :title="title"></site-header>
    </keep-alive>
    <site-details :sight="sight"></site-details>
    <div class="content"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import SiteDetails from './pages/sitedetails'
  import SiteHeader from './pages/siteheader'
  import { mapState }from 'vuex'
  export default {
    components:{
      SiteDetails,
      SiteHeader,
    },
    data(){
      return{
        title:'',
        sight:{}
      }
    },
    methods:{
      getHttp(){
        this.$http({
          url:'http://localhost:8080/api/travel'     //使用localhost会出现跨域 可以改成127.0.0.1
        }).then(res=>{
          let data = res.data.data;
          data.forEach(item =>{
            // console.log(item);
            if(item.city==this.cityName){
              var temp = item.hotList;
              temp.forEach(v=>{
                if(v.id==this.$route.params.id){
                  this.sight=v;
                  this.title=v.title
                }
              })
            }
          });
        }).catch(err=>{//异常处理
          console.log(err)
        })
      }
    },
    created(){
      this.getHttp();
      // console.log(this.$route.params.id);
      // console.log(this.$route.params.newhotList)
   /*   let id=this.$route.params.id;
      let hotList=JSON.parse(this.$route.query.newhotList);
      hotList.forEach(obj =>{
        if(obj.id==id){
          // console.log(obj)
          this.dhotList=obj;
          this.title=obj.title
        }
      })*/
    },
    computed:{
      ...mapState(['cityName']),
    }
  }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .content
    height:50rem
</style>
