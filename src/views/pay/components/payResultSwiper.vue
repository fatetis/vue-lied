<template>
    <div class="payResultSwiper">
        <div class="content">
            <van-swipe style="width: 100%; height: 90px;">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                <!-- <a :href="image.url"> -->
                    <self-image 
                        :src="image"
                    />
                <!-- </a> -->
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
export default {
    name: 'payResultSwiper',
    data() {
        return {
            images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
            ],
        }
    },
}
</script>
<style lang="sass" scoped>
.payResultSwiper /deep/ .van-swipe__indicators
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
.payResultSwiper
    box-sizing: border-box
    width: 100%
    padding: 0 20px
    .content
        @include wh(100%, 180px)
        border-radius: 20px
        overflow: hidden         
</style>