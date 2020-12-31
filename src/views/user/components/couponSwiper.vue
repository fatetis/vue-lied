<template>
    <div class="couponSwiper">
        <div class="content">
            <div class="swiper-container1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide banner_item 1">
                        <coupon-item></coupon-item>
                    </div>
                    <div class="swiper-slide banner_item 2">
                        <coupon-item></coupon-item>
                    </div>
                    <div class="swiper-slide banner_item 3">
                        <coupon-item></coupon-item>
                    </div>
                    <div class="swiper-slide banner_item 4">
                        <coupon-item></coupon-item>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import couponItem from "@views/user/components/couponItem";
export default {
    name: 'couponSwiper',
    props: {
        bannerData: Array
    },
    components: {
        couponItem
    },
    methods: {
        initSwiper() {
            new Swiper(".swiper-container1", {
                loop: true,
            });
        }
    },
    mounted() {
        this.initSwiper();
    },

}
</script>
<style lang="sass" scoped>
@import "../../../assets/css/plugins/swiper.min.css";
.couponSwiper
    box-sizing: border-box
    width: 100%
    padding: 0 20px
    overflow: hidden
    .content
        width: 400px
                
</style>