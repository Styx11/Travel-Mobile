<template>
  <div>
    <div class="header">
      周末去哪儿
    </div>
    <div class="item-wrapper">
      <div class="item" v-for="item in list" :key="item.id">
        <img class="item-img" v-lazy="item.imgUrl"/>
        <div class="item-info">
          <p class="item-name">{{ item.name }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data: function () {
    return {
      list: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          name: '漂流勇进，烧烤露营',
          desc: '轻松水上漂，任我乐逍遥'
        },
        {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          name: '北京清凉避暑胜地',
          desc: '到大自然中享受“天然空调”的清凉'
        },
        {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          name: '北京必游TOP10',
          desc: '来北京必去的景点非这些地方莫属'
        },
        {
          id: 4,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          name: '寻找北京的皇城范儿',
          desc: '数百年的宫廷庙宇，至今依旧威严霸气'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    overflow hidden
    padding .1rem .26rem
    line-height .86rem
    font-size .43rem
  .item-wrapper
    width 100%
    height 100%
    .item-img
      width 100%
      heifht 25%
    .item-info
      padding .2rem
      .item-name
        overflow hidden
        padding-right 1.4rem
        color #212121
        font-size .32rem
        line-height .48rem
        white-space nowrap
        text-overflow ellipsis
      .item-desc
        overflow hidden
        padding-right 1.4rem
        color #616161
        font-size .24rem
        line-height .42rem
        white-space nowrap
        text-overflow ellipsis
</style>
