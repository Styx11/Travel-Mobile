<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <detail-header></detail-header>
      <detail-main></detail-main>
      <Return></Return>
    </div>
  </div>
</template>

<script>
import Return from '@/pages/common/Return.vue'
import DetailHeader from './components/Header.vue'
import DetailMain from './components/Main.vue'
export default {
  name: 'Detail',
  components: {
    DetailHeader: DetailHeader,
    DetailMain: DetailMain,
    Return: Return
  }
}
</script>
