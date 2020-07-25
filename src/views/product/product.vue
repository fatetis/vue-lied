<template>
    <div class="product">
        <prod-header></prod-header>
        <div class="container">
            <div class="wrapper" ref="prod_wrapper">
                <div class="content">
                    <!-- 产品轮播图 -->
                     <prod-swiper></prod-swiper>
                     <!-- 产品名称 -->
                     <div class="title_wrap padding_container">
                         <div class="content">
                            <div class="price clearfix">
                                <p class="p1">
                                    ¥<span>
                                        <em>12525</em>
                                        .00
                                        </span>
                                </p>
                                <p class="p2">
                                    <span class="collect"></span>
                                    收藏
                                </p>
                            </div>
                            <div class="title">鞋架家用入户进门口玄关超薄简约多功能收纳组合六层楠竹北欧鞋柜 7层-102cm【深蓝防尘帘】【2.0升级】</div>
                            <div class="desc">简易家具，送全套安装配件！无理由退换货，“零”风险购物！部分偏远地区不发货更多优惠猛戳我! </div>
                         </div>
                     </div>
                    <!-- 优惠信息 还有待完善 -->
                     <div class="bg_wrap discount_wrap">
                         <div class=" content padding_container">
                            <div class="item clearfix">
                                <div class="float st">
                                    <p>优惠</p>
                                </div>
                                <div class="float mt">
                                    <div class="text">
                                        <p class="p1">7层-102cm【深蓝防尘帘】【2.0升级】，1个</p>
                                        <p class="p2">本商品支持保障服务，点击可选服务</p>
                                    </div>
                                </div>
                                <div class="float lt">
                                    <span></span>
                                </div>
                            </div>
                         </div>
                     </div>

                    <!-- sku描述 -->
                     <div class="bg_wrap border_wrap">
                         <div class="content padding_container">
                            <div class="item clearfix">
                                <div class="float st">
                                    <p>已选</p>
                                </div>
                                <div class="float mt">
                                    <div class="text">
                                        <p class="p1">7层-102cm【深蓝防尘帘】【2.0升级】，1个</p>
                                        <p class="p2">本商品支持保障服务，点击可选服务</p>
                                    </div>
                                </div>
                                <div class="float lt">
                                    <span></span>
                                </div>
                            </div>
                            <div class="item clearfix">
                                <div class="float st">
                                    <p>送至</p>
                                </div>
                                <div class="float mt">
                                    <div class="text">
                                        <p class="p1">北京朝阳区三环到四环之间</p>
                                        <p class="p2"><span>现货</span>由商家从<em>浙江丽水市</em>发货</p>
                                    </div>
                                </div>
                                <div class="float lt">
                                    <span></span>
                                </div>
                            </div>
                            <div class="item clearfix">
                                <div class="float st">
                                    <p>运费</p>
                                </div>
                                <div class="float mt">
                                    <div class="text">
                                        <p class="p1">免运费</p>
                                    </div>
                                </div>
                                <div class="float lt">
                                </div>
                            </div>
                         </div>
                        <div class="detail_serve_container">
                            <div class="detail_serve">
                                <ul class="clearfix">
                                    <li>
                                        <span>商家发货&售后</span>
                                    </li>
                                    <li>
                                        <span>7天无理由退货</span>
                                    </li>
                                    <li>
                                        <span>送运费险</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- ###TODO 评价&问答 位置空缺-->

                    <!-- 商家描述 -->
                    <div class="bg_wrap">
                         <div class="content padding_container">
                            <div class="item clearfix">
                                <div class="seller clearfix">
                                    <div class="logo">
                                        <img src="@assets/images/prod/logo.jpg" alt="">
                                    </div>
                                    <div class="name">
                                        <p class="text">宝美宝美陶瓷宝美陶瓷宝美陶瓷宝美陶瓷宝美陶瓷宝美陶瓷宝美陶瓷宝美陶瓷陶瓷</p>
                                        <p class="star">
                                            <span>店铺星级</span>
                                            <i class="star_icon"></i>
                                            <i class="star_icon"></i>
                                            <i class="star_icon"></i>
                                            <i class="star_icon half"></i>
                                            <i class="star_icon empty"></i>
                                        </p>
                                    </div>
                                    <div class="more">
                                        <p class="p1">全部宝贝</p>
                                        <p class="p2">进店逛逛</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <ul class="clearfix">
                                        <li>宝贝描述<em class="hover">4.8</em><span class="hover">高</span></li>
                                        <li>卖家服务<em class="hover">4.8</em><span class="hover">高</span></li>
                                        <li>物流服务<em>4.4</em><span>平</span></li>
                                    </ul>
                                </div>
                            </div>
                         </div>
                    </div>
                    <!-- 猜你喜欢 -->
                    <prod-recommand></prod-recommand>
                    <div class="prod_desc">
                        <div class="divide-bar">
                            <span class="line"></span>
                            <div class="icon-info">
                                <span class="icon_picture"></span>
                                <span class="icon-text">详情</span>
                            </div>
                            <span class="line"></span>
                        </div>
                        <div class="show_img">
                            <img src="@assets/images/prod/detail.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <prod-footer></prod-footer>
        <prod-popup></prod-popup>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import prodHeader from '@components/prodHeader'
import prodSwiper from '@views/product/components/prodSwiper'
import prodRecommand from '@views/product/components/prodRecommand'
import prodFooter from '@components/prodFooter'
import prodPopup from '@views/product/components/prodPopup'

