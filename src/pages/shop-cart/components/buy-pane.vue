<template>
  <div class="buyPane">
    <button
      v-on:click='selectAll'
      v-if="selectMessage === '反选'"
      class="iconfont selectedTrue"
    >&#xe8b6;</button>
    <button
      v-on:click='selectAll'
      v-else
      class="iconfont selectedFalse"
    >&#xe8b5;</button>
    <span class="selectMessage">{{ selectMessage }}</span>
    <p class="total">合计：<span class="price">￥ {{ totalPrice }}</span></p>
    <a
      class="buy"
      href=""
      v-if='del'
    >
      去结算 ({{ totalCounter }})
    </a>
    <div
      class="del"
      v-else
      v-on:click='delItem'
    >删除</div>
  </div>
</template>

<script>
export default {
  name: 'BuyPane',
  props: {
    itemList: {
      type: Array
    }
  },
  data: function () {
    return {
      list: this.itemList,
      del: true
    }
  },
  computed: {
    selectMessage: function () {
      var counter = 0
      this.list.forEach(function (item) {
        if (item.selected) {
          counter++
        }
      })
      return counter === this.list.length ? '反选' : '全选'
    },
    totalCounter: function () {
      var counter = 0
      this.list.forEach(function (item) {
        if (item.selected) {
          counter += item.counter
        }
      })
      return counter
    },
    totalPrice: function () { // 计算属性--总价格
      var totalPrice = 0
      totalPrice = this.list.reduce(function (sum, item) {
        return sum + (item.selected ? item.counter * item.price : 0)
      }, 0)
      return totalPrice.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  },
  methods: {
    selectAll: function () { // 列表全选
      this.bus.$emit('selectAll', this.selectMessage)
    },
    delItem: function () {
      this.bus.$emit('delItem', this.totalCounter)
    }
  },
  mounted: function () {
    var _this = this
    this.bus.$on('editItem', function (msg) {
      _this.del = (msg === '编辑')
    })
  }
}
</script>

<style lang="stylus" scoped>
  .buyPane
    position relative
    display flex
    width 100%
    line-height .86rem
    padding-left 0.26rem
    button
      background #fff
      cursor pointer
    .selectedTrue
      color #f23030
      background #fff
    .selectMessage
      padding-left .1rem
    .total
      padding-left .32rem
      font-size .32rem
      .price
        color #f23030
    .buy
      position absolute
      right 0
      bottom 0
      width 30%
      max-width 300px
      background #f23030
      color #fff
      font-size .32rem
      text-align center
      padding 0 .1rem
    .del
      position absolute
      right 0
      bottom 0
      width 10%
      max-width 150px
      min-width 75px
      cursor pointer
      background #fff
      color #f23030
      font-size .32rem
      text-align center
      padding 0 .1rem
      margin-right .5rem
      border 1px solid #f23030
      border-radius 4px
</style>
