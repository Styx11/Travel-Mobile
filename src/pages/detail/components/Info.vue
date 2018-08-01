<template>
  <div class="info">
    <div class="info-detail">
      <div class="block">
        <p class="rate">
          <span class="rate-num">{{ detail.rate }}</span>
          分 {{ rateMsg }}</p>
        <p class="detail">
          <span>{{ detail.comment }}条评论 </span>
          <span>{{ detail.strategy }}条攻略</span>
        </p>
        <span class="iconfont more">&#xe8b7;</span>
      </div>
      <div class="block">
        <p class="title">景点简介</p>
        <p class="detail">开放时间、贴士</p>
        <span class="iconfont more">&#xe8b7;</span>
      </div>
    </div>
    <div class="info-map">
      <span class="iconfont map">&#xe640;</span>
      北京市东城区景山前街4号
      <span class="iconfont more">&#xe8b7;</span>
    </div>
    <div
      class="info-notice"
      @click="infoClick"
    >
      <span class="iconfont horn">&#xe6ec;</span>
      <p class="content">
        <span
          v-for="item in notice"
          :key="item.id"
        >
          {{ item.id }}. {{ item.content }}
        </span>
      </p>
      <span class="iconfont more">&#xe8b7;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    notice: {
      type: Array
    }
  },
  data: function () {
    return {
      detail: {
        rate: 4.9,
        comment: 249909,
        strategy: 85
      },
      noticeShow: false
    }
  },
  methods: {
    infoClick: function () {
      this.noticeShow = true
      this.bus.$emit('infoClick', this.noticeShow)
    }
  },
  mounted: function () {
    this.bus.$on('noticeClick', (show) => {
      this.noticeShow = show
    })
  },
  computed: {
    rateMsg: function () {
      if (this.detail.rate === 5.0) {
        return '超赞'
      } else {
        return '很棒'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .info
    width 100%
    padding .1rem .1rem
    .info-detail
      width 100%
      line-height .42rem
      padding-top .1rem
      padding-bottom .1rem
      .block
        display inline-block
        width 48%
        position relative
        .rate
          font-size .28rem
          color #ff8300
          .rate-num
            font-size .46rem
        .detail
          color #9e9e9e
        .title
          font-size .32rem
        .more
          position absolute
          top .2rem
          right .1rem
    .info-map
      overflow hidden
      position relative
      width 95.5%
      line-height .36rem
      padding .2rem 0
      .map
        float left
        margin-right .2rem
      .more
        float right
    .info-notice
      padding-right 2rem
      width 95.5%
      line-height .7rem
      padding-top .2rem
      color #ff8300
      font-size .3rem
      background #fff5e5
      .content
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        display inline-block
        width 84%
        padding 0 .15rem
      .horn
        float left
        font-size .46rem
      .more
        float right
        color #000
</style>
