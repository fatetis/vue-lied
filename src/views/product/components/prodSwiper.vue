<template>
    <div class="prodSwiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide banner_item" v-for="(item, index) of bannerData" :key="index">
                    <img :src="item.media.data.link" alt="">
                </div>
                <!-- <div class="swiper-slide banner_item">
                    <img src="@assets/images/prod/thumb.jpg" alt="">
                </div>
                <div class="swiper-slide banner_item">
                    <img src="@assets/images/prod/thumb.jpg" alt="">
                </div> -->
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'prodSwiper',
    props: {
        bannerData: Array
    },
    mounted() {
        this.initSwiper();
    },
    methods: {
        initSwiper() {
            new Swiper(".swiper-container", {
                pagination: '.swiper-pagination',
                paginationType : 'fraction',
                paginationClickable :true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
            });
        }
    }
}
</script>
<style lang="sass">
.prodSwiper .swiper-pagination
    display: inline-block
    width: auto
    background-color: rgba(0, 0, 0, 0.2)
    color: #fff
    bottom: 40px
    right: 0
    left: unset
    padding: 0 20px
    border-radius: 20px 0 0 20px
    box-sizing: border-box
</style>
<style lang="sass" scoped>
@import "../../../assets/css/plugins/swiper.min.css";
.prodSwiper
    width: 100%
    height: 0
    padding-bottom: 750px
    .banner_item
        width: 100%
        img
            width: 100%
            height: 100%
            vertical-align: middle
                
</style>