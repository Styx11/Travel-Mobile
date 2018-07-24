<template>
  <div class="gallery">
    <div class="gallery-cover" @click="handleGallery"></div>
    <swiper :options="swiperOption" style="height: auto" class="gallery-content">
      <swiper-slide v-for="item in list" :key="item.id">
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
        autoplay: false
      },
      list: this.imgList
    }
  },
  methods: {
    handleGallery: function () {
      this.$emit('handleGallery')
    }
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
      z-index 1
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      width 100%
      background #000
    .gallery-content
      z-index 2
      width 100%
      background #000
      .gallery-content-img
        width 100%
      .swiper-pagination
        bottom -1rem
        color #fff
</style>
