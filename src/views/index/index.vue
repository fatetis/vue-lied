<template>
  <div class="index">
      <header-index></header-index>
      <home-swiper></home-swiper>
      <category></category>
      <special-banner></special-banner>
      <stroll-day></stroll-day>
      <recommand></recommand>
      <copy-right></copy-right>
      <footer-index></footer-index>
      
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import headerIndex from '@components/headerIndex'
import homeSwiper from "@views/index/components/homeSwiper";
import category from "@views/index/components/category";
import specialBanner from "@views/index/components/specialBanner";
import strollDay from "@views/index/components/strollDay";
import recommand from "@views/index/components/recommand";
import copyRight from "@views/index/components/copyRight";
import footerIndex from "@components/footerIndex";
export default {
  name: 'index',
  components: {
    headerIndex,
    homeSwiper,
    category,
    specialBanner,
    strollDay,
    recommand,
    copyRight,
    footerIndex
  }
}
</script>
<style lang="sass">
body
  background-color: #f6f6f6
</style>

<style lang="sass" scoped>
  .index
    position: relative
    overflow: hidden
</style>
