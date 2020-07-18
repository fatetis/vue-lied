<template>
  <div class="index">
      <header-index></header-index>
      <div class="index_container">
        <div class="index_wrapper" ref="index_wrapper">
          <div class="index_content">
            <home-swiper></home-swiper>
            <category></category>
            <special-banner></special-banner>
            <stroll-day></stroll-day>
            <recommand></recommand>
            <copy-right></copy-right>
          </div>
        </div>
      </div>
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
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.index_wrapper, {});
    });
  }
}
</script>


<style lang="sass" scoped>
  .index
    background-color: #f6f6f6
    position: relative
    overflow: hidden
    height: 100vh
    .index_container
      height: 89vh
      .index_wrapper
        position: absolute
        top: $headerIndexTop
        left: 0
        right: 0
        bottom: 0
        height: 89vh
        overflow: hidden
</style>
