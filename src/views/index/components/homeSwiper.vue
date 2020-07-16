<template>
  <div class="homeSwiper">
    <div class="slider-bg"></div>
    <div class="lunbo">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="img">
              <img src="http://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/2020-07-03/6f1a4a3c9000272436ae97102457f74b.png?x-oss-process=image/format,jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img">
              <img src="http://bkqwmall.oss-cn-shenzhen.aliyuncs.com/images/2020-07-03/0282d89e961a4659f1d58f08f2245935.png?x-oss-process=image/format,jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img">
              <img src="@assets/images/index/index.jpg" alt="">
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
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        pagination: '.swiper-pagination',
        paginationClickable :true,
        loop: true
      });
    }
  }
};
</script>
<style lang="sass">
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
  margin-top: 88px
  .slider-bg
    background-image: -webkit-gradient(linear, left bottom, left top, from(#ffb97e),color-stop(50%, $theam))
    background-image: -webkit-linear-gradient(bottom, #ffb97e, $theam 50%)
    background-image: linear-gradient(0deg, #ffb97e, $theam 50%)
    position: absolute
    top: 0
    left: -25%
    height: 280px
    z-index: -1
    width: 150%
    border-bottom-left-radius: 100%
    border-bottom-right-radius: 100%
  .lunbo
    width: calc(100% - 40px)
    margin: 0 auto
    overflow: hidden
    border-radius: 10px
    background-color: #ccc
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          .img
            overflow: hidden
            height: 280px
            img
              width: 100%
              height: 100%
</style>