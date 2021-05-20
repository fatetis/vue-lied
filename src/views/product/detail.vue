<template>
    <div class="product">
        <prod-header :headerOpNum="headerOpNum" :headerArrowShow="headerArrowShow"></prod-header>
        <div class="container">
            <div class="wrapper" ref="prod_wrapper">
                <div class="content">
                    <!-- 产品轮播图 -->
                     <prod-swiper :bannerData="bannerData"></prod-swiper>
                     <!-- 产品名称 -->
                     <div class="title_wrap padding_container">
                         <div class="content">
                            <div class="price clearfix">
                                <p class="p1">
                                    ¥<span>
                                        <em>{{ productData.price && productData.price.int}}</em>
                                        .{{ productData.price && productData.price.point}}
                                        </span>
                                </p>
                                <p class="p2">
                                    <span class="collect"></span>
                                    收藏
                                </p>
                            </div>
                            <div class="title">{{ productData.name }}</div>
                            <div class="desc">{{ productData.description }}</div>
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
                            <div class="item clearfix" @click="handleShowPopup(!showPopup)">
                                <div class="float st">
                                    <p>已选</p>
                                </div>
                                <div class="float mt">
                                    <div class="text">
                                        <p class="p1">{{ this.skuName }}</p>
                                        <!-- <p class="p2">本商品支持保障服务，点击可选服务</p> -->
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
                    <div class="bg_wrap comment_wrap">
                        <div class="content padding_container">
                            <div class="item clearfix">
                            <div class="float st">
                                <p class="padding">评价</p>
                            </div>
                            <div class="arrow">
                                <small>好评度98% </small>
                                <span></span>
                            </div>
                            </div>
                            <div class="commen_item">
                                <div class="list clearfix">
                                    <div class="first_comment clearfix">
                                        <div class="img">
                                        <img src="@assets/images/userCenter/fatetis.jpg" alt="">
                                        </div>
                                        <div class="test">
                                            <div class="top">
                                                <p class="name">
                                                    这是名称
                                                    <i class="star_icon"></i>
                                                    <i class="star_icon"></i>
                                                    <i class="star_icon"></i>
                                                    <i class="star_icon half"></i>
                                                    <i class="star_icon empty"></i>
                                                </p>
                                                <p class="comment">这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论</p>
                                            </div>
                                            <div class="bottom">
                                                <p class="time">13小时前</p>
                                                <div class="right">
                                                    <small>188</small>
                                                    <span class="zan"></span>
                                                    <span class="reply"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reply_comment clearfix">
                                        <div class="img">
                                        <img src="@assets/images/userCenter/fatetis.jpg" alt="">
                                        </div>
                                        <div class="test">
                                            <div class="top">
                                                <p class="name">
                                                    <span class="first_name">这是名称2</span> 
                                                    <span class="arrow"></span>
                                                    <span class="reply_name">这是名称</span>
                                                </p>
                                                <p class="comment">这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论</p>
                                            </div>
                                            <div class="bottom">
                                                <p class="time">11小时前</p>
                                                <div class="right">
                                                    <small>188</small>
                                                    <span class="zan"></span>
                                                    <span class="reply"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list clearfix">
                                    <div class="first_comment clearfix">
                                        <div class="img">
                                        <img src="@assets/images/userCenter/fatetis.jpg" alt="">
                                        </div>
                                        <div class="test">
                                            <div class="top">
                                                <p class="name">
                                                    这是名称
                                                    <i class="star_icon"></i>
                                                    <i class="star_icon"></i>
                                                    <i class="star_icon"></i>
                                                    <i class="star_icon half"></i>
                                                    <i class="star_icon empty"></i>
                                                </p>
                                                <p class="comment">这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论</p>
                                            </div>
                                            <div class="bottom">
                                                <p class="time">13小时前</p>
                                                <div class="right">
                                                    <small>188</small>
                                                    <span class="zan"></span>
                                                    <span class="reply"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reply_comment clearfix">
                                        <div class="img">
                                        <img src="@assets/images/userCenter/fatetis.jpg" alt="">
                                        </div>
                                        <div class="test">
                                            <div class="top">
                                                <p class="name">
                                                    <span class="first_name">这是名称2</span> 
                                                    <span class="arrow"></span>
                                                    <span class="reply_name">这是名称</span>
                                                </p>
                                                <p class="comment">这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论</p>
                                            </div>
                                            <div class="bottom">
                                                <p class="time">11小时前</p>
                                                <div class="right">
                                                    <small>188</small>
                                                    <span class="zan"></span>
                                                    <span class="reply"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reply_comment clearfix">
                                        <div class="img">
                                        <img src="@assets/images/userCenter/fatetis.jpg" alt="">
                                        </div>
                                        <div class="test">
                                            <div class="top">
                                                <p class="name">
                                                    <span class="first_name">这是名称3</span> 
                                                    <span class="arrow"></span>
                                                    <span class="reply_name">这是名称2</span>
                                                </p>
                                                <p class="comment">这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论</p>
                                            </div>
                                            <div class="bottom">
                                                <p class="time">11小时前</p>
                                                <div class="right">
                                                    <small>188</small>
                                                    <span class="zan"></span>
                                                    <span class="reply"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="comment_more">

                            </div>
                        </div>
                    </div>
                    <!-- 商家描述 -->
                    <div class="bg_wrap">
                         <div class="content padding_container">
                            <div class="item clearfix">
                                <div class="seller clearfix">
                                    <div class="logo">
                                        <img :src="brandData.media && brandData.media.data.link" alt="">
                                    </div>
                                    <div class="name">
                                        <p class="text">{{ brandData.name }}</p>
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
                            <div v-html="productData.content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <prod-footer :showPopup="showPopup" @change="handleShowPopup" :zindex="zindex"></prod-footer>
        <transition name="fade">
            <prod-popup  @change="handleShowPopup" @handleChangeNum="handleChangeNum" @handleAttrSelect="handleAttrSelect" v-show="showPopup" :showPopup="showPopup" :skuData="skuData" :attrData="attrData" :attrHover="attrHover" :num="num"></prod-popup>
        </transition>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import prodHeader from '@components/prodHeader'
