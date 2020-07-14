<template>
  <div class="homeSwiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
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

      });
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../../assets/css/plugins/swiper.min.css";
.homeSwiper 
  width: 100%
  height: 0
  padding-bottom: 31.2%
  overflow: hidden
  position: relative
  touch-action: none

</style>