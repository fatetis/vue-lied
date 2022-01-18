<template>
  <div class="category">
    <div class="content">
      <div class="box_item swiper-container1">
        <van-swipe style="overflow: unset">
          <van-swipe-item v-for="(item, index) in categoryData" :key="index">
            <div class="link"  v-for="(v, k) of item" :key="k">
              <a :href="v.url" >
                <self-image 
                    class="img_category"
                    :src="v.link"
                />
                <span class="text">{{ v.name }}</span>
              </a>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "category",
  props: ['categoryData'],
};
</script>
<style lang="sass" scoped>
.category /deep/ .van-swipe__indicators
  position: absolute
  bottom: -32px
.category
    position: relative
    width: 100%
    height: 332px
    touch-action: none
    overflow: hidden
    .box_item
      width: 100%
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