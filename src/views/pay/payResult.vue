<template>
    <div class="payResult"  ref="pay_wrapper">
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <header-only-return :title="title" :type="3"></header-only-return>
                    <div class="showResult cl">
                        <p class="p1"><i class="success"></i>支付成功</p>
                        <p class="p2">实付¥{{ payPrice }}</p>
                        <p class="p3">查看订单</p>
                    </div>
                    <div class="height"></div>
                    <!-- 支付成功后抽奖 -->
                    <div class="draw"></div>
                    <!-- 支付页广告图 -->
                    <div class="adv">
                        <pay-result-swiper></pay-result-swiper>
                    </div>
                    <!-- 今日推荐 -->
                    <div class="recommand_pay">
                        <div class="recommand_bg">
                            <div class="title clearfix">
                                <p class="left">
                                    <i class="small"></i>
                                    <i class="middle"></i>
                                    <i class="big"></i>
                                </p>
                                <p class="">继续剁手</p>
                                <p class="right ">
                                    <i class="big"></i>
                                    <i class="middle"></i>
                                    <i class="small"></i>
                                </p>
                                
                            </div>
                        </div>
                        <recommand 
                        :productData="productData"
                        v-show="!(JSON.stringify(productData) == '[]')"></recommand>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
                        <!-- {{ result === true ? '支付成功' : '支付失败'}} -->
<script>
import Bscroll from "better-scroll";
import headerOnlyReturn from "@components/headerOnlyReturn";
import payResultSwiper from "@views/pay/components/payResultSwiper";
import recommand from "@views/index/components/recommand";
import { productList } from "@/service/getData";
export default {
    name: 'payResult',
    data() {
        return {
            title: '支付结果',
            result: this.$route.params.result,
            payPrice: this.$route.params.payPrice,
            orderno: this.$route.params.orderno,
            productData: [], // 产品列表
        }
    },
    components: {
        headerOnlyReturn,
        payResultSwiper,
        recommand,
    },
    methods: {
        getProductListData(){
            this.page++;
            productList({
                page: this.page,
                include: 'medias'
            }).then((res) => {
                this.productData = this.productData.concat(res.data)
            })
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.pay_wrapper, {
                scrollbar: true
            });
        });
        this.getProductListData()
    }
}
</script>
<style lang="sass" scoped>
.payResult
    height: 100vh
    background-color: $bc1
    overflow: hidden
    .container
        .wrapper
            .content
                .showResult
                    top: 40px
                    text-align: center
                    .p1
                        font-weight: bold
                        @include sc(40px, #333333)
                        .success
                            display: inline-block
                            @include wh(32px, 32px)
                            border-radius: 50%
                            background-color: $theam
                            position: relative
                            margin-right: 10px
                        .success:before
                            content: ''
                            position: absolute
                            top: 7px
                            left: 12px
                            @include wh(6px, 12px)
                            border-bottom: 1px solid $fc
                            border-right: 1px solid $fc
                            transform: rotate(45deg)
                    .p2
                        font-weight: bold
                        @include sc(12px, #333333)
                        transform: scale(0.9)
                        margin-top: 6px
                    .p3 
                        padding: 10px 72px
                        border: 1px solid #cecece
                        margin: 28px 0 
                        border-radius: 12px
                        @include sc(26px, #646464)
            .height
                height: 180px
            .recommand_pay
                .recommand_bg
                    margin-top: 36px
                    margin-bottom: 20px
                    .title
                        text-align: center
                        font-weight: bold
                        @include sc(32px, #866023)
                        display: flex
                        justify-content: center
                        line-height: 1
                        .big
                            display: inline-block
                            @include wh(10px, 10px)
                            border-radius: 50%
                            background-image: linear-gradient(90deg, #ffb97e, #ff8620 50%)
                            margin-right: 32px
                            vertical-align: middle
                        .middle
                            display: inline-block
                            @include wh(6px, 6px)
                            border-radius: 50%
                            background-image: linear-gradient(90deg, #ffb97e, #ff8620 50%)
                            margin-right: 20px
                            vertical-align: middle
                        .small
                            display: inline-block
                            @include wh(3px, 3px)
                            border-radius: 50%
                            background-image: linear-gradient(90deg, #ffb97e, #ff8620 50%)
                            margin-right: 20px
                            vertical-align: middle
                        .right
                            .big
                                background-image: linear-gradient(-90deg, #ffb97e, #ff8620 50%)
                                margin-left: 32px
                                margin-right: 0
                            .middle
                                background-image: linear-gradient(-90deg, #ffb97e, #ff8620 50%)
                                margin-left: 20px
                                margin-right: 0
                            .small
                                background-image: linear-gradient(-90deg, #ffb97e, #ff8620 50%)
                                margin-left: 20px
                                margin-right: 0
                            
                                
                            
                        
</style>