<template>
  <div class="inputPane">
    <button
      @click='handleReduce'
      class="iconfont handleButton"
      :class="{disabledButton: currentValue <= min}"
    >&#xe60c;</button>
    <input
      type="text"
      class="input"
      :value="currentValue"
      @change="handleChange"
    >
    <button
      @click='handleAdd'
      class='iconfont handleButton'
      :class="{disabledButton: currentValue >= max}"
    >&#xe63b;</button>
  </div>
</template>

<script>
function isValueNumber (value) {
  return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '')
}
export default {
  name: 'InputNumber',
  props: {
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: +Infinity
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue: function (val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    value: function (val) {
      this.updataValue(val)
    }
  },
  methods: {
    handleReduce: function () {
      if (this.currentValue <= this.min) return
      this.currentValue--
      this.$emit('ruce', this.currentValue)
    },
    handleAdd: function () {
      if (this.currentValue >= this.max) return
      this.currentValue++
      this.$emit('add', this.currentValue)
    },
    handleChange: function (event) {
      var val = event.target.value.trim()
      var max = this.max
      var min = this.min
      if (isValueNumber(val)) {
        val = Number(val)
        this.currentValue = val
        if (val > max) {
          this.currentValue = max
        } else if (val < min) {
          this.currentValue = min
        }
      } else {
        event.target.value = this.currentValue
      }
    },
    updataValue: function (val) {
      if (val < this.min) val = this.min
      if (val > this.max) val = this.max
      this.currentValue = val
    }
  },
  mounted: function () {
    this.updataValue(this.value)
  }
}
</script>

<style lang="stylus" scoped>
  .inputPane
    display inline-block
    background #fff
    .input
      width .86rem
      height .49rem
      max-width 250px
      border 1px solid #ccc
    .handleButton
      cursor pointer
      padding 0 .1rem
      background #fff
      border 1px solid #ccc
    .disabledButton
      cursor default
      color #bfbfbf
</style>
