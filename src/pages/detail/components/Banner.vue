<template>
  <div>
    <div class="banner" @click="handleBannerClick" >
      <img v-lazy="list[0].bannerImg" class="banner-img"/>
      <div class="banner-info">
        <div class="banner-info-title">
          {{ list[0].title }}
        </div>
        <div class="banner-info-img">
          <span class="iconfont">&#xe67a;</span>
          {{ list[0].total }} 张图片
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data: function () {
    return {
      show: false,
      list: [
        {
          id: 1,
          bannerImg: '//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg',
          title: '故宫(AAAAA景区)',
          total: 10
        }
      ]
    }
  },
  methods: {
    handleBannerClick: function () {
      this.bus.$emit('bannerClick', true)
      this.show = true
    }
  },
  mounted: function () {
    this.bus.$on('gallery', (show) => {
      this.show = show
    })
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    width 100%
    height 51%
    .banner-back
      display block
      position absolute
      top .1rem
      left .1rem
      width .7rem
      height .7rem
      line-height .7rem
      color #fff
      font-size .32rem
      text-align center
      border-radius .35rem
      background rgba(0, 0, 0, 0.5)
    .banner-info
      overflow hidden
      position absolute
      line-height .52rem
      width 93%
      bottom 0
      padding .15rem .2rem
      color #fff
      .banner-info-title
        float left
        font-size .4rem
      .banner-info-img
        float right
        width 1.9rem
        height .4rem
        line-height .4rem
        text-align center
        padding .1rem .1rem
        border-radius .2rem
        background rgba(0, 0, 0, 0.5)
    .banner-img
      width 100%
</style>
