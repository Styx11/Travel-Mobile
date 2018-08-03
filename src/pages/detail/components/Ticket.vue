<template>
  <div class="ticket">
    <div class="content" v-for="items in ticket" :key="items.id">
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
  data: function () {
    return {
      show: false,
      "totalTicket": {
        "ticket": [{
          "id": 1,
          "title": "当日票",
          "children": [{
            "id": 1,
            "title": "【当日票】故宫老人票",
            "idRequired": true,
            "unfold": false,
            "detail": [{
              "id": 1,
              "title": "【上午场】故宫成人票凭身份证入园（快速入园）",
              "abled": "23:59前可订明日",
              "price": 60
            }, {
              "id": 2,
              "title": "【上午场】北京故宫成人票",
              "abled": "23:50前可订明日",
              "price": 60
            }, {
              "id": 3,
              "title": "【上午场】故宫成人票【刷证件入园，支持护照和港澳通行证】",
              "abled": "23:59前可订明日",
              "price": 60
            }]
          }]
        }, {
          "id": 2,
          "title": "预售学生票",
          "children": [{
            "id": 0,
            "title": "上午场",
            "idRequired": true,
            "unfold": false,
            "detail": [{
              "id": 1,
              "title": "【上午场】故宫学生票凭身份证入园（快速入园）",
              "abled": "23:59前可订明日",
              "price": 20
            }, {
              "id": 2,
              "title": "【上午场】故宫学生票【刷证件入园，支持护照和港澳通行证】",
              "abled": "23:50前可订明日",
              "price": 20
            }]
          }, {
            "id": 2,
            "title": "下午场",
            "idRequired": true,
            "unfold": false,
            "detail": [{
              "id": 1,
              "title": "【下午场】故宫学生票凭身份证入园（快速入园）",
              "abled": "23:59前可订明日",
              "price": 20
            }, {
              "id": 2,
              "title": "【下午场】故宫学生票【刷证件入园，支持护照和港澳通行证】",
              "abled": "23:50前可订明日",
              "price": 20
            }]
          }]
        }, {
          "id": 3,
          "title": "预售老人票",
          "children": [{
            "id": 1,
            "title": "上午场",
            "idRequired": true,
            "unfold": false,
            "detail": [{
              "id": 1,
              "title": "【上午场】故宫老人票凭身份证入园（快速入园）",
              "abled": "23:59前可订明日",
              "price": 30
            }, {
              "id": 2,
              "title": "【上午场】故宫老人票【刷证件入园，支持护照和港澳通行证】",
              "abled": "23:50前可订明日",
              "price": 30
            }]
          }, {
            "id": 2,
            "title": "下午场",
            "idRequired": true,
            "unfold": false,
            "detail": [{
              "id": 1,
              "title": "【下午场】故宫老人票凭身份证入园（快速入园）",
              "abled": "23:59前可订明日",
              "price": 30
            }, {
              "id": 2,
              "title": "【下午场】故宫老人票【刷证件入园，支持护照和港澳通行证】",
              "abled": "23:50前可订明日",
              "price": 30
            }]
          }]
        }, {
          "id": 4,
          "title": "导游讲解",
          "children": [{
            "id": 1,
            "title": "【大内御讲 9:00场】蓝琪儿格格带您穿越故宫",
            "idRequired": false,
            "unfold": false,
            "detail": [{
              "id": 1,
              "title": "【大内御讲9:00场】格格、阿哥带您穿越故宫（不含故宫门票）",
              "abled": "23:59前可订明日",
              "price": 65
            }, {
              "id": 2,
              "title": "【大内御讲9:00场】阿哥格格带您穿越故宫（含故宫+珍宝馆）",
              "abled": "23:50前可订明日",
              "price": 135
            }, {
              "id": 3,
              "title": "【大内御讲9:00场】阿哥格格带您穿越故宫不含故宫门票",
              "abled": "23:59前可订明日",
              "price": 65
            }]
          }, {
            "id": 2,
            "title": "【09:00场次】故宫讲解服务",
            "idRequired": false,
            "unfold": false,
            "detail": [{
              "id": 1,
              "title": "故宫博物院人工讲解服务+赠送无线耳麦(1.2米<=儿童免费)",
              "abled": "23:59前可订明日",
              "price": 39
            }, {
              "id": 2,
              "title": "【配无线耳麦】北京故宫-导游讲解服务（09:00场不含门票）",
              "abled": "23:50前可订明日",
              "price": 25
            }, {
              "id": 3,
              "title": "【9点/13点半场】故宫门票+资深导游人工讲解*配备无线耳麦",
              "abled": "23:59前可订明日",
              "price": 86
            }]
          }]
        }]
      }
    }
  },
  computed: {
    ticket: function () {
      let ticket = this.totalTicket['ticket']
      return ticket
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
