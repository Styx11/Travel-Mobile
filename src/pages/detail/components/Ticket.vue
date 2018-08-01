<template>
  <div class="ticket">
    <div class="content" v-for="items in ticket" :key="items.id">
      <div class="header">
        <span class="header-icon"></span>
        <span class="header-title">{{ items.title }}</span>
      </div>
      <div class="detail" v-for="item in items.children" :key="item.id">
        <div class="detail-title">
          {{ item.title }}
          <span class="require" v-if="item.idRequired">凭身份证入园</span>
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
      "totalTicket": {
        "ticket": [{
          "id": 1,
          "title": "当日票",
          "children": [{
            "id": 1,
            "title": "【当日票】故宫老人票",
            "idRequired": true
          }]
        }, {
          "id": 2,
          "title": "预售学生票",
          "children": [{
            "id": 0,
            "title": "上午场",
            "idRequired": true
          }, {
            "id": 2,
            "title": "下午场",
            "idRequired": true
          }]
        }, {
          "id": 3,
          "title": "预售老人票",
          "children": [{
            "id": 1,
            "title": "上午场",
            "idRequired": true
          }, {
            "id": 2,
            "title": "下午场",
            "idRequired": true
          }]
        }, {
          "id": 4,
          "title": "导游讲解",
          "children": [{
            "id": 1,
            "title": "【大内御讲 9:00场】蓝琪儿格格带您穿越故宫",
            "idRequired": false
          }, {
            "id": 2,
            "title": "【09:00场次】故宫讲解服务",
            "idRequired": false
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
    .detail
      color #212121
      font-size .3rem
      text-indent .2rem
      position relative
      width 100%
      height 0
      padding-bottom 8%
      padding-top .35rem
      padding-left .1.8rem
      margin-bottom -.02rem
      .require
        color #888
        font-size .26rem
</style>
