<template>
    <div class="userCenter">
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="bg_limit">
                        <div class="bg ">
                            <img src="@assets/images/userCenter/bg.png" alt="">
                        </div>
                    </div>
                    
                    <!-- 用户模块 -->
                    <div class="user_content ">
                        <div class="clearfix">
                            <div class="float-left user_img">
                                <self-image :src="userImg" width="100%" />
                                <!-- <img :src="userImg" alt=""> -->
                            </div>
                            <div class="float-left user">
                                <p class="p1">{{ userName || '请设置昵称' }}</p>
                            </div>
                            <div class="float-right setting">
                                <router-link :to="{name: 'setting'}">
                                <span class="setting_icon"></span>
                                </router-link>
                            </div>
                        </div>
                        <div class="my_cell">
                            <div class="item">
                                <p class="num">8</p>
                                <p class="text">商品收藏</p>
                            </div>
                            <div class="item">
                                <p class="num">8</p>
                                <p class="text">店铺关注</p>
                            </div>
                            <div class="item">
                                <p class="num">8</p>
                                <p class="text">足迹</p>
                            </div>
                            <div class="item">
                                <p class="num">8</p>
                                <p class="text">常购商品</p>
                            </div>
                        </div>
                    </div>

                    <!-- 广告模块 -->
                    <user-center-swiper :bannerData="adv"></user-center-swiper>

                    <!-- 订单模块 -->
                    <div class="order_item">
                        <div class="top clearfix">
                            <p class="p1 float-left">我的订单</p>
                            <router-link :to="{name: 'orderList', query: {status: null}}">
                            <p class="p2 float-right">查看全部订单<span></span></p>
                            </router-link>
                        </div>
                        <div class="bottom">
                                <div class="item">
                                    <router-link :to="{name: 'orderList', query: {status: 0}}">
                                    <van-badge :content="orderData.wait_pay" max="99">
                                        <img src="@assets/images/icon/wait_pay.png" alt="">
                                    </van-badge>
                                    <p class="text">待付款</p>
                                    </router-link>
                                </div>
                                <div class="item">
                                    <router-link :to="{name: 'orderList', query: {status: 1}}">
                                    <van-badge :content="orderData.wait_delivery" max="99">
                                        <img src="@assets/images/icon/wait_delivery.png" alt="">
                                    </van-badge>
                                    <p class="text">待发货</p>
                                    </router-link>
                                </div>
                                <div class="item">
                                    <router-link :to="{name: 'orderList', query: {status: 3}}">
                                    <van-badge :content="orderData.wait_take" max="99">
                                        <img src="@assets/images/icon/wait_receive.png" alt="">
                                    </van-badge>
                                    <p class="text">待收货</p>
                                    </router-link>
                                </div>
                                <div class="item">
                                    <router-link :to="{name: 'orderList', query: {status: 4}}">
                                    <van-badge :content="orderData.wait_appraise" max="99">
                                        <img src="@assets/images/icon/wait_comment.png" alt="">
                                    </van-badge>
                                    <p class="text">评价</p>
                                    </router-link>
                                </div>
                                <div class="item">
                                    <van-badge :content="orderData.wait_refund" max="99">
                                        <img src="@assets/images/icon/wait_refund.png" alt="">
                                    </van-badge>
                                    <p class="text">退款/售后</p>
                                </div>
                        </div>
                    </div>

                    <!-- <div class="order_item coupon_container">
                        <div class="top clearfix">
                            <p class="p1 float-left">我的优惠券</p>
                            <p class="p2 float-right">更多<span></span></p>
                        </div>
                        <div class="coupon_content">
                            <coupon-swiper></coupon-swiper>
                        </div>
                    </div> -->

                </div>
            </div>
        </div>

        <footer-index></footer-index>
    </div>
</template>
<script>
import footerIndex from "@components/footerIndex";
import userCenterSwiper from "@views/user/components/userCenterSwiper";
// import couponSwiper from "@views/user/components/couponSwiper";
import { userCenter } from "@/service/getData"
import { setStore } from '@/util/mUtils'

export default {
    name: 'userCenter',
    data() {
        return {
            title: '个人中心',
            images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
            ],
            orderData: {},
            userName: '',
            userImg: '',
            adv: {},
        }
    },
    components: {
        footerIndex,
        userCenterSwiper,
        // couponSwiper
    },
    methods: {
        async userCenter() {
            let that = this
            let res = await userCenter({})
            that.orderData = res.order
            that.userImg = res.user_info.data.media ? res.user_info.data.media.data.link : null
            that.userName = res.user_info.data.name
            that.adv = res.adv.data
            setStore('userInfo', res.user_info)
        }
    },
    mounted() {
        this.userCenter()
    }
    
}
</script>
<style lang="sass" scoped>
.userCenter
    .use-color
        @include sc(24px, #f2270c)
    .receive-color
        @include sc(24px, $theam)
.userCenter
    width: 100vw
    height: 100vh
    background-color: $bc1
    overflow: hidden  
    .container
        .wrapper
            .content
                .bg_limit
                    position: relative
                    width: 100%
                    overflow: hidden  
                    height: 362px  
                    .bg
                        position: absolute
                        top: 0
                        left: -25%
                        width: 150%
                        height: 362px
                        overflow: hidden
                        border-radius: 0 0 100% 100%
                        img
                            vertical-align: top
                            width: 100%
                .user_content
                    position: absolute
                    top: 0
                    z-index: 2
                    width: 100%
                    box-sizing: border-box
                    padding: 24px 20px
                    .clearfix
                        .user_img
                            width: 104px
                            height: 104px
                            overflow: hidden
                            border-radius: 104px
                            img
                                width: 100%
                        .user
                            margin-top: 30px
                            margin-left: 20px 
                            p
                                @include sc(32px, $fc)
                        .setting
                            .setting_icon
                                display: inline-block
                                @include wh(40px, 40px)
                                @include bis('../../assets/images/icon/setting.png')
                    .my_cell
                        display: flex
                        justify-content: space-between
                        text-align: center
                        margin: 20px 36px
                        .num
                            @include sc(36px, $fc)
                        .text
                            @include sc(24px, $fc)
                .order_item
                    background-color: $fc
                    margin: 98px 20px 20px 20px
                    border-radius: 20px
                    position: relative
                    z-index: 99
                    .top
                        padding: 20px
                        border-bottom: 1px solid #ececec
                        .p1
                            font-weight: 700
                            @include sc(32px, #000000)
                        .p2
                            @include sc(26px, #858585)
                            span
                                margin-bottom: 3px
                                @include borderArrow(right, 11px, #858585)
                    .bottom
                        display: flex
                        justify-content: space-between
                        padding: 30px 20px
                        .item
                            text-align: center
                            img
                                height: 62px
                            .text
                                margin-top: 10px
                                @include sc(26px, #333333)
                .coupon_container
                    margin-top: 20px
                    .coupon_content
                        padding: 20px

</style>