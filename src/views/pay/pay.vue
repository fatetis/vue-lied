<template>
    <div class="payIndex">
        <header-not-dot :title="title" :type="2"></header-not-dot>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="price_content">
                        ¥<span>
                        <em>{{ this.price.int }}</em>
                        {{ this.price.point == '' ? '' : '.' + this.price.point }}
                        </span>
                    </div>
                    <div class="type_container">
                        <div class="type_wrapper"  ref="pay_wrapper">
                            <div class="type_content">
                                <div class="margin">
                                    <div class="item" @click="handleSelected('alipay')">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/alipay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">支付宝</p>
                                            <i class="checkbox" :class="this.payType === 'alipay' ? 'checkbox_selected' : '' "></i>
                                        </div>
                                    </div>
                                    <div class="item" @click="handleSelected('wechat')">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/wechat_pay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">微信支付</p>
                                            <i class="checkbox" :class="this.payType === 'wechat' ? 'checkbox_selected' : '' "></i>
                                        </div>
                                    </div>
                                    <div class="item" @click="handleSelected('balance')">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/balance.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">余额支付</p>
                                            <i class="checkbox" :class="this.payType === 'balance' ? 'checkbox_selected' : '' "></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="margin_height"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="submit_pay" @click="pay">
            <p>立即支付(¥ {{ this.price.price }})</p> 
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import headerNotDot from "@components/headerNotDot";
import { findOrder, balancePay } from '@/service/getData'
export default {
    name: 'payIndex',
    data() {
        return {
            title: '订单支付',
            orderno: '',
            price: {},
            payType: ''
        }
    },
    components: {
        headerNotDot
    },
    methods: {
        async findOrder() {
            await findOrder({
            }, this.orderno).then(res => {
                let data = res.data
                if(data.order_status !== 0) {
                    this.$toast.fail('该笔订单已支付');
                    setTimeout(function() {
                        this.$router.replace({name: 'orderDetail', params: {orderno: item.orderno}});
                    }, 500)
                }
                this.price = res.data.price
            })
        },
        init() {
            this.orderno = this.$route.params.id
            this.findOrder()
        },
        handleSelected(type) {
            this.payType = type
        },
        pay() {
            let price = this.price.price
            let orderno = this.orderno
            if(this.payType === '') {
                this.$toast.fail('请选择支付方式');
                return false;
            }
            if(this.payType != 'balance') {
                 this.$toast.fail('暂不支持该支付方式');
                 return false;
            }
            if(price === undefined) {
                this.$toast.fail('无支付金额，请退出此页面');
                return false;
            }
            balancePay({
                orderno: orderno,
                price: price,
                type: this.payType
            }).then(res => {
                this.$router.replace({
                    name: 'payResult',
                    params: {
                        result: res, 
                        payPrice: price, 
                        orderno: orderno
                    }
                })
            })
        }
    },
    mounted() {  
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.pay_wrapper, {
                // scrollbar: true
                click: true,
                useTransition: false
            });
        });
        this.init()
    }
}
</script>
<style lang="sass" scoped>
.payIndex
    height: 100vh
    background-color: $bc1
    .container
        .wrapper
            .content
                .price_content
                    text-align: center
                    margin-top: 26px
                    @include sc(36px, #f2270c)
                    span
                        em
                            font-weight: 600
                            font-size: 56px
                .type_container
                    padding-top: 20px 
                    .type_wrapper
                        height: calc( 100vh - 364px )
                        overflow: hidden
                        padding: 0 20px
                        .type_content
                            .margin_height
                                height: 20px
                                background-color: $bc1
                            .margin
                                border-radius: 20px
                                padding: 30px 20px
                                background-color: $fc
                                overflow: hidden
                            .item
                                display: flex
                                justify-content: space-between
                                vertical-align: middle
                                margin-bottom: 20px
                                height: 108px
                                .pay_logo
                                    width: 86px
                                    border-radius: 10px
                                    overflow: hidden
                                    margin: auto 0
                                    img
                                        width: 100%
                                .text
                                    width: 100%
                                    display: flex
                                    justify-content: space-between
                                    border-bottom: 1px solid $headerBorderColor
                                    margin: 0 20px
                                    .p1
                                        margin: auto 0
                                        font-weight: 600
                                        @include sc(30px, #333)
                                    .checkbox
                                        display: inline-block
                                        margin: auto 0
                                        width: 38px
                                        height: 38px
                                        @include bis('../../assets/images/icon/cart_checkbox.png') 
                                    .checkbox_selected
                                        display: inline-block
                                        margin: auto 0
                                        width: 38px
                                        height: 38px
                                        @include bis('../../assets/images/icon/cart_checkbox_selected_red.png') 

                            .item:last-child
                                margin-bottom: 0
                                .text
                                    border: none
    .submit_pay
        width: 100%
        background-color: $fc
        padding: 30px 0 
        p
            margin: 0px 20px
            padding: 28px 20px
            box-sizing: border-box
            background-color: #fd4e23
            @include sc(34px, #fff)
            text-align: center
            border-radius: 20px
                            
                
            

</style>