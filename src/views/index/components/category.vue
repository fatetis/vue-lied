<template>
  <div class="category">
    <div class="content">
      <div class="box_item swiper-container1">
        <div class=" clearfix swiper-wrapper">

          <div class="content swiper-slide" v-for="(item, index) of categoryData" :key="index">
            <div class="link"  v-for="(v, k) of item" :key="k">
              <a :href="v.url" >
                <img
                  class="img_category"
                  :src="v.link"
                  alt
                />
                <span class="text">{{ v.name }}</span>
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
export default {
  name: "category",
  // data () {
  //   return {
  //     categoryData: {}
  //   }
  // },
  props: ['categoryData'],
  methods: {
      initSwiper() {
        new Swiper(".swiper-container1", {
            pagination: '.swiper-pagination',
            paginationClickable :true,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });
      }
  },
  mounted() {
    this.initSwiper();
  }
};
</script>

<style lang="sass">
.category
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
    height: 332px
    touch-action: none
    overflow: hidden
    .box_item
      width: 100%
      .content
        overflow: hidden
        padding: 0 20px
        box-sizing: border-box
        .link
          width: 20%
          text-align: center
          display: block
          float: left
          overflow: hidden
          .img_category
            width: 80px
            height: 80px
            margin-top: 20px
            text-align: center
            vertical-align: top
            display: inline-block
          .text
            display: block
            margin-top: 12px
            color: #666
            @include overwrap()
</style>