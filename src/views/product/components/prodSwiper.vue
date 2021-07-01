<template>
    <div class="prodSwiper">
        <van-swipe style="width: 100%;"  @change="onChange">
            <van-swipe-item v-for="(item, index) in bannerData" :key="index">
                <self-image
                    :src="item.media.data.link"
                />
                <!-- <img v-lazy="item.media.data.link" alt=""> -->
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">{{ current + 1 }}/ {{ bannerDataLength }}</div>
            </template>
        </van-swipe>
    </div>
</template>
<script>
export default {
    name: 'prodSwiper',
    data () {
        return {
            current: 0,
        }
    },
    props: {
        bannerData: {
            type: Array
        },
        bannerDataLength: {
            default: 0
        }
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
    },
}
</script>
<style lang="sass" scoped>
.prodSwiper
    width: 100%
    .custom-indicator
        position: absolute
        right: 0
        bottom: 5px
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