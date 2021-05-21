<template>
    <div class="prodHeader">
        <div class="container" :class="[{'change-container': headerArrowShow}, headerOpNum !== null ? headerOpNum + ' ' + 'border-show' : '']">
            <div class="wrapper">
                <div class="content">
                    <div class="left" @click="back">
                        <span></span>
                    </div>
                </div>
                <div class="cl nav" v-show="headerOpNum !== null">
                    <nav>
                        <span class="hover">商品</span>
                        <span>评价</span>
                        <span>推荐</span>
                        <span>详情</span>
                    </nav>
                </div>
            </div>
        </div>
        <dot :type="headerArrowShow ? 3 : 2"></dot>

    </div>
</template>
<script>
import dot from '@components/common/dot'
export default {
    name: 'prodHeader',
    props: {
        type: {
            default: 1
        },
        headerArrowShow: {
            default: false
        },
        headerOpNum: {
            default: null
        }
    },
    components: {
        dot
    },
    methods: {
        back(){
            this.$router.go(-1);//返回上一层
        }
    }
}
</script>
<style lang="sass" scoped>
.prodHeader
    .container
        .wrapper
            width: 100%
            position: fixed
            top: 0
            left: 0
            height: $headerIndexTop
            z-index: $fixedPositionZIndex
            .content
                margin: 16px 20px 0 20px
                .left
                    background-color: #666
                    border-radius: 60px
                    @include wh(60px, 60px)
                    line-height: 60px
                    text-align: center
                    span
                        margin-left: 10px
                        @include borderArrow(left, 20px, $fc)
        .nav
            position: absolute
            top: 16px
            height: 60px
            line-height: 60px
            z-index: $fixedPositionZIndex
            span
                @include sc(32px, $headerBlack)
                margin: 0 14px 
                position: relative
            span.hover:after
                content: ''
                width: 100%
                position: absolute
                bottom: -8px
                left: 0
                height: 4px
                background-image: linear-gradient(45deg, $theam, $fc 100%)
    .change-container
        .wrapper
            .content
                .left
                    background-color: unset
                    span
                        @include borderArrow(left, 20px, $headerBlack)
    .border-show
        .wrapper
            border-bottom: 1px solid $bc
    .header-op1
        .left
            opacity: 0.9
        .nav
            opacity: 0.1
        .wrapper
            background: hsla(0, 0%, 100%, 0.1)
            border-color: hsla(0, 0%, 90%, 0.1)
    .header-op2
        .left
            opacity: 0.8
        .nav
            opacity: 0.2
        .wrapper
            background: hsla(0, 0%, 100%, 0.2)
            border-color: hsla(0, 0%, 90%, 0.2)
    .header-op3
        .left
            opacity: 0.7
        .nav
            opacity: 0.3
        .wrapper
            background: hsla(0, 0%, 100%, 0.3)
            border-color: hsla(0, 0%, 90%, 0.3)
    .header-op4
        .left
            opacity: 0.6
        .nav
            opacity: 0.3
        .wrapper
            background: hsla(0, 0%, 100%, 0.4)
            border-color: hsla(0, 0%, 90%, 0.4)
    .header-op5
        .left
            opacity: 0.5
        .nav
            opacity: 0.5
        .wrapper
            background: hsla(0, 0%, 100%, 0.5)
            border-color: hsla(0, 0%, 90%, 0.5)
    .header-op6
        .left
            opacity: 0.6
        .cl
            opacity: 0.6
        .wrapper
            background: hsla(0, 0%, 100%, 0.6)
            border-color: hsla(0, 0%, 90%, 0.6)
    .header-op7
        .left
            opacity: 0.7
        .cl
            opacity: 0.7
        .wrapper
            background: hsla(0, 0%, 100%, 0.7)
            border-color: hsla(0, 0%, 90%, 0.7)
    .header-op8
        .left
            opacity: 0.8
        .nav
            opacity: 0.8
        .wrapper
            background: hsla(0, 0%, 100%, 0.8)
            border-color: hsla(0, 0%, 90%, 0.8)
    .header-op9
        .left
            opacity: 0.9
        .cl
            opacity: 0.9
        .wrapper
            background: hsla(0, 0%, 100%, 0.9)
            border-color: hsla(0, 0%, 90%, 0.9)
    .header-op0
        .left
            opacity: 1
        .cl
            opacity: 1
        .wrapper
            background: hsla(0, 0%, 100%, 1)
            border-color: hsla(0, 0%, 90%, 1)
.prodHeader
    .header-op1
        /deep/ .dot
            .wrapper
                opacity: 0.9
.prodHeader
    .header-op2
        /deep/ .dot
            .wrapper
                opacity: 0.8
.prodHeader
    .header-op3
        /deep/ .dot
            .wrapper
                opacity: 0.7
.prodHeader
    .header-op4
        /deep/ .dot
            .wrapper
                opacity: 0.6
.prodHeader
    .header-op5
        /deep/ .dot
            .wrapper
                opacity: 0.5
.prodHeader
    .header-op6
        /deep/ .dot
            .wrapper
                opacity: 0.6
.prodHeader
    .header-op7
        /deep/ .dot
            .wrapper
                opacity: 0.7
.prodHeader
    .header-op8
        /deep/ .dot
            .wrapper
                opacity: 0.8
.prodHeader
    .header-op9
        /deep/ .dot
            .wrapper
                opacity: 0.9
.prodHeader
    .header-op0
        /deep/ .dot
            .wrapper
                opacity: 1
                
</style>