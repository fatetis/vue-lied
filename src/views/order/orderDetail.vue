<template>
    <div class="orderDetail">
        <header-dot :title="title" :type="4">
            <template v-slot:title>
                <p class="t-title">剩余23小时59分自动关闭</p>
            </template>
            <template v-slot:content>
                <div class="address-container">
                    <div class="address-content">
                        <div class="icon">
                            <i></i>
                        </div>
                        <div class="detail">
                            <div class="user-info">
                                <span class="name">何达哒</span>
                                <span class="mobile">18825099088</span>
                            </div>
                            <div class="address-info">
                                广东省 东莞事 莞城街道 莞城罗沙装饰材料新兴北路13号莞城罗沙装饰材料莞城罗沙装饰材料莞城罗沙装饰材料
                            </div>
                        </div>
                        <div class="modify">
                            <p>修改</p>
                        </div>
                    </div>
                </div>
            </template>
        </header-dot>
        <div class="vir-height"></div>
        <div class="container"  ref="order_wrapper">
            <div class="content">
                <div class="item">
                    <div class="seller">
                        <div class="name">
                            <i class="icon_shop"></i>
                            哈拉雷了
                            <i class="icon_arrow_right"></i>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="wrapper">
                            <div class="img">
                                <self-image width="100%" :src="img" radius="5"/>
                            </div>
                            <div class="content">
                                <p class="p1">lied</p>
                                <p class="p2">绿色，大号</p>
                                <p class="p3">3天内发货</p>
                            </div>
                            <div class="price">
                                ¥
                                <span>
                                    <em>1</em>.01
                                </span> 
                                <p class="num">×1</p>
                            </div>
                        </div>
                    </div>
                    <div class="extra">
                        <div class="list">
                            <p class="p1">商品总价</p>
                            <p class="p2">
                                <span>¥</span>
                                389<span>.00</span>
                            </p>
                        </div>
                        <div class="list">
                            <p class="p1">运费</p>
                            <p class="p2">
                                <span>¥</span>
                                0<span>.00</span>
                            </p>
                        </div>
                        <div class="list list-hover">
                            <p class="p1">满389减10</p>
                            <p class="p2">
                                <span>¥</span>
                                10<span>.00</span>
                            </p>
                        </div>
                    </div>
                    <div class="total_price">
                        <span class="text">实付款&nbsp;</span>
                        <span class="price">
                            <span class="scale">¥</span>
                            340<span class="scale">.21</span>
                        </span>
                    </div>
                </div>
                <div class="order-item">
                    <div class="content">
                        <div class="title">
                            <p>订单信息</p>
                        </div>
                        <div class="detail">
                            <div class="l-title">
                                <p>订单编号：</p>
                            </div>
                            <div class="r-data">
                                <p>20210705052052202</p>
                                <p class="copy">复制</p>
                            </div>
                        </div>
                        <div class="detail">
                            <div class="l-title">
                                <p>创建时间：</p>
                            </div>
                            <div class="r-data">
                                <p>2021-09-02 13:40:16</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="link">
                    <p class="p1"><span></span>联系卖家</p>
                    <p class="p2"><span></span>拨打电话</p>
                </div>
                <pay-recommand :productData="productData" :title="recommandTitle"></pay-recommand>
            </div>
        </div>
        <order-detail-footer></order-detail-footer>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import headerDot from "@components/headerDot";
import orderDetailFooter from "@components/orderDetailFooter";
import payRecommand from "@views/pay/components/payRecommand";
import { productList } from "@/service/getData";
export default {
    name: 'orderDetail',
    data() {
        return {
            title: '等待买家付款',
            recommandTitle: '你可能还喜欢',
            recommandPage: 0,
            productData: [], // 产品列表
            productDataMeta: [],
            img: 'http://www.lied.com/uploads/images/sku/20210311/894843ece059e130b083710916c90be0.png'
        }
    },
    components: {
        headerDot,
        payRecommand,
        orderDetailFooter
    },
    methods: {
        async getProductListData(){
            this.recommandPage++;
            await productList({
                page: this.recommandPage,
                include: 'medias'
            }).then((res) => {
                this.productData = this.productData.concat(res.data)
                this.productDataMeta = res.meta
            })
        },
    },
    mounted() {  
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.order_wrapper, {
                scrollbar: true,
                useTransition:false,
                // 上拉加载
                pullUpLoad: {
                    // 当上拉距离超过30px时触发 pullingUp 事件
                    threshold: -30
                },
            });
            this.scroll.on('pullingUp', () => {
                // console.log(this.productDataMeta.length)
                // 判断请求页数与总页数来显示底部区域
                if(this.productDataMeta.length == 0) this.getProductListData();
                if (this.productDataMeta.length !== 0 && this.recommandPage < this.productDataMeta.pagination.total_pages)
                    this.getProductListData(); 
                // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
                this.scroll.finishPullUp()
            });
        });
        this.getProductListData()
    }
}
</script>
<style lang="sass" scoped>
.orderDetail /deep/ .headerDot .wrapper .text
    padding-top: 20px
    padding-bottom: 0px 
    font-size: 32px
    line-height: 1
