<template>
  <div>
    <table>
    <thead>
      <th>
        <button v-on:click='selectItem'>{{ selectMessage }}</button>
      </th>
      <th>序号</th>
      <th>商品名称</th>
      <th>商品单价</th>
      <th>购买数量</th>
    </thead>
    <tbody v-for='(item , index) in list' v-bind:key='item.id'>
      <td>
        <input type='checkbox' v-model='item.selected'>
      </td>
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>
        <button v-on:click='handleReduce(index)' v-bind:disabled='item.counter == 1'>-</button>
        {{ item.counter }}
        <button v-on:click='handleAdd(index)'>+</button>
      </td>
    </tbody>
  </table>
  <p>总价格: ￥ {{ totalPrice }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data: function () {
    return {
      list: [
        {
          id: 1,
          price: 6188,
          counter: 1,
          name: 'iPhone 7',
          selected: false
        },
        {
          id: 2,
          price: 5888,
          counter: 1,
          name: 'iPad Pro',
          selected: false
        },
        {
          id: 3,
          price: 21488,
          counter: 1,
          name: 'MacBook Pro',
          selected: false
        }
      ]
    }
  },
  methods: {
    handleReduce: function (index) {
      if (this.list[index].counter > 1) {
        this.list[index].counter--
      }
    },
    handleAdd: function (index) {
      this.list[index].counter++
    },
    selectItem: function () { // 列表全选
      if (this.selectMessage === '全选') {
        this.list.forEach(function (item) {
          if (!item.selected) {
            item.selected = true
          }
        })
        this.selectMessage = '反选'
      } else {
        this.list.forEach(function (item) {
          if (item.selected) {
            item.selected = false
          }
        })
        this.selectMessage = '全选'
      }
    }
  },
  computed: {
    totalPrice: function () { // 计算属性--总价格
      var totalPrice = 0
      totalPrice = this.list.reduce(function (sum, item) {
        return sum + item.price * item.counter
      }, 0)
      return totalPrice.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    },
    selectMessage: function () {
      var counter = 0
      this.list.forEach(function (item) {
        if (item.selected) {
          counter++
        }
      })
      return counter === this.list.length ? '反选' : '全选'
    }
  }
}
</script>

<style scoped>
  table{
    margin: 4px 0px;
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    width: 100%
  }
  th,td{
    margin: 4px 0px;
    padding:4px 8px;
    border: 1px solid #e9e9e9;
    text-align: left ;
  }
  th{
    background: #f7f7f7 ;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
  tbody:hover{
    background-color: #f7f7f7;
  }
</style>
