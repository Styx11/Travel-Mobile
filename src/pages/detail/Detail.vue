<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <detail-header></detail-header>
      <detail-main :notice="notice" :tickets="tickets"></detail-main>
      <Gallery :imgList="pic"></Gallery>
      <Notice :notice="notice"></Notice>
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
import Notice from '@/pages/common/Notice.vue'
export default {
  name: 'Detail',
  components: {
    DetailHeader: DetailHeader,
    DetailMain: DetailMain,
    Return: Return,
    Gallery: Gallery,
    Notice: Notice
  },
  data: function () {
    return {
      pic: [],
      tickets: [],
      notice: [
        {
          id: 1,
          content: '除法定节假日，故宫博物院实行周一闭馆。'
        }, {
          id: 2,
          content: '如遇天安门广场戒严，请从故宫两侧（东华门或西华门），沿故宫城墙步行至午门验票！'
        }
      ]
    }
  },
  methods: {
    getDetail: function () {
      axios.get('/api/detail.json')
        .then(this.getDetailSucc)
    },
    getDetailSucc: function (res) {
      let data = res.data.data
      if (res.data.ret && data) {
        this.pic = data.pictures
        this.tickets = data.tickets
      }
    }
  },
  mounted: function () {
    this.getDetail()
  }
}
</script>
