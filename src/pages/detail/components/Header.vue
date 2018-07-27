<template>
  <div class="header">
    <div class="header-abs" v-show="showAbs">
      <span
        class="iconfont header-back"
        @click="handleRouter"
      >&#xe624;</span>
    </div>
    <div class="header-fix" v-show="!showAbs" :style="styleOpacity">
      <div class="header-fix-left" @click='handleRouter'>
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-fix-center">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      showAbs: true,
      styleOpacity: {
        opacity: 0
      },
      timer: null
    }
  },
  methods: {
    handleRouter: function () {
      this.$router.go(-1)
    },
    handleScroll: function () {
      let top = window.pageYOffset
      if (top > 10) {
        let opacity = top / 145
        this.styleOpacity.opacity = top > 145 ? 1 : opacity
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function () { // 解除全局事件绑定
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .header >>> .header-back
    position absolute
    top .2rem
    left .2rem
    width .7rem
    height .7rem
    line-height .7rem
    color #fff
    font-size .32rem
    text-align center
    border-radius .35rem
    background rgba(0, 0, 0, 0.5)
  .header-fix
    position fixed
    z-index: 91
    top 0
    left 0
    right 0
    line-height .86rem
    background #00bcd4
    color #fff
    .header-fix-left
      float left
      width .64rem
      text-align center
      font-size .36rem
    .header-fix-center
      font-size .36rem
      width 6rem
      line-height .86rem
      margin 0 auto
      padding-right .64rem
      text-align center
</style>
