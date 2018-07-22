<template>
  <div class="gallery">
    <div class="gallery-cover"></div>
    <div class="gallery-img"></div>
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
      list: this.imgList
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallery
    position relative
    width 100%
    height 100%
    .gallery-cover
      z-index 99
      overflow hidden
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      width 100%
      height 0
      padding-bottom 100%
      background #000
    .gallery-img
      overflow hidden
      flex-direction column
      justify-content center
      width 100%
      height 55%
      background 100%
      background #fff
</style>
