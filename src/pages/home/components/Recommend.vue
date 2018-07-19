<template>
  <div>
    <div class="header">
      <div class="header-left">
        <img class="icon" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"/>
        <span>猜你喜欢</span>
      </div>
    </div>
    <div class="wrapper">
      <div
       class="itemWrapper"
       v-for="item in list"
       :key='item.id'
      >
        <div class="imgPane">
          <img class="img" v-lazy="item.imgUrl">
          <span class="abled" :style="isabled(item.abled).style">{{ isabled(item.abled).msg }}</span>
        </div>
        <div class="detailPane">
          <h1 class="title">{{ item.name }}</h1>
          <p class="rateWrapper">
            <rate :length="5" :value="item.rate"/>
            <span class="comment">{{ item.comment }}条评论</span>
          </p>
          <div class="priceWrapper">
            <span class="price">￥{{ item.price }}</span>起
          </div>
          <span class="place">{{ item.place }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data: function () {
    return {
      list: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
          abled: true,
          name: '金海湖风景区',
          rate: 5,
          comment: 1341,
          price: 18.8,
          place: '平谷区'
        },
        {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg',
          abled: false,
          name: '北京国际鲜花港',
          rate: 4,
          comment: 1916,
          price: 24.9,
          place: '顺义区'
        },
        {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_200x200_2cce447f.jpg',
          abled: true,
          name: '颐和园',
          rate: 5,
          comment: 27768,
          price: 48,
          place: '海淀区'
        },
        {
          id: 4,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
          abled: true,
          name: '北京动物园',
          rate: 4,
          comment: 4659,
          price: 39.9,
          place: '西城区'
        },
        {
          id: 5,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
          abled: false,
          name: '古北水镇',
          rate: 5,
          comment: 6844,
          price: 150,
          place: '密云县'
        }
      ]
    }
  },
  methods: {
    isabled: function (a) {
      let iconUrl = a ? 'url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)' : 'url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)'
      let msg = a ? '随买随用' : '可订明日'
      return {
        style: {
          'background-image': iconUrl
        },
        msg: msg
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    overflow hidden
    padding .24rem .26rem
    line-height .86rem
    .header-left
      float left
      text-align center
      font-size .43rem
      .icon
        width .4rem
        height .4rem
        margin-right -.09rem
  .wrapper
    .itemWrapper
      overflow hidden
      .imgPane
        position relative
        float left
        padding .1rem
        .img
          width 2.4rem
          height 2.4rem
        .abled
          position absolute
          top .1rem
          left .1rem
          width: 1.02rem;
          height: .38rem;
          background-size: 100%;
          color: #fff;
          font-size: .2rem;
          line-height: .38rem;
          text-indent: .04rem;
      .detailPane
        float left
        overflow hidden
        width 4.6rem
        height 0
        padding-bottom 2.5rem
        min-width 0
        position relative
        .title
          display inline-block
          font-size .42rem
          margin-top .14rem
          inline-height .44rem
        .rateWrapper
          position absolute
          bottom 1rem
          left 0
          .comment
            display inline-block
            padding .1rem 0 0 .1rem
        .priceWrapper
          display inline-block
          position absolute
          bottom .1rem
          left 0
          font-size .36rem
          color #616161
          .price
            color #ff8300
        .place
          position absolute
          bottom .1rem
          right 0
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
</style>
