<template>
  <div class="ticket">
    <div class="content" v-for="items in tickets" :key="items.id">
      <div class="header">
        <span class="header-icon"></span>
        <span class="header-title">{{ items.title }}</span>
      </div>
      <div class="detail" v-for="item in items.children" :key="item.id">
        <div class="detail-title">
          <div class="title">
            {{ item.title }}
            <span class="require" v-if="item.idRequired">凭身份证入园</span>
          </div>
          <div class="price" v-if="item.detail">
            <span class="price-mp">
              ￥<em class="price-num">{{ getMin(item.detail) }}</em>
            </span>
            起
          </div>
          <span
            v-if="!item.unfold"
            class="iconfont unfold"
            @click="item.unfold = !item.unfold"
          >&#xe8ea;</span>
          <span
            v-else
            class="iconfont unfold"
            @click="item.unfold = !item.unfold"
          >&#xe8eb;</span>
        </div>
        <div class="children" v-show="item.unfold">
          <div v-for="item in item.detail" :key="item.id" class="content">
            <div class="detail">
              <span>{{ item.title }}</span>
              <div class="abled">
                <img class="time" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png"/>
                {{ item.abled }}
              </div>
            </div>
            <div class="price">
              <div class="price-mp">
                ￥<em class="price-num">{{ item.price }}</em>
              </div>
              <div class="price-button">预订</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ticket',
  props: {
    tickets: {
      type: Array
    }
  },
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    getMin: function (list) {
      let min = list[0].price
      list.forEach(function (item) {
        if (item.price < min) {
          min = item.price
        }
      })
      return min
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    .header
      position relative
      width 100%
      height 0
      padding-bottom 10%
      margin-bottom -.02rem
      .header-icon
        display inline-block
        position absolute
        width .36rem
        height .36rem
        top .26rem
        left .2rem
        background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right .1rem
        background-size .4rem 3rem
      .header-title
        display inline-block
        position absolute
        top .26rem
        left .6rem
        font-size .36rem
        line-height .36rem
    .detail-title
      color #212121
      font-size .3rem
      text-indent .2rem
      position relative
      width 100%
      line-height .48rem
      padding-top .24rem
      padding-left .1.8rem
      margin-bottom .1rem
      .title
        width 75%
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        .require
          color #888
          font-size .26rem
      .unfold
        position absolute
        top .3rem
        right .3rem
      .price
        display inline-block
        position absolute
        top .3rem
        right 1rem
        text-align center
        color #9e9e9e
        .price-mp
          color #ff9800
          font-size .24rem
          .price-num
            margin-left .04rem
            font-size .4rem
            line-height .4rem
    .children
      width 100%
      background #f5f5f5
      .content
        overflow hidden
        width 100%
        padding .1rem .1rem
        .detail
          width 70%
          float left
          color #212121
          font-size .28rem
          line-height .4rem
          text-indent .2rem
          .abled
            font-size .24rem
            color: #888
            .time
              display inline-block
              width .2rem
              line-height .6rem
              max-height .32rem
              margin-right .04rem
              vertical-align 0
        .price
          width 25%
          float left
          padding-left 5%
          text-align center
          color #9e9e9e
          .price-mp
            margin-top 8%
            color #ff9800
            font-size .28rem
            .price-num
              margin-left .04rem
              font-size .4rem
              line-height .4rem
          .price-button
            width 80%
            line-height .6rem
            margin-left 9%
            margin-bottom 15%
            font-size .28rem
            color #fff
            background #ff9800
            border-radius .08rem
</style>
