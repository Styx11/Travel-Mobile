<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
  .search
    display flex
    background #00bcd4
    line-height .86rem
    padding .15rem 0
    .search-input
      box-sizing border-box
      border-radius 3px
      padding 0 .1rem
      margin 0 auto
      width 95%
      line-height .6rem
      text-align center
</style>
