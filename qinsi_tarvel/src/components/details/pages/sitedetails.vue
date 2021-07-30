<template>
  <div class="sitedetails">
    <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="sight.bigImg" />
      <div class="banner-info">
        <div class="banner-title">{{ sight.title }}</div>
        <div class="banner-number">
          <span class="iconfont icon-tupian"></span>{{ len }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :sight="sight" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </fade-animation>
  </div>
</template>
<script type="text/ecmascript-6">
  import CommonGallery from '@/common/gallery/Gallery'
  import FadeAnimation from '@/common/fade/FadeAnimation'
  export default {
      name: 'DetailBanner',
      props:['sight'],
      computed:{
        len(){
          if(this.sight.imgs){
            return this.sight.imgs.length
          }
        }
    },
      data () {
        return {
          showGallery: false
        }
      },
      methods: {
        handleBannerClick () {
          this.showGallery = true
        },
        handleGalleryClose () {
          this.showGallery = false
        }
      },
      components: {
        CommonGallery,
        FadeAnimation
      },
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0) ,rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
