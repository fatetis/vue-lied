<template>
    <div class="prodPopup">
        <div class="click_bg"></div>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="sku">
                        <div class="title clearfix">
                            <div class="float show_img">
                                <img src="@assets/images/prod/thumb.jpg" alt="">
                            </div>
                            <div class="float text">
                                <p class="price">
                                    ¥<span>12525</span>.00
                                </p>
                                <p class="detail">
                                    <span class="fixed">已选 </span>
                                     7层-102cm【深蓝防尘帘】【2.0升级】，1个
                                </p>
                            </div>
                        </div>
                        <div class="attr_container">
                            <div class="attr_wrapper" ref="attr_wrapper">
                                <div class="attr_content">

                                    <div class="item">
                                        <div class="attr_title">颜色</div>
                                        <div class="list">
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span class="hover">7层-102cm【条纹防尘帘】【2.0升级】</span>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="attr_title">颜色</div>
                                        <div class="list">
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span class="hover">7层-102cm【条纹防尘帘】【2.0升级】</span>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="attr_title">颜色</div>
                                        <div class="list">
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span class="hover">7层-102cm【条纹防尘帘】【2.0升级】</span>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="attr_title">颜色</div>
                                        <div class="list">
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span>7层-102cm【条纹防尘帘】【2.0升级】</span>
                                            <span class="hover">7层-102cm【条纹防尘帘】【2.0升级】</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="sku_footer clearfix">
                            <p class="p1">加入购物车</p>
                            <p class="p2">立即购买</p>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
    name: 'prodPopup',
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.attr_wrapper, {});
        });
    }
}
</script>
<style lang="sass" scoped>
.float
    float: left
.click_bg
    background-color: #666
    opacity: 0.6
.prodPopup
    .container
        position: fixed
        bottom: 0
        left: 0
        z-index: $higherPositionZIndex
        background-color: #fff
        height: 70vh
        width: 100%
        border-radius: 30px 30px 0 0
        overflow: hidden
        .wrapper
            .content
                padding: 36px
                .sku
                    .title
                        margin-bottom: 54px
                        .show_img
                            @include wh(200px, 200px)
                            overflow: hidden
                            border-radius: 10px
                            img
                                vertical-align: middle
                                @include wh(100%, 100%)
                        .text
                            width: calc( 100% - 200px )
                            padding-left: 20px
                            box-sizing: border-box 
                            margin-top: 60px
                            .price
                                color: #f23030
                                font-weight: 700
                                span
                                    font-size: 48px
                            .detail
                                word-break: break-all
                                color: #333
                                margin-top: 18px
                                @include overwraps(2)
                                span
                                    color: #8c8c8c
                    .attr_container
                        .attr_wrapper
                            height: $hpopuptop
                            overflow: hidden
                            .attr_content
                                .item
                                    .attr_title
                                        color: #262626
                                        font-weight: 700
                                        font-size: 26px
                                        margin-bottom: 20px
                                    .list
                                        width: 100%
                                        overflow: hidden
                                        span
                                            padding: 0 36px
                                            min-width: 40px
                                            max-width: 540px
                                            overflow: hidden
                                            height: 60px
                                            line-height: 60px
                                            float: left
                                            text-align: center
                                            margin-left: 24px
                                            margin-bottom: 20px
                                            font-size: 22px
                                            color: #262626
                                            background: #f2f2f2
                                            border-radius: 30px
                                        span.hover
                                            background: #fcedeb
                                            border: 1px solid #f2270c
                                            font-size: 22px
                                            color: #f2270c
                                            font-weight: 700
                                            height: 56px
                                            line-height: 56px
                    .sku_footer
                        p
                            display: inline-block
                            width: 46%
                            margin-right: 4%
                            box-sizing: border-box
                            height: $footerIndexTop
                            color: $fc
                            line-height: $footerIndexTop
                            text-align: center
                            border-radius: 40px
                        .p1
                            background-color: #f2270c
                        .p2
                            background-color: $theam
                            
                                
                                    

</style>