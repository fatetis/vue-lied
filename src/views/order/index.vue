<template>
    <div class="order">
        <header-not-dot :title="title" :type="2"></header-not-dot>
        <div class="container">
            <div class="wrapper">
                <div class="content">

                    <div class="address">
                        <div class="address_content address_border">
                            <div class="address_detail">
                                <div class="detail_content">
                                    <p class="p1">广东省东莞市莞城区</p>
                                    <p class="p2">愉景大厦3楼八块钱网愉景大厦3楼八块钱网愉景大厦3楼八块钱网</p>
                                </div>
                                <div class="address_arrow"></div>
                            </div>
                            <div class="address_user">
                                <p class="name">哈哈</p>
                                <p class="tel">138****800</p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="padding">
                        <div class="order_container">
                            <div class="order_wapper">
                                <div class="order_content">
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerNotDot from "@components/headerNotDot";
import inputNum from "@views/cart/components/inputNum";
// import { validator } from "@/util/validator.min"
export default {
    name: 'order',
    data() {
        return {
            title: '确认订单',
        }
    },
    components: {
        headerNotDot,
        inputNum
    },
    
}
</script>
<style lang="sass" scoped>
.order
    .container
        .wrapper
            .content
                .address
                    width: 100%
                    box-sizing: border-box
                    .address_border
                        background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAKBAMAAACOO0tGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURf///4u16Oxtbezz/J3B7NDh9vSmprjS8vGNjfjDw/vd3f7w8O57e0EOI68AAABSSURBVCjPY2CAAE4l7GACVJ4hUBArEIXJL8KuXw0mz4xdv2ABVJ77EHYDGmAGmGDXLwKT58CuX2cDTIEjdgOcYfJJ2A3Qgsmz4/CBwWgQUiMIAXzCOFELLk/nAAAAAElFTkSuQmCC) -14px bottom repeat-x
                        background-size: 128px 10px 
                    .address_content
                        padding: 24px 20px
                        .address_detail
                            position: relative
                            .detail_content
                                padding-right: 20px 
                                .p1
                                    @include sc(12px, #666)
                                .p2
                                    font-weight: 700
                                    padding: 12px 0
                                    @include sc(32px, #333)
                            .address_arrow
                                position: absolute
                                right: 0
                                top: 50%
                                margin-top: -8px
                                @include borderArrow(right, 16px, #666)
                        .address_user
                            width: 100%
                            @include sc(12px, #666)
                            p
                                display: inline-block
                                word-wrap: break-word
                                word-break: break-all
                            .name
                                margin-right: 12px
                .padding
                    .order_container
                        .order_wapper
                            .order_content
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

                        


</style>