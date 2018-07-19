<template>
  <div id='list' ref="wrapper">
    <div>
      <div class='area'>
        <div class='header'>当前城市</div>
        <div class='local'>北京</div>
      </div>
      <div class='area'>
        <div class='header'>热门城市</div>
        <div class='hot' v-for='item in hotCities' :key='item.id'>{{ item.name }}</div>
      </div>
      <div class='area' v-for='(item, key) of cities' :key="key">
        <div class='header' :ref="key">{{ key }}</div>
        <div class="city" v-for="city in item" :key="city.id">{{ city.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    hotCities: {
      type: Array,
      required: true
    },
    cities: {
      type: Object,
      required: true
    }
  },
  mounted: function () {
    let _this = this
    this.scroll = new Bscroll(this.$refs.wrapper)
    this.bus.$on('handleClick', function (msg) {
      let element = _this.$refs[msg][0]
      _this.scroll.scrollToElement(element)
    })
    this.bus.$on('handleTouch', function (msg) {
      let element = _this.$refs[msg][0]
      _this.scroll.scrollToElement(element)
    })
  }
}
</script>

<style lang='stylus' scoped>
  #list
    overflow hidden
    position absolute
    top 1.8rem
    left 0
    right 0
    bottom 0
    .area
      overflow hidden
      .header
        width 100%
        line-height .32rem
        height .32rem
        background #f3f3f3
        padding .24rem .3rem
      .local, .hot
        display inline-block
        float left
        width 6em
        height 1.5em
        margin .2rem .2rem
        padding-top .22rem
        text-align center
        font-size .32rem
        border 1px solid #ccc
        border-radius 3px
      .city
        border-bottom 1px solid #dad5d5
        width 100%
        height .28rem
        line-height .24rem
        padding .25rem .2rem
</style>
