<template>
  <div class="homeSwiper">
    <div class="slider-bg"></div>
    <div class="lunbo">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) of swiperBanner" :key="index">
            <div class="img">
              <a :href="item.url">
                <img :src="item.link" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "@assets/js/plugins/swiper.min.js";
export default {
  name: "homeSwiper",
  props: ['swiperBanner'],
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        pagination: '.swiper-pagination',
        paginationClickable :true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
    }
  }
};
</script>
<style lang="sass">
.homeSwiper
  .swiper-container
    .swiper-pagination-bullet
      width: 10px
      height: 10px
    .swiper-pagination-bullet-active
      // width: 28px
      background-color: $theam
</style>
<style lang="sass" scoped>
@import "../../../assets/css/plugins/swiper.min.css";
.homeSwiper 
  width: 100%
  height: 0
  padding-bottom: 280px
  overflow: hidden
  touch-action: none
  .slider-bg
    background-image: -webkit-gradient(linear, left bottom, left top, from(#ffb97e),color-stop(50%, $theam))
    background-image: -webkit-linear-gradient(bottom, #ffb97e, $theam 50%)
    background-image: linear-gradient(0deg, #ffb97e, $theam 50%)
    position: absolute
    top: -$headerIndexTop
    left: -25%
    height: 280px
    z-index: 1
    width: 150%
    border-bottom-left-radius: 100%
    border-bottom-right-radius: 100%
  .lunbo
    width: calc(100% - 60px)
    margin: 0 auto
    overflow: hidden
    border-radius: 10px
    // background-color: #ccc
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          .img
            width: 100%
            height: 280px
            overflow: hidden
            img
              width: 100%
              height: 100%
              vertical-align: middle
</style>