import prodSwiper from '@views/product/components/prodSwiper'
import prodRecommand from '@views/product/components/prodRecommand'
import prodFooter from '@components/prodFooter'
import prodPopup from '@views/product/components/prodPopup'
import { productDetail } from '@/service/getData'

export default {
    name: 'detail',
    data () {
        return {
            showPopup: false,
            zindex: true,
            bannerData: [],
            productData: [],
            brandData: [],
            attrData: [],
            skuData: [],
            attrHover: {},
            skuName: '',
            num: 1,
            headerOpNum: null, // 滚动时头部透明度的变化
            headerArrowShow: false // 滚动时头部箭头背景显示
        }
    },
    components: {
        prodHeader,
        prodSwiper,
        prodRecommand,
        prodFooter,
        prodPopup
    },
    methods: {
        async getProductData () {
            let res = await productDetail({
                include: 'attrs,skus,medias,brand'
            }, this.$route.params.id)
            this.bannerData = res.data.medias.data
            this.productData = res.data
            this.brandData = res.data.brand.data
            this.attrData = res.data.attrs.data
            this.skuData = res.data.skus.data
            for (let key in this.attrData) {
                this.attrHover[key] = 0;
            }
            this.skuNameChange()
        },
        handleShowPopup (bool) {
            this.showPopup = bool
            if(bool === false) {
                setTimeout((bool) => {
                    this.zindex = !bool
                }, 600)
            }else{
                this.zindex = !bool
            }
        },
        handleChangeNum (num) {
            this.num = Number(num)
            this.skuNameChange()
        },
        handleAttrSelect(index, key) {
            this.attrHover[index] = key;
            this.skuNameChange()
        },
        skuNameChange() {
            let desc = '';
            let arrDataLength = this.attrData.length
            for(let i = 0; i<arrDataLength; i++) {
                desc += "，" + this.attrData[i].values.data[this.attrHover[i]].value.data.name;
            }
            desc = desc.substr(1)
            this.skuName = desc + '，' + this.num + '个';
        }
    },
    mounted() {
        this.$nextTick(() => {
            let _this = this
            this.scroll = new Bscroll(this.$refs.prod_wrapper, {
                scrollbar: true,
                probeType: 3, // 是否会截流scroll事件
		        scrollY: true,  // 是否开启Y轴滚动方向
                useTransition: false, // 防止iphone微信滑动卡顿
            });
            this.scroll.on('scroll',(position)=>{
                // 头部滚动事件触发
                let scrolly = ~position.y
                if(scrolly >= 0) {
                    let scroolNum = Math.round((scrolly/88)*10)
                    _this.headerOpNum = (scroolNum >= 10) ? 'header-op0' : (scroolNum <= 2 ? null :'header-op' + scroolNum)
                    _this.headerArrowShow = scroolNum >= 5 ? true : false
                }
            })

        });
        this.getProductData()
    }
}
</script>

