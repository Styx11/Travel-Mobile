<template>
  <div>
    <div class="header">
      <div class="header-left">
        <img class="icon" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"/>
        <span>本周热门榜单</span>
      </div>
      <div class="header-right">
        <span>全部榜单</span>
        <span class="iconfont arrow">&#xe8b7;</span>
      </div>
    </div>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of list" :key="item.id">
          <router-link tag="div" :to="'/detail/' + item.id">
            <div class="imgWrapper">
              <img class="swiper-img" v-lazy="item.imgUrl" />
              <img
                v-if="index < 3"
                :src="topIcon(index)"
                class="topIcon"/>
            </div>
          </router-link>
          <div class="desc">
            <p>{{ item.name }}</p>
            <div class="priceWrapper">
              <span class="price">￥{{ item.price }}</span>起
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data: function () {
    return {
      swiperOption: {
        autoplay: false,
        freeMode: true,
        slidesPerView: 3,
        spaceBetween: 10
      },
      list: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
          price: 20,
          name: '故宫'
        }, {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg',
          price: 25,
          name: '八达岭长城'
        }, {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/d6/d62a708bc69472f5a3.img.jpg_150x150_54ba6c62.jpg',
          price: 35,
          name: '十渡聚龙湾玻璃栈道'
        }, {
          id: 4,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg',
          price: 14,
          name: '水立方'
        }, {
          id: 5,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/30/63494597d8a8346abd77cc9e1cd2ee79.jpg_150x150_7037ca72.jpg',
          price: 50,
          name: '定陵'
        }, {
          id: 6,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_150x150_27594131.jpg',
          price: 49,
          name: '北京欢乐谷'
        }
      ],
      iconsList: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png'
        }, {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png'
        }, {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png'
        }
      ]
    }
  },
  methods: {
    topIcon: function (index) {
      return this.iconsList[index].imgUrl
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
    .header-right
      float right
      .arrow
        margin-left -.09rem
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
    .imgWrapper
      position relative
      .swiper-img
        width: 2.4rem
      .topIcon
        position absolute
        top 0
        left 0
        z-index 1
        overflow hidden
        width .84rem
        height .4rem
    .desc
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      margin-top: .12rem
      color: #212121
      font-size: .36rem
      line-height: .32rem
      text-align: center
      .priceWrapper
        margin-top .2rem
        color #616161
        .price
          color #ff8300
</style>
