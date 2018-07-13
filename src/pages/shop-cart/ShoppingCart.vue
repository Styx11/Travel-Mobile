<template>
  <div class="shoppingCart">
    <cart-header
      class="header"
    ></cart-header>
    <cart-pane
      :itemList='list'
      @selectItem='list[$event.index].selected = $event.sel'
    ></cart-pane>
    <buy-pane
      :itemList='list'
    ></buy-pane>
  </div>
</template>

<script>
import CartPane from './components/cart-pane.vue'
import CartHeader from './components/header.vue'
import BuyPane from './components/buy-pane'
export default {
  name: 'ShoppingCart',
  components: {
    CartPane: CartPane,
    CartHeader: CartHeader,
    BuyPane: BuyPane
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
        },
        {
          id: 4,
          price: 2466,
          counter: 1,
          name: 'Apple Watch',
          selected: false,
          desc: '让关心的事触手可及',
          imgUrl: 'https://img10.360buyimg.com/n7/jfs/t19837/127/929293430/224957/3c6981e/5b0fc4c7N748a99d1.png'
        }
      ]
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
</style>
