<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-top></home-top>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeTop from './components/Top.vue'
import HomeRecommend from './components/Recommend.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeTop: HomeTop,
    HomeRecommend: HomeRecommend
  }
}
</script>

<style lang="stylus" scoped>

</style>
