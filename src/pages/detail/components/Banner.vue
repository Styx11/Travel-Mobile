<template>
  <div>
    <div class="banner">
      <span
        class="iconfont banner-back"
        @click="handleRouter"
      >&#xe624;</span>
      <img v-lazy="list[0].bannerImg" @click="handleBannerClick" class="banner-img"/>
      <div class="banner-info">
        <div class="banner-info-title">
          {{ list[0].title }}
        </div>
        <div class="banner-info-img">
          <span class="iconfont">&#xe67a;</span>
          {{ list.length }} 张图片
        </div>
      </div>
    </div>
    <gallery
      :imgList='list'
      v-show="show"
      @handleGallery="handleBannerClick"
    ></gallery>
  </div>
</template>

<script>
import Gallery from '@/pages/common/Gallery.vue'
export default {
  name: 'Banner',
  components: {
    Gallery: Gallery
  },
  data: function () {
    return {
      show: false,
      list: [
        {
          id: 1,
          bannerImg: '//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg',
          title: '故宫(AAAAA景区)'
        }, {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg'
        }, {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg'
        }, {
          id: 4,
          imgUrl: 'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png'
        }, {
          id: 5,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_350x240_af846382.jpg'
        }, {
          id: 6,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/34/f540a04367d06820af4dfeaf0ad40257.water.jpg_350x240_100fac79.jpg'
        }, {
          id: 7,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/9d/fe8109ab5df1c9c324e74284fa802e72.water.jpg_350x240_8571d9ed.jpg'
        }, {
          id: 8,
          imgUrl: 'http://img1.qunarzz.com/wugc/p238/201306/16/d9090c728fed64eb93835fbb.jpg_350x240_afe6c0fa.jpg'
        }, {
          id: 9,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/af/af47583adca3f972.water.jpg_350x240_95007698.jpg'
        }, {
          id: 10,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/be/d44bb81ae3218a627a65ded451326b2c.water.jpg_350x240_9f163cbc.jpg'
        }
      ]
    }
  },
  methods: {
    handleRouter: function () {
      this.$router.go(-1)
    },
    handleBannerClick: function () {
      this.show = !this.show
    }
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
