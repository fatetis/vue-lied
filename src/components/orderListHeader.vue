<template>
    <div class="orderListHeader">
        <div class="container">
            <div class="wrapper">
                <div class="content clearfix">
                    <div class="item left">
                        <span class="arrow"></span>
                        <span class="back" @click="back"></span>
                    </div>
                    <div class="item search">
                        <div class="input">
                            <div type="text">请输入商品名称</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <dot :type="3"></dot>
    </div>
</template>
<script>
import dot from "@components/common/dot";
export default {
    name: "orderListHeader",
    props: {
        title: {
            type: String,
            default: "LIED商城",
        },
    },
    components: {
        dot,
    },
    methods: {
        back() {
            this.$router.go(-1); //返回上一层
        },
    },
};
</script>
<style lang="sass" scoped>
.orderListHeader
    height: $headerIndexTop
.container
    position: fixed
    width: 100%
    background: $bc1
    height: $headerIndexTop
    box-sizing: border-box
    top: 0
    left: 0
    width: 100%
    z-index: $fixedPositionZIndex
    .wrapper
    .content
        .item
            float: left
        .left
            position: absolute
            left: 0
            padding-left: 20px
            width: 66px
            box-sizing: border-box
            height: $headerIndexTop
        .back
            width: 66px
            height: $headerIndexTop
            position: absolute
            left: 0px
            top: 0px
            cursor: pointer 
            z-index: 1
        .arrow
            display: inline-block
            position: relative
        .arrow:before
            content: ''
            position: absolute
            top: 8px
            left: 5px
            @include borderArrow(left, 20px, $arrowGrey)
        .search
            height: 64px
            margin-top: 12px
            box-sizing: border-box
            overflow: hidden
            position: relative
            width: 100%
        .input
            height: 60px
            background: #f7f7f7
            position: absolute
            top: 0
            left: 0
            width: 76vw
            margin-left: 76px
            border-radius: 30px
            background-size: 6%
            background-position: 20px center
            border: 1px solid $theam
            padding-left: 30px
            line-height: 60px
            box-sizing: border-box
            @include sc(24px, #8b8b8b)
</style>