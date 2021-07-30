<template>
    <div>
      <router-link tag="div" to='/' class="header-abs" v-show="showAbs">
        <div class="iconfont icon-jiantou"></div>
      </router-link>
      <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        <router-link to='/'>
          <div class="iconfont icon-jiantou"></div>
        </router-link>
        {{ title }}
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'DetailHeader',
      props:['title'],
      data () {
        return {
          showAbs: true,
          opacityStyle: {
            opacity: 0
          }
        }
      },
      methods: {
        handleScroll () {
          const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
          if (top > 60) {
            let opacity = top / 140;
            opacity = opacity > 1 ? 1 : opacity;
            this.opacityStyle = { opacity };
            this.showAbs = false
          } else {
            this.showAbs = true
          }
        }
      },
      mounted () {
        window.addEventListener('scroll', this.handleScroll)
      },
      destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>
<style lang="stylus" rel="text/stylus" scoped>
  .header-abs
    z-index: 9999
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .icon-jiantou
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position :fixed
    top: 0
    left: 0
    right: 0
    height :.88rem
    line-height :.88rem
    text-align :center
    color :#fff
    background :#00bcd4
    font-size :.32rem
    .icon-jiantou
      position :absolute
      top :0
      left :0
      width :.64rem
      text-align :center
      font-size :.4rem
      color :#fff
</style>
