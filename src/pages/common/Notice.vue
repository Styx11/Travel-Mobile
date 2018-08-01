<template>
  <div class="notice" v-show="show">
    <div class="notice-header">
      <span class="iconfont horn">&#xe6ec;</span>
      <span class="title">景区公告</span>
    </div>
    <div class="notice-content">
      <p
        class="content"
        v-for="item in notice"
        :key="item.id"
      >{{ item.id }}. {{ item.content }}</p>
    </div>
    <div class="notice-exit">
      <span class="iconfont exit" @click="handleNotice">&#xe77d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  props: {
    notice: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    handleNotice: function () {
      this.show = false
      this.bus.$emit('noticeClick', this.show)
    }
  },
  mounted: function () {
    this.bus.$on('infoClick', (show) => {
      this.show = show
    })
  }
}
</script>

<style lang="stylus" scoped>
  .notice
    z-index 93
    overflow hidden
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #fff
    opacity 0.9
    .notice-header
      position fixed
      width 100%
      height .8rem
      top 1.8rem
      font-size .4rem
      text-align center
      color #f67353
      .horn
        font-size .7rem
      .title
        position relative
        display inline-block
        top -.1rem
    .notice-exit
      position fixed
      bottom .8rem
      width 100%
      height .4rem
      text-align center
      .exit
        z-index 93
        font-size .54rem
  .notice-content
    position fixed
    width 100%
    top 3.2rem
    padding 0 .2rem
    font-size .3rem
    color #333
    text-align left
    .content
      width 95%
      line-height 1.5em
      padding-bottom .12rem
      word-wrap break-word
</style>
