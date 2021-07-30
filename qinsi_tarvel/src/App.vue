<template>
  <div id="app"><!--
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" ></router-view>
    </keep-alive>
    <router-view v-if="isRouterAlive && !$route.meta.keepAlive" ></router-view>-->
    <router-view v-if="isRouterAlive" ></router-view>   <!--不要轻易用keep-alive 容易导致页面数据刷不出来-->
  </div>
</template>

<script>
export default {
  name:'app',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function () {
        this.isRouterAlive=true
      })
    }
  }
}
</script>

<style>

</style>
