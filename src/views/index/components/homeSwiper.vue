<template>
  <div class="homeSwiper">
    <div class="slider-bg"></div>
    <div class="lunbo" >
      <van-swipe style="width: 100%; height: 140px; border-radius: 5px; overflow: hidden" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in swiperBanner" :key="index">
          <a :href="image.url">
            <self-image 
                :src="image.link"
            />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  name: "homeSwiper",
  props: ['swiperBanner'],
};
</script>
<style lang="sass" scoped>
.homeSwiper 
  width: 100%
  overflow: hidden
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
    position: relative
    height: 280px
    overflow: hidden
    width: calc(100% - 60px)
    margin: 0 auto
    z-index: 2
</style>