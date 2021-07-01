<template>
    <div class="userCenterSwiper">
        <div class="content">
            <van-swipe style="width: 100%; height: 90px">
                <van-swipe-item v-for="(item, index) in bannerData" :key="index">
                    <a :href="item.url">
                        <self-image
                            :src="item.media.data.link"
                        />
                    </a>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
export default {
    name: 'userCenterSwiper',
    props: ['bannerData'],
}
</script>
<style lang="sass" scoped>
.userCenterSwiper /deep/ .van-swipe__indicators
    text-align: center
    bottom: 10px
    .van-swipe__indicator:first-child
        border-radius: 30px 0 0 30px
    .van-swipe__indicator:last-child
        border-radius: 0 30px 30px 0
    .van-swipe__indicator
        width: 30px
        height: 4px
        margin: 0
    .van-swipe__indicator--active
        width: 30px
        height: 4px
        background-color: $theam
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