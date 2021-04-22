<template>
    <div class="scrollTop">
        <div class="center" v-show="showBackTop">
            <div class="back-shadow">
                <span class="control" @click="backTop">
                    <van-icon name="back-top" size="0.6rem" color="#8b8b8b" />
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'scrollTop',
    data() {
        return {
            showBackTop: false
        }
    },
    props: ['scrollObj'],
    methods: {
        backTop()
        {
            this.scrollObj.scrollTo(0, 0, 500)
        },
    },
    mounted() {
        setTimeout(() => {
            this.$nextTick(() => {
                this.scrollObj.on('scroll', (position) => {
                    // 头部滚动事件触发
                    let scrolly = ~position.y
                    this.showBackTop = false;
                })
                this.scrollObj.on('scrollEnd', (position) => {
                    // 头部滚动事件触发
                    let scrolly = ~position.y
                    this.showBackTop = scrolly >= 200 ? true : false;
                })
            })
        }, 500)
    }

}
</script>
<style lang="sass" scoped>
.scrollTop
    .center
        .back-shadow
            position: fixed
            top: 7rem
            left: 3rem
            width: 1rem
            height: 1rem
            border-radius: 50%
            background: hsla(0, 0%, 100%, 0.8)
            border: 1px solid $arrowGrey
            text-align: center
            z-index: $higherPositionZIndex
            .control
                line-height: 1.54rem
</style>