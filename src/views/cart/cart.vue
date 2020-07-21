<template>
    <div class="cart">
        <header-dot :title="title" :type="1"></header-dot>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="item">
                        <div class="seller clearfix">
                            <i class="checkbox checkbox_seller"></i>
                            <div class="text clearfix">
                                <i class="icon_shop"></i>
                                <div class="name">
                                    篮网家居专营店
                                    <i class="icon_arrow_right"></i>
                                </div>
                            </div>
                        </div>
                        <div class="item_product">
                            <div class="product">
                                <input class="checkbox checkbox_product" type="text">
                                <div class="text clearfix">
                                    <div class="img_wrap">
                                        <img class="prod_thumb" src="@assets/images/cart/thumb.jpg" alt="">
                                    </div>
                                    <div class="right">
                                        <div class="name">鞋架家用入户进门口玄关超薄简约多功能收纳组合六层楠竹北欧鞋柜 7层-102cm【深蓝防尘帘】【2.0升级】
                                        </div>
                                        <div class="sku_line_style sku_line">
                                            <div class="sku sku_style">
                                                <span class="sku_attr sku_attr_style">7层-102cm【深蓝防尘帘】【2.0升级】</span>
                                                <span class="sku_service sku_service_style">，选服务</span>
                                            </div>
                                        </div>
                                        <div class="sku_line_style discount_line">
                                            <div class="discount sku_style">
                                                <div class="sku_attr_style discount_item">
                                                满2件9折
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="price_line">
                                            <div class="price">
                                                ￥<span>300.00</span>
                                            </div>
                                            <div class="num_wrap">
                                                <span class="min"></span>
                                                <div class="input_wrap">
                                                    <input type="tel" class="num" value="1">
                                                </div>
                                                <span class="max"></span>
                                            </div>
                                        </div>
                                        <div class="action">
                                            <span class="item_action">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-index></footer-index>
    </div>
</template>
<script>
import headerDot from "@components/headerDot";
import footerIndex from "@components/footerIndex";
export default {
    name: 'cart',
    data () {
        return {
            title: '购物车'
        }
    },
    components: {
        headerDot,
        footerIndex
    },
}
</script>
<style lang="sass" scoped>
.checkbox
    float: left
    display: inline-block
    width: 36px
    height: 36px
    @include bis('../../assets/images/icon/cart_checkbox.png') 
.cart
    .container
        .wrapper
            .content
                .item
                    padding: 20px
                    margin: 20px
                    .seller
                        .checkbox_seller
                        .text
                            float: left
                            margin-left: 20px
                            padding-top: 2px
                            .icon_shop
                                display: inline-block
                                @include wh(32px, 32px)
                                @include bis('../../assets/images/icon/cart_shop.png')
                                float: left
                            .name
                                float: left
                                margin-left: 12px
                                line-height: 32px
                                font-weight: 700
                                color: #333
                                .icon_arrow_right
                                    @include borderArrow('right', 10px, #123)
                                    margin-bottom: 2px
                    .item_product
                        .product
                            margin-top: 20px
                            .checkbox_product
                            .text 
                                float: left
                                width: calc( 100% - 36px )
                                box-sizing: border-box
                                padding-left: 20px
                                .img_wrap
                                    overflow: hidden
                                    border-radius: 10px 
                                    float: left
                                    box-sizing: border-box
                                    @include wh(200px, 200px)
                                    .prod_thumb 
                                        width: 100%
                                .right
                                    float: left
                                    width: calc( 100% - 200px )
                                    padding-left: 20px
                                    box-sizing: border-box
                                    .name
                                        color: #262626
                                        margin-bottom: 12px
                                        @include overwraps(2)
                                    .sku_line_style:after
                                        content: ''
                                        @include borderArrow('bottom', 6px, #262626)
                                        position: absolute
                                        right: 12px
                                        top: 50%
                                        margin-top: -3px
                                    .sku_line_style
                                        background-color: #f2f2f2
                                        position: relative
                                        border-radius: 16px
                                        .sku_style
                                            transform: scale(0.9)
                                            color: #262626
                                            .sku_attr_style
                                                display: inline-block
                                                @include overwrap()
                                                // width: calc( 100% - 110px )
                                                vertical-align: middle
                                            .sku_service_style
                                                display: inline-block
                                                vertical-align: middle
                                    .discount_line
                                        .discount
                                            
                                    .price_line
                                        .price
                                                        

        
</style>