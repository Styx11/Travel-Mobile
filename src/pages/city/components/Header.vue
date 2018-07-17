<template>
  <div class="header">
    <div class="header-left" @click='handleRouter'>
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-center">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    handleRouter: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    line-height .86rem
    background #00bcd4
    color #fff
    .header-left
      float left
      width .64rem
      text-align center
      font-size .36rem
    .header-center
      font-size .36rem
      width 6rem
      line-height .86rem
      margin 0 auto
      padding-right .64rem
      text-align center
</style>
