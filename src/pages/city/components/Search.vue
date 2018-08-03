<template>
  <div>
    <div class="search">
      <input
        type="text"
        class="search-input"
        v-model="keyword"
        placeholder="请输入城市名或拼音"
      >
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li
          class="search-content-item"
          v-for="item in list"
          :key="item.id"
          @click="searchSelect(item.name)"
        >{{ item.name }}</li>
        <li
          v-show="hasNoData"
          class="search-content-item"
        >未有匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Search',
  props: {
    cities: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    searchSelect: function (msg) {
      this.bus.$emit('searchSelect', msg)
    }
  },
  watch: {
    keyword: function () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let result = []
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasNoData: function () {
      return !this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search
    display flex
    background #00bcd4
    line-height .86rem
    padding .15rem 0
    .search-input
      box-sizing border-box
      border-radius 3px
      padding 0 .1rem
      margin 0 auto
      width 95%
      line-height .6rem
      text-align center
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.8rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-content-item
      width 100%
      height .28rem
      background #fff
      font-size .32rem
      line-height .24rem
      padding .25rem .2rem
      border-bottom 1px solid #dad5d5
</style>
