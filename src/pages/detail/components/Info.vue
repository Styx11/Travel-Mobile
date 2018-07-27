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
    <div class="info-notice"></div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data: function () {
    return {
      detail: {
        rate: 4.9,
        comment: 249909,
        strategy: 85
      }
    }
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
</style>
