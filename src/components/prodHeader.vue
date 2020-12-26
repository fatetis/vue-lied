<template>
    <div class="prodHeader">
        <div class="wrapper">
            <div class="content">
                <div class="left" @click="back">
                    <span></span>
                </div>
            </div>
        </div>
        <dot :type="2"></dot>
    </div>
</template>
<script>
import dot from '@components/common/dot'
export default {
    name: 'prodHeader',
    props: {
        type: {
            default: 1
        }
    },
    components: {
        dot
    },
    methods: {
        back(){
            this.$router.go(-1);//返回上一层
        },
    },
}
</script>
<style lang="sass" scoped>
.prodHeader
    .wrapper
        width: 100%
        position: fixed
        top: 0
        left: 0
        height: $headerIndexTop
        z-index: $fixedPositionZIndex
        .content
            margin: 20px 20px 0 20px
            .left
                background-color: #666
                border-radius: 60px
                @include wh(60px, 60px)
                line-height: 60px
                text-align: center
                span
                    margin-left: 10px
                    @include borderArrow(left, 20px, $fc)
</style>