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
                    <!-- 继续剁手 -->
                    <pay-recommand :productData="productData" ></pay-recommand>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import headerOnlyReturn from "@components/headerOnlyReturn";
import payResultSwiper from "@views/pay/components/payResultSwiper";
import payRecommand from "@views/pay/components/payRecommand";
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
            page: 0
        }
    },
    components: {
        headerOnlyReturn,
        payResultSwiper,
        recommand,
        payRecommand
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
                scrollbar: true,
                click: true,
                useTransition: false
            });
        });
        if(this.orderno == undefined) this.$router.replace({name: 'userCenter'})
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
                        
</style>