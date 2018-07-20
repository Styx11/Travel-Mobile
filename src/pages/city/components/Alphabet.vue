<template>
  <div class="wrapper">
    <div
      class="letter"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      @click="handleClick"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      tapStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters: function () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updata: function () { // Ajax请求数据完成时执行一次
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClick: function (event) {
      let msg = event.target.innerText
      this.bus.$emit('handleClick', msg)
    },
    touchStart: function () {
      this.tapStatus = true
    },
    touchMove: function (event) {
      if (this.tapStatus) {
        if (this.timer) { // 函数节流
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let touchY = event.touches[0].clientY - 98
          let index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.bus.$emit('handleTouch', this.letters[index])
          }
        }, 16)
      }
    },
    touchEnd: function () {
      this.tapStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width 1.5em
    position absolute
    top 1.8rem
    right 0
    bottom 0
    display flex
    flex-direction column
    justify-content center
    text-align center
    .letter
      color #00bcd4
      font-size .32rem
      margin .04rem 0
</style>
