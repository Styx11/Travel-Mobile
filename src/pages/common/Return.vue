<template>
  <div id="return" @click="scrollTop" v-if="top >= 160">
    <div>Top</div>
  </div>
</template>

<script>
export default {
  name: 'Return',
  data: function () {
    return {
      bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
          return 1 - (--t * t * t * t)
        }
      },
      top: 0
    }
  },
  methods: {
    scrollTop: function () {
      this.bus.$emit('scrollTop', this.bounce)
    }
  },
  mounted: function () {
    this.bus.$on('scroll', (top) => {
      this.top = top
    })
  }
}
</script>

<style lang="stylus" scoped>
  #return
    z-index 1
    position fixed
    right .2rem
    bottom .5rem
    width .8rem
    height .8rem
    line-height .8rem
    color #fff
    font-size .36rem
    text-align center
    border-radius .4rem
    background #00bcd4
</style>
