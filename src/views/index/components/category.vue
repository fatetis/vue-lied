<template>
  <div class="category">
    <div class="content">
      <div class="box_item swiper-container1">
        <div class=" clearfix swiper-wrapper">
          <div class="content swiper-slide">
            <router-link :to="{name: 'city'}" class="link">
              <img
                class="img_category"
                src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp"
                alt
              />
              <span class="text">领券1</span>
            </router-link>
            <router-link :to="{name: 'city'}" class="link">
              <img
                class="img_category"
                src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp"
                alt
              />
              <span class="text">领券2</span>
            </router-link>
          </div>
          <div class="content swiper-slide">
            <router-link :to="{name: 'city'}" class="link">
              <img
                class="img_category"
                src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp"
                alt
              />
              <span class="text">领券3</span>
            </router-link>
            <router-link :to="{name: 'city'}" class="link">
              <img
                class="img_category"
                src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp"
                alt
              />
              <span class="text">领券4</span>
            </router-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "category",
    mounted() {
        this.initSwiper();
    },
    methods: {
        initSwiper() {
        new Swiper(".swiper-container1", {
            pagination: '.swiper-pagination',
            paginationClickable :true,
            loop: true
        });
        }
    }
};
</script>

<style lang="sass">
.swiper-container1
  .swiper-pagination-bullet
    width: 10px
    height: 10px
  .swiper-pagination-bullet-active
    width: 20px
    height: 10px
    border-radius: 10px
    background-color: $theam
</style>

<style lang="sass" scoped>
.category
    position: relative
    width: 100%
    height: 328px
    touch-action: none
    overflow: hidden
    .box_item
        width: 100%
    .content
        .link
            width: 20%
            text-align: center
            display: block
            float: left
            .img_category
                width: 80px
                margin-top: 20px
                text-align: center
                vertical-align: top
                display: inline-block
            .text
                display: block
                margin-top: 12px
                color: #666
</style>