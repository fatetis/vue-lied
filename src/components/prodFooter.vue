<template>
    <div class="prodFooter">
        <div class="wapper">
            <div class="content clearfix">
                <div class="float icon_container">
                    <div class="icon_wrap clearfix">
                        <div class="icon">
                            <p class="kefu"></p>
                            客服
                        </div>
                        <div class="icon">
                            <p class="seller"></p>
                            店铺
                        </div>
                        <div class="icon">
                            <p class="cart"></p>
                            购物车
                        </div>
                    </div>
                </div>
                <div class="float btn_click clearfix">
                    <div class="text">
                        <p class="p1">加入购物车</p>
                    </div>
                    <div class="text">
                        <p class="p2">立即购买</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'prodFooter'
}
</script>
<style lang="sass" scoped>
.prodFooter
    height: $footerIndexTop
    .wapper
        position: fixed
        bottom: 0
        left: 0
        width: 100%
        z-index: $fixedPositionZIndex
        .content
            padding: 10px 0
            background-color: #fff
            box-sizing: border-box
            height: $footerIndexTop
            box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6)
            .float
                float: left
            .icon_container
                width: 40%
            .icon_wrap
                .icon
                    float: left
                    width: 33.33%
                    text-align: center
                    box-sizing: border-box
                    p
                        line-height: 20px
                        margin: 0 auto
                        @include wh(48px, 46px)
                    p.kefu
                        @include bis('../assets/images/icon/prod_customer_service.png')
                        background-size: 100%
                    p.seller
                        @include bis('../assets/images/icon/prod_seller.png')
                        background-size: 100%
                    p.cart
                        @include bis('../assets/images/icon/prod_cart.png')
                        background-size: 100%
            .btn_click
                width: 60%
                .text
                    width: 50%
                    padding-right: 10px
                    box-sizing: border-box
                    float: left
                    p
                        width: 100%
                        box-sizing: border-box
                        height: $footerIndexTop - 20px
                        color: $fc
                        line-height: $footerIndexTop - 20px
                        text-align: center
                        border-radius: 40px
                    .p1
                        background-color: #f2270c
                    .p2
                        background-color: $theam
</style>