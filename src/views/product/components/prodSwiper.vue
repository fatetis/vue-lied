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
                paginationClickable :true,
                loop: true
            });
        }
    }
}
</script>
<style lang="sass" scoped>
@import "../../../assets/css/plugins/swiper.min.css";
.prodSwiper
    .banner_item
        width: 100%
        img
            width: 100%
            height: 100%
                
</style>