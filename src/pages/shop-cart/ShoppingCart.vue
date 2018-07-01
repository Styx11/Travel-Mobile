<template>
  <div class="shoppingCart">
    <div class="header">
      购物车
      <span class="iconfont">&#xe63f;</span>
    </div>
    <div
      class="cartPane"
      v-for="item in list"
      v-bind:key='item.id'
    >
      <button
        v-on:click='item.selected = !item.selected'
        v-if="item.selected"
        class="iconfont selectedTrue"
      >&#xe8b6;</button>
      <button
        v-on:click='item.selected = !item.selected'
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
        ></input-number>
      </div>
    </div>
    <div class="buyPane">
      <button
        v-on:click='selectItem'
        v-if="selectMessage === '反选'"
        class="iconfont selectedTrue"
      >&#xe8b6;</button>
      <button
        v-on:click='selectItem'
        v-else
        class="iconfont selectedFalse"
      >&#xe8b5;</button>
      <span class="selectMessage">{{ selectMessage }}</span>
      <p class="total">合计：<span class="price">￥ {{ totalPrice }}</span></p>
      <a class="buy" href="">
        去结算 ({{ totalCounter }})
      </a>
    </div>
  </div>
</template>

<script>
import InputNumber from './components/input-number.vue'
export default {
  name: 'ShoppingCart',
  components: {
    InputNumber: InputNumber
  },
  data: function () {
    return {
      list: [
        {
          id: 1,
          price: 7409,
          counter: 1,
          name: 'iPhone X',
          selected: false,
          desc: 'A11仿生，智能过人',
          imgUrl: 'https://img10.360buyimg.com/n7/jfs/t17005/6/592656995/66580/c24d7fe0/5a989f8fN274728d1.jpg'
        },
        {
          id: 2,
          price: 5888,
          counter: 1,
          name: 'iPad Pro',
          selected: false,
          desc: '力量强大，能做日常的事，还能探索未来想做的事',
          imgUrl: 'https://img13.360buyimg.com/n7/jfs/t17425/6/1117130719/77250/b4afe949/5abb0fc0Nb0fd7afd.jpg'
        },
        {
          id: 3,
          price: 21488,
          counter: 1,
          name: 'MacBook Pro',
          selected: false,
          desc: '新一代MacBook，她快如闪电、绚丽夺目',
          imgUrl: 'https://img11.360buyimg.com/n7/jfs/t15601/39/1909654599/97649/2a2bbc75/5a694948N5cc36e24.jpg'
        }
      ]
    }
  },
  methods: {
    selectItem: function () { // 列表全选
      if (this.selectMessage === '全选') {
        this.list.forEach(function (item) {
          if (!item.selected) {
            item.selected = true
          }
        })
      } else {
        this.list.forEach(function (item) {
          if (item.selected) {
            item.selected = false
          }
        })
      }
      return true
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
  }
}
</script>

<style lang="stylus" scoped>
  .shoppingCart
    padding-top .86rem
    .header
      position fixed
      top 0
      left 0
      width 100%
      line-height .86rem
      font-size .32rem
      text-align center
      border-bottom 1px solid #ccc
      background #fff
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
</style>
