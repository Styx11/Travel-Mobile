<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <detail-header></detail-header>
      <detail-main></detail-main>
      <Gallery :imgList="pic"></Gallery>
      <Return></Return>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Return from '@/pages/common/Return.vue'
import DetailHeader from './components/Header.vue'
import DetailMain from './components/Main.vue'
import Gallery from '@/pages/common/Gallery.vue'
export default {
  name: 'Detail',
  components: {
    DetailHeader: DetailHeader,
    DetailMain: DetailMain,
    Return: Return,
    Gallery: Gallery
  },
  data: function () {
    return {
      pic: []
    }
  },
  methods: {
    getPic: function () {
      axios.get('/api/pic.json')
        .then(this.getPicSucc)
    },
    getPicSucc: function (res) {
      let data = res.data.data
      if (res.data.ret && data) {
        this.pic = data.pictures
      }
    }
  },
  mounted: function () {
    this.getPic()
  }
}
</script>