export default {
    name: 'product',
    components: {
        prodHeader,
        prodSwiper,
        prodRecommand,
        prodFooter,
        prodPopup
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.prod_wrapper, {});
        });
    }
}
</script>

<style lang="sass" scoped>
.padding_container
    padding: 0 36px
    background-color: #fff
.product .container .discount_wrap
    margin-bottom: 36px
.product .container .border_wrap .item
    border-bottom: 1px solid #efefef
.product .container .border_wrap .item:last-child
    border: 0
.product
    background-color: #f2f2f2
    .container
        .wrapper
            height: $hfprodtop
            overflow: hidden
            .content
                .title_wrap
                    border-radius: 0 0 32px 32px
                    over-hidden: hidden
                    .content
                        padding: 24px 0
                    .price
                        .p1
                            float: left
                            color: #f2270c
                            font-size: 32px
                            font-weight: 700
                            span
                                font-size: 36px
                                em
                                    font-size: 60px
                        .p2
                            float: right
                            text-align: center
                            margin-top: 6px
                            .collect
                                display: block
                                margin: 0 auto
                                @include wh(36px, 36px)
                                @include bis('../../assets/images/icon/collect.png')
                    .title
                        margin-top: 40px
                        font-weight: 700
                        @include sc(32px, #262626)
                    .desc   
                        margin-top: 40px 
                        @include sc(12px, #666)
                .bg_wrap
                    margin: 20px 0
                    border-radius: 32px 
                    overflow: hidden
                    .content
                        .item
                            padding: 36px 0
                            .float
                                float: left
                            .st
                                width: 56px
                                p
                                    font-weight: 700
                                    @include sc(26px, #262626)
                            .mt
                                .text
                                    width: calc( 100vw - 168px )
                                    overflow: hidden
                                    box-sizing: border-box
                                    padding: 0 30px
                                    p
                                        
                                    .p1
                                        margin-bottom: 6px
                                        @include sc(26px, #333)
                                        @include overwrap()
                                    .p2
                                        @include sc(12px, #8c8c8c)
                                        @include overwrap()
                                        span
                                            color: #f2270c
                                            margin-right: 6px
                                        em
                                            margin: 0 10px
                            .lt
                                span
                                    display: block
                                    @include wh(40px, 40px)
                                    @include bis('../../assets/images/icon/prod_dot.png')  
                            .seller
                                .logo
                                    float: left
                                    @include wh(100px, 100px)
                                    img
                                        @include wh(100%, 100%)
                                .name
                                    float: left
                                    width: calc( 100vw - 460px )
                                    box-sizing: border-box
                                    padding: 0 20px
                                    margin-top: 12px
                                    @include sc(26px, #333)
                                    .text
                                        @include overwrap()
                                    .star
                                        span
                                            @include sc(12px, #666)
                                            margin-right: 4px 
                                        i
                                            display: inline-block
                                            margin: 0 2px
                                            @include wh(20px, 20px)
                                            @include bis('../../assets/images/icon/star.png')
                                        .half
                                            @include bis('../../assets/images/icon/star_half.png')
                                        .empty
                                            @include bis('../../assets/images/icon/star_empty.png')
                                .more
                                    float: right
                                    margin-top: 16px
                                    p
                                        display: inline-block
                                        width: 130px
                                        height: 50px
                                        line-height: 50px
                                        text-align: center
                                        border-radius: 24px
                                    .p1
                                        border: 1px solid $theam
                                        color: $theam
                                    .p2
                                        margin-left: 20px
                                        background-color: $theam
                                        border: 1px solid $theam
                                        color: $fc
                            .list
                                margin-top: 20px
                                li
                                    float: left
                                    width: 33.33%
                                    text-align: center
                                    @include sc(12px, #8c8c8c)
                                    em
                                        display: inline-block
                                        margin: 0 10px
                                    .hover
                                        color: $theam
                                    span
                                        @include wh(34px, 34px)
                                        text-align: center
                                        line-height: 34px
                                        display: inline-block
                                        background-color: #fafafa
                                        border-radius: 34px
                                            
                .detail_serve_container
                    background-color: #fafafa
                    .detail_serve
                        padding: 20px 36px
                        li   
                            float: left
                            width: 33.33%
                            span
                                width: 100%
                                display: inline-block
                                padding-left: 36px
                                background-position: left center
                                @include bis('../../assets/images/icon/prod_yes.png')  
                                background-size: 9%
                                color: #8c8c8c
                        li:last-child
                            position: relative
                            span::after
                                content: ''
                                position: absolute
                                right: 0
                                top: 50%
                                transform: translateY(-50%)
                                display: inline-block
                                @include wh(40px, 40px)
                                @include bis('../../assets/images/icon/prod_dot.png')  
            .prod_desc
                .divide-bar
                    background-color: #f2f2f2
                    color: #999
                    display: -webkit-box
                    display: -webkit-flex
                    display: flex
                    justify-content: center
                    align-items: center
                    padding-bottom: 20px
                    font-size: 0
                    border-bottom: 1px solid #efefef
                    .line
                        display: inline-block
                        width: 84px
                        border-top: 1px solid #999
                    .icon-info
                        position: relative
                        top: -1px
                        margin: 0 20px
                        display: -webkit-flex
                        display: flex
                        flex-direction: row
                        align-items: center
                        justify-content: center
                        .icon-text
                            font-size: 26px
                            margin-left: 8px
                        .icon_picture
                            display: inline-block
                            @include wh(54px, 54px)
                            @include bis('../../assets/images/icon/picture.png')
                .show_img
                    width: 100%
                    img
                        width: 100%
                        height: 100%
                        vertical-align: middle                             
</style>