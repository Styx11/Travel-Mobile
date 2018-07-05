<template>
  <div>
    <div
      class="cartPane"
      v-for="(item, index) in list"
      v-bind:key='item.id'
      >
      <button
        v-on:click='selectItem(index)'
        v-if="item.selected"
        class="iconfont selectedTrue"
      >&#xe8b6;</button>
      <button
        v-on:click='selectItem(index)'
        v-else
        class="iconfont selectedFalse"
      >&#xe8b5;</button>
      <img
        v-bind:src='item.imgUrl'
        class="imgPane"
      />
      <div class="detailPane">
        <h1 class="title">{{ item.name }}</h1>
        <p class="desc">{{ item.desc }}</p>
        <p class="price">￥{{ item.price }}</p>
        <input-number
          class="inputPane"
          v-bind:value='item.counter'
          @add="item.counter = $event"
          :min='1'
        ></input-number>
      </div>
    </div>
  </div>
</template>

<script>
import InputNumber from './input-number.vue'
export default {
  name: 'CartPane',
  components: {
    InputNumber: InputNumber
  },
  props: {
    itemList: {
      type: Array
    }
  },
  data: function () {
    return {
      list: this.itemList
    }
  },
  methods: {
    selectItem: function (index) {
      var wrapper = {}
      this.list[index].selected = !this.list[index].selected
      wrapper = {
        index: index,
        sel: this.list[index].selected
      }
      this.$emit('selectItem', wrapper)
      wrapper = null
    }
  },
  mounted: function () {
    var _this = this
    this.bus.$on('selectAll', function (msg) {
      if (msg === '全选') {
        _this.list.forEach(function (item) {
          if (!item.selected) {
            item.selected = true
          }
        })
      } else {
        _this.list.forEach(function (item) {
          if (item.selected) {
            item.selected = false
          }
        })
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  .cartPane
    display flex
    margin .2rem 0
    height 1.9rem
    padding-left .26rem
    button
      background #fff
      display inline-block
      margin auto 0
      cursor pointer
    .selectedTrue
      color #f23030
      background #fff
    .imgPane
      width 1.7rem
      heigth 1.7rem
      padding .1rem
    .detailPane
      flex 1
      min-width 0
      position relative
      padding-right .24rem
      .title
        display inline-block
        font-size .32rem
        font-weight bold
        margin-top .14rem
        inline-height .44rem
      .desc
        line-height 1.4em
        margin-top .14rem
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .price
        position absolute
        left 0
        bottom .24rem
        font-size .32rem
        color #f23030
      .inputPane
        position absolute
        right 0
        bottom .24rem
        padding-right .24rem
</style>
