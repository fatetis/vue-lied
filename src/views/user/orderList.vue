<template>
    <div class="orderList">
        <order-list-header></order-list-header>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="order_status">
                        <div class="order_status_item">
                            <ul>
                                <li class="hover">全部</li>
                                <li>待付款</li>
                                <li>待发货</li>
                                <li>待收货</li>
                                <li>待评价</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="item_wrapper"  ref="order_wrapper">
                            <div class="item_content">
                                <div class="item">
                                    <div class="seller">
                                        <div class="name">
                                            <i class="icon_shop"></i>
                                            荷塘月色
                                            <i class="icon_arrow_right"></i>
                                        </div>
                                        <div class="status">交易完成</div>
                                    </div>
                                    <div class="detail">
                                        <div class="img">
                                            <img src="@/assets/images/index/product_2.jpg" alt="">
                                        </div>
                                        <div class="content">
                                            <p class="p1">西部数据硬盘西部数据硬盘西部数据硬盘</p>
                                            <p class="p2">官方标配；2020随行版5TB</p>
                                            <p class="p3">3天内发货</p>
                                        </div>
                                        <div class="price">
                                            ¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                            <p class="num">×1</p>
                                        </div>
                                    </div>
                                    <div class="extra">
                                        <div class="label">
                                            <p class="title">运费险</p>
                                        </div>
                                        <div class="text">
                                            <p class="p1">退换货可自动理赔</p>
                                            <p class="p2">¥&nbsp;0.00×1</p>
                                        </div>
                                    </div>
                                    <div class="order_price clearfix">
                                        <div class="price ">
                                            <em>实付款&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                        <div class="price grey">
                                            <em>优惠&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                        <div class="price grey">
                                            <em>总价&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                    </div>
                                    <div class="button">
                                        <div class="text">
                                            <p class="p1">删除订单</p>
                                            <p class="p2">加入购物车</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="seller">
                                        <div class="name">
                                            <i class="icon_shop"></i>
                                            荷塘月色
                                            <i class="icon_arrow_right"></i>
                                        </div>
                                        <div class="status">交易完成</div>
                                    </div>
                                    <div class="detail">
                                        <div class="img">
                                            <img src="@/assets/images/index/product_2.jpg" alt="">
                                        </div>
                                        <div class="content">
                                            <p class="p1">西部数据硬盘西部数据硬盘西部数据硬盘</p>
                                            <p class="p2">官方标配；2020随行版5TB</p>
                                            <p class="p3">3天内发货</p>
                                        </div>
                                        <div class="price">
                                            ¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                            <p class="num">×1</p>
                                        </div>
                                    </div>
                                    <div class="extra">
                                        <div class="label">
                                            <p class="title">运费险</p>
                                        </div>
                                        <div class="text">
                                            <p class="p1">退换货可自动理赔</p>
                                            <p class="p2">¥&nbsp;0.00×1</p>
                                        </div>
                                    </div>
                                    <div class="order_price clearfix">
                                        <div class="price ">
                                            <em>实付款&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                        <div class="price grey">
                                            <em>优惠&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                        <div class="price grey">
                                            <em>总价&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                    </div>
                                    <div class="button">
                                        <div class="text">
                                            <p class="p1">删除订单</p>
                                            <p class="p2">加入购物车</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="seller">
                                        <div class="name">
                                            <i class="icon_shop"></i>
                                            荷塘月色
                                            <i class="icon_arrow_right"></i>
                                        </div>
                                        <div class="status">交易完成</div>
                                    </div>
                                    <div class="detail">
                                        <div class="img">
                                            <img src="@/assets/images/index/product_2.jpg" alt="">
                                        </div>
                                        <div class="content">
                                            <p class="p1">西部数据硬盘西部数据硬盘西部数据硬盘</p>
                                            <p class="p2">官方标配；2020随行版5TB</p>
                                            <p class="p3">3天内发货</p>
                                        </div>
                                        <div class="price">
                                            ¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                            <p class="num">×1</p>
                                        </div>
                                    </div>
                                    <div class="extra">
                                        <div class="label">
                                            <p class="title">运费险</p>
                                        </div>
                                        <div class="text">
                                            <p class="p1">退换货可自动理赔</p>
                                            <p class="p2">¥&nbsp;0.00×1</p>
                                        </div>
                                    </div>
                                    <div class="order_price clearfix">
                                        <div class="price ">
                                            <em>实付款&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                        <div class="price grey">
                                            <em>优惠&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                        <div class="price grey">
                                            <em>总价&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                    </div>
                                    <div class="button">
                                        <div class="text">
                                            <p class="p1">删除订单</p>
                                            <p class="p2">加入购物车</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="seller">
                                        <div class="name">
                                            <i class="icon_shop"></i>
                                            荷塘月色
                                            <i class="icon_arrow_right"></i>
                                        </div>
                                        <div class="status">交易完成</div>
                                    </div>
                                    <div class="detail">
                                        <div class="img">
                                            <img src="@/assets/images/index/product_2.jpg" alt="">
                                        </div>
                                        <div class="content">
                                            <p class="p1">西部数据硬盘西部数据硬盘西部数据硬盘</p>
                                            <p class="p2">官方标配；2020随行版5TB</p>
                                            <p class="p3">3天内发货</p>
                                        </div>
                                        <div class="price">
                                            ¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                            <p class="num">×1</p>
                                        </div>
                                    </div>
                                    <div class="extra">
                                        <div class="label">
                                            <p class="title">运费险</p>
                                        </div>
                                        <div class="text">
                                            <p class="p1">退换货可自动理赔</p>
                                            <p class="p2">¥&nbsp;0.00×1</p>
                                        </div>
                                    </div>
                                    <div class="order_price clearfix">
                                        <div class="price ">
                                            <em>实付款&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                        <div class="price grey">
                                            <em>优惠&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                        <div class="price grey">
                                            <em>总价&nbsp;</em>¥
                                            <span>
                                                <em>50000</em>.00
                                            </span>
                                        </div>
                                    </div>
                                    <div class="button">
                                        <div class="text">
                                            <p class="p1">删除订单</p>
                                            <p class="p2">加入购物车</p>
                                        </div>
                                    </div>
                                </div>
                                <pay-recommand :productData="productData" :title="recommandTitle"></pay-recommand>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import orderListHeader from "@components/orderListHeader";
