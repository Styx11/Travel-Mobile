<template>
  <div class="header">
    <span class="iconfont">购物车&#xe63f;</span>
    <button
      class="edit"
      @click="editItem"
    >{{ edit }}</button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      edit: '编辑'
    }
  },
  methods: {
    editItem: function () {
      this.edit = this.edit === '编辑' ? '完成' : '编辑'
      this.bus.$emit('editItem', this.edit)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    width 100%
    line-height .86rem
    font-size .32rem
    position relative
    text-align center
    background #fff
    border-bottom 1px solid #ccc
    .edit
      position absolute
      top .18rem
      right .24rem
      color #bfbfbf
      cursor pointer
      background #fff
</style>
