<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-info></detail-info>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailInfo from './components/Info.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner: DetailBanner,
    DetailHeader: DetailHeader,
    DetailInfo: DetailInfo
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
