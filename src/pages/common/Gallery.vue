<template>
  <div class="gallery" v-show="show">
    <div class="gallery-cover" @click="handleGallery"></div>
    <swiper :options="swiperOption" style="height: auto" class="gallery-content">
      <swiper-slide v-for="item in imgList" :key="item.id">
        <img
          class="gallery-content-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgList: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true,
        autoplay: false
      },
      show: false
    }
  },
  methods: {
    handleGallery: function () {
      this.bus.$emit('galleryClick', false)
      this.show = false
    }
  },
  mounted: function () {
    this.bus.$on('bannerClick', (show) => {
      this.show = show
    })
  }
}
</script>

<style lang="stylus" scoped>
  .gallery >>> .swiper-container
    overflow inherit
  .gallery
    display flex
    flex-direction column
    justify-content center
    width 100%
    .gallery-cover
      z-index 98
      overflow hidden
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      width 100%
      background #000
    .gallery-content
      z-index 99
      width 100%
      position fixed
      top 4rem
      left 0
      background #000
      .gallery-content-img
        width 100%
      .swiper-pagination
        bottom -1rem
        color #fff
</style>
