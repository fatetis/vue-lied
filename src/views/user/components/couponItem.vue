<template>
    <div class="couponItem">
        <div class="item">
            <div class="use-color content clearfix">   
                <div class="float-left detail">
                    <div class="p1">
                        ¥<span>
                        <em>2000</em>
                        .00
                        </span>满减券
                    </div>
                    <p class="p2">满200减100</p>
                    <p class="p3">平台通用（特殊商品）</p>
                </div>
                <div class="float-right button">
                    <p>立即使用</p>
                </div>
                <div class="cover-top"></div>
                <div class="cover-bottom"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'couponItem'
}
</script>
<style lang="sass" scoped>
.couponItem
    .use-color
        @include sc(12px, #f2270c)
    .receive-color
        @include sc(12px, $theam)
.couponItem
    .item
        width: 380px
        box-sizing: border-box
        .content
            padding: 10px
            border: 1px solid $headerBorderColor
            border-radius: 20px
            position: relative
            // overflow: hidden
            .detail
                padding-top: 20px
                width: 280px
                .p1
                    font-weight: 550
                    @include overwrap()
                    span
                        em
                            font-weight: 700
                            font-size: 42px
                .p2
                    @include overwrap()
                .p3
                    @include sc(12px, #858585)
                    @include overwrap()
            .button
                width: 40px
                margin: 0 auto
                border-left: 1px dashed $headerBorderColor
                padding-left: 10px 
                box-sizing: border-box
                p
                    word-wrap: break-word
                    line-height: 32px
                    transform: scale(0.86)
            .cover-top
                position: absolute
                right: 38px
                top: -10px
                z-index: 2
                background-color: $fc
                @include wh(20px, 20px)
                border-radius: 50%
                border-right: 1px solid $headerBorderColor
                border-bottom: 1px solid $headerBorderColor
                transform: rotate(45deg)
            .cover-bottom
                position: absolute
                right: 38px
                bottom: -10px
                z-index: 2
                background-color: $fc
                @include wh(20px, 20px)
                border-radius: 50%
                border-right: 1px solid $headerBorderColor
                border-bottom: 1px solid $headerBorderColor
                transform: rotate(-135deg)
</style>