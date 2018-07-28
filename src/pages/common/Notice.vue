<template>
  <div class="notice">
    <div class="notice-header">
      <span class="iconfont horn">&#xe6ec;</span>
      <span class="title">景区公告</span>
    </div>
    <div class="notice-body"></div>
    <div class="notice-exit">
      <span class="iconfont exit" @click="handleNotice">&#xe77d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  methods: {
    handleNotice: function () {
      this.$emit('handleNoticeClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .notice
    z-index 91
    overflow hidden
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #fff
    opacity 0.9
    .notice-header
      position fixed
      width 100%
      height .8rem
      top 1.8rem
      font-size .4rem
      text-align center
      color #f67353
      .horn
        font-size .7rem
      .title
        position relative
        display inline-block
        top -.1rem
    .notice-exit
      position fixed
      bottom .8rem
      width 100%
      height .4rem
      text-align center
      .exit
        font-size .54rem
</style>
