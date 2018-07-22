<template>
  <div class="header">
    <div class="header-left" @click='handleRouter'>
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <a  class="input-text">
        <span class="iconfont">&#xe632;</span>
        <span>输入城市/景点/游玩主题</span>
      </a>
    </div>
    <div class="header-right">
      <router-link to="/city" class="router">
        <span>{{ city }}</span>
        <span class="iconfont arrow">&#xe6aa;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data: function () {
    return {
      city: '北京'
    }
  },
  methods: {
    handleRouter: function () {
      this.$router.go(-1)
    }
  },
  created: function () {
    this.bus.$on('citySelect', (msg) => {
      this.city = msg
    })
  },
  beforeDestroy: function () {
    this.bus.$off('citySelect', this.city)
  }
}
</script>

<style lang="stylus" scoped>
  .header
    display: flex;
    line-height: .86rem;
    background: #00bcd4;
    color: #fff;
    .header-left
      float: left;
      width: .64rem;
      text-align: center;
      font-size: .36rem;
    .header-input
      flex 1
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      box-flex: 1;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -ms-flex: 1;
      position: relative;
      height: .6rem;
      margin: .14rem 0;
      background: #fff;
      line-height: .6rem;
      border-radius: .06rem;
      .input-text
        display: inline-block;
        position: absolute;
        left: .3rem;
        top: 0;
        width: 3.6rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #ccc
    .header-right
      overflow hidden
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 1.24rem;
      float: right;
      text-align: center;
      .router
        color #fff
        .arrow
          margin-left: -.09rem;
          font-size: .32rem;
</style>