import payRecommand from "@views/pay/components/payRecommand";
import { productList } from "@/service/getData";

export default {
    name: 'orderList',
    data() {
        return {
            productData: [], // 产品列表
            recommandTitle: '你可能还喜欢',
            recommandPage: 0
        }
    },
    components: {
        orderListHeader,
        payRecommand
    },
    methods: {
        getProductListData(){
            this.recommandPage++;
            productList({
                page: this.recommandPage,
                include: 'medias'
            }).then((res) => {
                this.productData = this.productData.concat(res.data)
            })
        }
    },
    mounted() {  
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.order_wrapper, {
                scrollbar: true
            });
        });
        this.getProductListData()
    }
}
</script>
<style lang="sass" scoped>
.orderList
    height: 100vh
    background-color: $bc1
    .container
        .wrapper
            .content
                .order_status
                    padding: 0 20px
                    margin-bottom: 20px 
                    .order_status_item
                        ul
                            display: flex
                            justify-content: space-between
                            text-align: center
                            @include sc(26px, #494949)
                            li
                                padding: 20px 0
                            li.hover
                                @include sc(26px, $theam)
                                border-bottom: 4px solid $theam
                .item_container
                    .item_wrapper
                        height: $horderlisttop
                        overflow: hidden
                        .item_content
                            .item
                                background: $fc
                                margin: 20px
                                overflow: hidden
                                border-radius: 20px
                                padding: 20px
                                .seller
                                    display: flex
                                    justify-content: space-between
                                    
                                    .name
                                        margin-left: 12px
                                        line-height: 32px
                                        font-weight: 700
                                        color: #333
                                        .icon_shop
                                            vertical-align: bottom
                                            display: inline-block
                                            @include wh(32px, 32px)
                                            @include bis('../../assets/images/icon/cart_shop.png')
                                        .icon_arrow_right
                                            @include borderArrow('right', 10px, #123)
                                            margin-bottom: 2px
                                    .status
                                        color: $theam
                                .detail
                                    display: flex
                                    justify-content: space-between
                                    padding: 20px 0
                                    .img
                                        width: 26%
                                        padding-bottom: 26%
                                        overflow: hidden
                                        border-radius: 10px 
                                        position: relative
                                        img
                                            position: absolute
                                            width: 100%
                                            height: 100%
                                            top: 0
                                            left: 0
                                    .content
                                        width: 52%
                                        box-sizing: border-box
                                        padding: 0 18px
                                        .p1
                                            @include sc(28px, #262626)
                                            @include overwraps(2)
                                            font-weight: bold
                                        .p2
                                            @include sc(24px, #999999)
                                            @include overwraps(2)
                                        .p3
                                            @include sc(24px, #DCA94F)
                                    .price
                                        span
                                            em
                                                font-weight: 600
                                                font-size: 28px
                                        .num
                                            color: #999999
                                            text-align: right
                                .extra
                                    display: flex
                                    justify-content: space-between
                                    .label
                                        width: 20%
                                        .title
                                            text-align: right
                                            @include sc(24px, #000000)
                                            font-weight: 500
                                    .text
                                        width: 76%
                                        display: flex
                                        justify-content: space-between
                                        .p1
                                            @include sc(24px, #999999)
                                        .p2
                                            @include sc(24px, #000000)
                                .order_price
                                    margin: 28px 0
                                    .price
                                        margin: 0 8px
                                        float: right
                                        font-size: 24px
                                        em
                                            font-size: 28px
                                        span
                                            em
                                                font-weight: 600
                                                font-size: 28px
                                    .grey
                                        color: #999999
                                    .price:last-child
                                        margin: 0
                                    .price:first-child
                                        margin: 0
                                .button
                                    .text
                                        width: 60%
                                        display: flex
                                        justify-content: space-between
                                        float: right
                                        p
                                            width: 46%
                                            border-radius: 50px
                                            text-align: center
                                            line-height: 64px
                                            color: #626262
                                            font-size: 28px
                                            border: 1px solid #cfcfcf
                                        

                                


</style>