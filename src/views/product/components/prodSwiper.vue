<template>
    <div class="prodSwiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide banner_item">
                    <img src="@assets/images/prod/thumb.jpg" alt="">
                </div>
                <div class="swiper-slide banner_item">
                    <img src="@assets/images/prod/thumb.jpg" alt="">
                </div>
                <div class="swiper-slide banner_item">
                    <img src="@assets/images/prod/thumb.jpg" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'prodSwiper',
    mounted() {
        this.initSwiper();
    },
    methods: {
        initSwiper() {
            new Swiper(".swiper-container", {
                pagination: '.swiper-pagination',
                paginationType : 'fraction',
                paginationClickable :true,
                loop: true
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
    .banner_item
        width: 100%
        img
            width: 100%
            height: 100%
            vertical-align: middle
                
</style>