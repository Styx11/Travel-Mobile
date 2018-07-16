<template>
  <div>
    <div class="wrapper">
      <div class="footer-nav">
        <div class="footer-item">
          <span class="iconfont">&#xe623;</span>
          <span>机票</span>
        </div>
        <div class="footer-item">
          <span class="iconfont">&#xe6bc;</span>
          <span>酒店</span>
        </div>
        <div class="footer-item">
          <span class="iconfont">&#xe8e9;</span>
          <span>公寓</span>
        </div>
        <div class="footer-item footer-item-more">
          <span class="iconfont">&#xe604;</span>
          <span>更多</span>
        </div>
      </div>
      <div class="footer-info">
        <div class="footer-info-fix">
          <span class="selected">触屏版</span>
          <span>电脑版</span>
        </div>
        <div class="footer-info-copyright">
          &copy;Qunar 京ICP备05021087
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30%
    background #f3f3f3
    .footer-nav
      width 300px
      height 25px
      margin 0 auto
      padding 10px 10px 0 10px
      overflow hidden
      .footer-item
        display inline-block
        margin-left .3rem
        color #9e9e9e
      .footer-item-more
        border-left 1px solid #9e9e9e
        padding-left .2rem
    .footer-info
      border-top 1px solid #cacaca
      margin-top .2rem
      width 100%
      .footer-info-fix
        color #25a4bb
        width 200px
        height 25px
        margin 0 auto
        padding 10px 10px 0 10px
        text-align center
        .selected
          color #000
      .footer-info-copyright
        color #9e9e9e
        text-align center
</style>
