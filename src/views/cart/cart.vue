<template>
    <div class="cart">
        <header-dot :title="title" :type="1"></header-dot>
        <div class="container" ref="cart_container">
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
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input class="checkbox checkbox_product" type="text">
                                </div>
                                
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
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>1355300</em>
                                                    .00
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1"></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
                                            <span class="item_action">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item_product">
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input class="checkbox checkbox_product" type="text">
                                </div>
                                
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
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>1355300</em>
                                                    .00
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1"></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
                                            <span class="item_action">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input class="checkbox checkbox_product" type="text">
                                </div>
                                
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
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>1355300</em>
                                                    .00
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1"></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
                                            <span class="item_action">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item_product">
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input class="checkbox checkbox_product" type="text">
                                </div>
                                
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
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>1355300</em>
                                                    .00
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1"></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
                                            <span class="item_action">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input class="checkbox checkbox_product" type="text">
                                </div>
                                
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
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>1355300</em>
                                                    .00
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1"></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
                                            <span class="item_action">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item_product">
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input class="checkbox checkbox_product" type="text">
                                </div>
                                
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
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>1355300</em>
                                                    .00
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1"></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
                                            <span class="item_action">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input class="checkbox checkbox_product" type="text">
                                </div>
                                
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
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>1355300</em>
                                                    .00
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1"></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
                                            <span class="item_action">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item_product">
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input class="checkbox checkbox_product" type="text">
                                </div>
                                
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
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>1355300</em>
                                                    .00
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1"></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
                                            <span class="item_action">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input class="checkbox checkbox_product" type="text">
                                </div>
                                
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
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>1355300</em>
                                                    .00
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1"></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
                                            <span class="item_action">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item_product">
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input class="checkbox checkbox_product" type="text">
                                </div>
                                
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
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>1355300</em>
                                                    .00
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1"></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
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
        <div class="fixbar">
            <div class="container">
                <div class="wrapper">
                    <div class="content clearfix">
                        <div class="total_checkbox">
                            <i class="checkbox checkbox_total"></i>
                            全选
                        </div>
                        <div class="text clearfix">
                            <div class="price clearfix">
                                <p class="p1">
                                    总计:
                                    <span>¥12525.00</span>
                                </p>
                                <p class="p2">已优惠¥1232.00</p>
                            </div>
                            <button class="settlement">已结算(<em>2</em>件)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-index></footer-index>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import headerDot from "@components/headerDot";
import footerIndex from "@components/footerIndex";
import inputNum from "@views/cart/components/inputNum";
export default {
    name: 'cart',
    data () {
        return {
            title: '购物车'
        }
    },
    components: {
        headerDot,
        footerIndex,
        inputNum
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.cart_container, {});
        });
    }
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
    background-color: #f2f2f2
    .container
        height: $hfcarttop
        overflow: hidden
        .wrapper
            .content
                padding: 20px
                .item
                    background-color: #fff
                    padding: 20px
                    margin-bottom: 40px
                    border-radius: 20px
                    overflow: hidden
                    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08)
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
                            .checkbox_wrap
                                width: 36px
                                height: 200px
                                float: left
                                position: relative
                                .checkbox_product
                                    position: absolute
                                    top: 50%
                                    transform: translateY(-50%)
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
                                        
                                    .sku_line_style
                                        width: 100%
                                        .sku_style:after
                                            content: ''
                                            @include borderArrow('bottom', 6px, #262626)
                                            position: absolute
                                            right: 12px
                                            top: 50%
                                            margin-top: -3px
                                        .sku_style
                                            display: inline-block
                                            color: #262626
                                            background-color: #f2f2f2
                                            position: relative
                                            border-radius: 16px
                                            padding-right: 28px
                                            padding-left: 12px
                                            box-sizing: border-box
                                            max-width: 100%
                                            line-height: 32px
                                            margin-bottom: 8px
                                            .sku_attr_style
                                                display: inline-block
                                                @include overwrap()
                                                max-width: calc( 100% - 96px )
                                                vertical-align: top
                                            .sku_service_style
                                                display: inline-block
                                                vertical-align: top
                                    .discount_line
                                        .discount
                                            margin-bottom: 12px
                                            .discount_item
                                                max-width: 100%
                                    .price_line
                                        .price
                                            float: left
                                            color: #f2270c
                                            font-weight: 550
                                            span
                                                em
                                                    font-weight: 700
                                                    font-size: 32px
                                        .num_wrap
                                            float: right
                                            display: inline-block
                                    .action
                                        margin-right: 6px
                                        margin-top: 6px
                                        .item_action
                                            float: right
                                            @include sc(12px, #333)
    .fixbar
        .container
            position: fixed
            bottom: $footerIndexTop
            z-index: $fixedPositionZIndex
            left: 0
            background-color: #fff
            height: 100px
            overflow: hidden
            width: 100%
            border-top: 1px solid #f2f2f2
            .wrapper
                margin: 0px 20px
                .content
                    .total_checkbox
                        float: left
                        padding-top: 14px 
                        @include sc(26px, #333)
                        .checkbox_total
                            margin-right: 20px
                    .text
                        float: right
                        .price
                            float: left
                            color: #333
                            margin-top: -10px
                            .p1
                                font-size: 30px
                                span
                                    font-size: 32px
                                    font-weight: 700
                            .p2   
                                float: right
                        .settlement
                            float: right
                            margin-left: 20px
                            background-color: #f2270c
                            border-radius: 40px
                            line-height: 76px
                            text-align: center
                            transform: translateY(-50%)
                            @include wh(226px, 76px)
                            @include sc(28px, #fff)
                            em
                                font-weight: 700

</style>