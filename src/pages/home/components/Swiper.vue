<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 4000,
        loop: true
      },
      list: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/f5/ea83238744f31102.jpg_750x200_73b8477c.jpg'
        }, {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg'
        }, {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/60/2eee57f623edfa02.jpg_750x200_74566baa.jpg'
        }, {
          id: 4,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/11/c095d59922775602.jpg_750x200_977527bb.jpg'
        }
      ]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.80%
    background: #eee
    .swiper-img
      width: 100%
</style>
