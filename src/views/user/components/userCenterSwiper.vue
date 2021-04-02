<template>
    <div class="userCenterSwiper">
        <div class="content">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide banner_item" v-for="(item, index) of bannerData" :key="index">
                        <a :href="item.url">
                            <img :src="item.media.data.link" alt="图片加载失败">
                        </a>
                    </div>
                    <div class="swiper-slide banner_item" v-show="JSON.stringify(this.bannerData) === '[]'">
                        <img src="../../../assets/images/index/index.jpg" alt="图片加载失败">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'userCenterSwiper',
    props: ['bannerData'],
    methods: {
        initSwiper() {
            new Swiper(".swiper-container", {
                pagination: '.swiper-pagination',
                paginationClickable :true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
            });
        }
    },
    mounted() {
        this.initSwiper();
    },

}
</script>
<style lang="sass">
.userCenterSwiper
    .swiper-container
        overflow: hidden
        .swiper-pagination
            text-align: center
            .swiper-pagination-bullet:first-child
                border-radius: 30px 0 0 30px
            .swiper-pagination-bullet:last-child
                border-radius: 0 30px 30px 0
            .swiper-pagination-bullet
                width: 30px
                height: 4px
                margin: 0
            .swiper-pagination-bullet-active
                width: 30px
                height: 4px
                background-color: $theam
</style>
<style lang="sass" scoped>
@import "../../../assets/css/plugins/swiper.min.css";
.userCenterSwiper
    box-sizing: border-box
    width: 100%
    position: absolute
    top: 258px
    padding: 0 20px
    padding-bottom: 180px
    .content
        @include wh(100%, 180px)
        border-radius: 20px
        overflow: hidden
        .banner_item
            @include wh(100%, 180px)
            img
                width: 100%
                vertical-align: top
                
</style>