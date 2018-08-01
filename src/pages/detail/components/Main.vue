<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <detail-banner></detail-banner>
      <detail-info :notice="notice"></detail-info>
      <detail-ticket></detail-ticket>
      <detail-footer></detail-footer>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import DetailBanner from './Banner.vue'
import DetailInfo from './Info.vue'
import DetailTicket from './Ticket.vue'
import DetailFooter from '@/pages/common/Footer.vue'
export default {
  name: 'Main',
  components: {
    DetailInfo,
    DetailBanner,
    DetailTicket,
    DetailFooter
  },
  props: {
    notice: {
      type: Array
    }
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.wrapper, { probeType: 3 })
    this.scroll.on('scroll', (pos) => {
      this.bus.$emit('scroll', -pos.y)
    })
    this.bus.$on('scrollTop', (bounce) => {
      this.bus.$emit('scroll', 0)
      this.scroll.scrollTo(0, 0, 700, bounce)
    })
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    position absolute
    top 0
    left 0
    right 0
    bottom 0
</style>