.orderDetail
    background-color: #f2f2f2
    height: 100vh
    .t-title
        text-align: center
        @include sc(24px, $fc)
    .address-container
        padding: 20px 20px
        .address-content
            padding: 20px
            background-color: $fc
            border-radius: 10px
            display: flex
            justify-content: space-between
            align-items: center
            .icon
                background-image: linear-gradient(45deg, #f8bf37, #fb5c25 60%)
                border-radius: 50%
                @include wh(70px, 70px)
                i
                    display: inline-block
                    @include wh(70px, 70px)
                    @include bis("../../assets/images/icon/location_32x32.png")
                    background-size: 60%
                    background-position: center
            .detail
                width: 64%
                .user-info
                    .name
                        font-weight: bold
                        font-size: 32px
                    .mobile
                        margin-left: 10px
                        @include sc(24px, #999999)
                .address-info
                    @include sc(26px, #999999)
                    @include overwraps(2)
            .modify
                p
                    padding: 10px 28px
                    @include sc(28px, #999999)
                    border: 1px solid #999999
                    border-radius: 50px
    .vir-height
        height: 184px
    .container
        position: relative
        height: $hOrderdetailTop
        overflow: hidden
        .content
            .item
                background: $fc
                padding: 20px
                .seller
                    display: flex
                    justify-content: space-between
                    .name
                        line-height: 32px
                        font-weight: 700
                        color: #333
                        .icon_shop
                            vertical-align: bottom
                            display: inline-block
                            @include wh(32px, 32px)
                            @include bis('../../assets/images/icon/cart_shop.png')
                        .icon_arrow_right
                            @include borderArrow('right', 10px, #999999)
                            margin-bottom: 2px
                    .status
                        color: $theam
                .detail
                    padding-top: 20px
                    .wrapper
                        display: flex
                        justify-content: space-between
                        .img
                            width: 26%
                        .content
                            width: 54%
                            box-sizing: border-box
                            padding: 0 18px
                            .p1
                                @include sc(28px, #262626)
                                @include overwraps(2)
                                font-weight: bold
                            .p2
                                margin: 10px 0
                                @include sc(24px, #999999)
                                @include overwraps(2)
                            .p3
                                @include sc(24px, #DCA94F)
                        .price
                            width: 20%
                            text-align: right
                            span
                                em
                                    font-weight: 600
                                    font-size: 32px
                            .num
                                margin: 10px 0
                                color: #999999
                .extra
                    .list
                        display: flex
                        justify-content: space-between
                        padding-top: 20px
                        .p1
                            @include sc(24px, #333333)
                        .p2
                            @include sc(24px, #999999)
                            span
                                display: inline-block
                                padding-bottom: 4px
                                transform: scale(0.75)
                    .list-hover
                        .p2
                            color: $theam
                .total_price
                    text-align: right
                    .text
                        font-weight: bold
                        @include sc(28px, #333333)
                    .price
                        @include sc(28px, $theam)
                        .scale
                            display: inline-block
                            padding-bottom: 4px
                            transform: scale(0.75)
                .order_price
                    margin: 28px 0
                    .price
                        margin-right: 10px
                        float: right
                        font-size: 24px
                        em.bold
                            font-weight: bold
                        em
                            font-size: 32px
                        span
                            em
                                font-weight: 600
                                font-size: 32px
                    .grey
                        color: #999999
                    .price:first-child
                        margin: 0
                .button
                    .more
                        position: relative
                        float: left   
                        .more_text
                            padding-top: 14px 
                            @include sc(12px, #999999)
                    .text
                        width: 80%
                        float: right
                        text-align: right
                        p
                            display: inline-block
                            border-radius: 50px
                            font-size: 24px
                            padding: 14px 18px
                            border: 1px solid #cfcfcf
                            margin-left: 16px 
                            min-width: 18%
                            text-align: center
                        p:first-child
                            margin-left: 0
                        p.hover
                            border: 1px solid $theam
                            color: $theam
            .order-item
                margin-top: 20px
                background-color: $fc
                padding-bottom: 20px
                .content
                    padding: 0 20px
                    .title
                        padding: 20px 0
                        p
                            font-weight: bold
                            @include sc(32px, #333333)
                    .detail
                        display: flex
                        justify-content: space-between
                        align-items: center
                        padding: 10px 0
                        @include sc(24px, #333333)
                        .l-title
                            p
                        .r-data
                            width: 70%   
                            display: flex
                            justify-content: space-between
                            p     
                            p.copy    
                                color: $theam
            .link
                display: flex
                justify-content: space-between
                border-top: 1px solid #f0f0f0
                background-color: $fc
                align-items: center
                p
                    width: 50%
                    @include sc(28px, #333333)
                    text-align: center
                    padding: 20px
                    
                .p1
                    display: flex
                    align-items: center
                    justify-content: center
                    span
                        display: inline-block
                        margin-right: 20px
                        @include wh(38px, 38px)
                        @include bis('../../assets/images/icon/kefu.png')
                .p2
                    position: relative
                    display: flex
                    align-items: center
                    justify-content: center
                    span
                        display: inline-block
                        margin-right: 20px
                        @include wh(38px, 38px)
                        @include bis('../../assets/images/icon/phone.png')
                .p2::before
                    content: ''
                    width: 1px
                    top: 0
                    transform: scale(0.6)
                    height: 100%
                    position: absolute
                    left: 0
                    background-color: #999999
                





</style>