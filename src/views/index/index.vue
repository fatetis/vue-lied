<template>
  <div class="index">
      <header-index></header-index>
      <home-swiper></home-swiper>
      <category></category>
  </div>
</template>

<script>
import headerIndex from '@components/headerIndex'
import category from "@views/index/components/category";
import homeSwiper from "@views/index/components/homeSwiper";
export default {
  name: 'index',
  components: {
    headerIndex,
    category,
    homeSwiper
  }
}
</script>