<style lang="sass" scoped>
// 从下往上进入tr动画
.fade-enter-active, .fade-leave-active 
    opacity: 1
    -ms-transform: scaleY(1)
    transform: scaleY(1)
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0.1s,
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0.1s
    -ms-transform-origin: center top
    transform-origin: center top
    transition: scaleY(1) .5s
    transform-origin: center bottom
.fade-enter, .fade-leave-to
    opacity: 0
    -ms-transform: scaleY(0)
    transform: scaleY(0)
.product .container .wrapper .content .comment_wrap .commen_item div:last-child
    margin-bottom: 0
    border-bottom: 0
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
                        @include sc(24px, #666)
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
                                width: 71px
                                p
                                    font-weight: 700
                                    position: relative
                                    padding-left: 15px 
                                    @include sc(26px, #262626)
                                p.padding:before
                                    content: ""
                                    position: absolute
                                    left: 0
                                    top: 50%
                                    transform: translateY(-50%)
                                    width: 6px
                                    height: 28px
                                    background-image: linear-gradient(180deg,#f5503a,#fad1cb)
                            .mt
                                .text
                                    width: calc( 100vw - 183px )
                                    overflow: hidden
                                    box-sizing: border-box
                                    padding: 0 30px
                                    p
                                        
                                    .p1
                                        margin-bottom: 6px
                                        @include sc(26px, #333)
                                        @include overwrap()
                                    .p2
                                        @include sc(24px, #8c8c8c)
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
                            .arrow
                                float: right
                                line-height: 1.2
                                small
                                    color: #999999
                                    vertical-align: middle
                                span
                                    vertical-align: middle
                                    @include borderArrow(right, 12px, #999)
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
                                    @include sc(26px, #333333)
                                    .text
                                        @include overwrap()
                                    .star
                                        span
                                            @include sc(24px, #666666)
                                            margin-right: 4px 
                                        .star_icon
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
                                    @include sc(24px, #8c8c8c)
                                    em
                                        display: inline-block
                                        margin: 0 10px
                                    .hover
                                        color: $theam
                                    span
                                        text-align: center
                                        line-height: 34px
                                        display: inline-block
                                        background-color: #fafafa
                                        border-radius: 34px
                                        @include wh(34px, 34px)
                .comment_wrap
                    .commen_item
                        .list
                            border-bottom: 1px solid #ececec
                            padding-bottom: 20px
                            margin-bottom: 20px
                            .img
                                border-radius: 50%
                                overflow: hidden
                                float: left
                                @include wh(72px, 72px)
                                img          
                                    @include wh(100%, 100%) 
                            .test  
                                float: left
                                margin-left: 20px 
                                margin-top: -4px  
                                width: calc(100% - 92px)
                                .top 
                                    .name
                                        font-weight: 600
                                        @include sc(28px, #333333) 
                                        span.arrow
                                            display: inline-block
                                            margin: 0 14px 2px 14px
                                            @include arrow(right, 8px, #999999)
                                    .comment
                                        margin-top: 6px 
                                        line-height: 1.5
                                        @include sc(24px, #666666)
                                .bottom
                                    display: flex
                                    justify-content: space-between
                                    margin-top: 10px
                                    .time
                                        @include sc(24px, #999999)
                                    .right
                                        small
                                            display: inline-block
                                            @include sc(24px, #999999)
                                        .zan
                                            display: inline-block
                                            margin-left: 10px 
                                            vertical-align: bottom
                                            @include wh(32px, 32px)
                                            @include bis('../../assets/images/icon/zan.png')
                                        .reply
                                            display: inline-block
                                            margin-left: 40px 
                                            vertical-align: bottom
                                            @include wh(28px, 28px)
                                            @include bis('../../assets/images/icon/comment.png')
                            .first_comment
                                .bottom
                                    border-bottom: 1px solid #ececec
                                    padding-bottom: 20px
                            .reply_comment
                                margin-left: 92px
                                margin-top: 20px
                                .img
                                    @include wh(40px, 40px)
                                .test
                                    width: calc(100% - 60px)
                    .comment_more
                        height: 20px
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

    .star_icon
        display: inline-block
        margin: 0 2px
        @include wh(20px, 20px)
        @include bis('../../assets/images/icon/star.png')
    .half
        @include bis('../../assets/images/icon/star_half.png')
    .empty
        @include bis('../../assets/images/icon/star_empty.png')
                       
</style>