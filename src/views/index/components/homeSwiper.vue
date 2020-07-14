<template>
    <div class="homeSwiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
            <div class="swiper-slide">Slide 10</div>
            </div>
        </div>
    </div>

</template>


    
<script>
import '@assets/css/plugins/swiper.min.css'
import '@assets/js/plugins/swiper.min.js'
export default {
    name: 'homeSwiper',
    mounted () {
        this.initSwiper()
    },
    methods: {
        initSwiper () {
            new Swiper('.swiper-container')
        }
    }
}
</script>

<style lang="css" scoped>
    .homeSwiper {
        width: 100%;
        height: 0;
        padding-bottom: 31.2%;
        overflow: hidden;
        position: relative;
        z-index: 10000;
    }
        
</style>