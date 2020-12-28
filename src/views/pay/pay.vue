<template>
    <div class="payIndex">
        <header-not-dot :title="title" :type="2"></header-not-dot>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="price_content">
                        ¥<span>
                        <em>6000</em>
                        .12
                        </span>
                    </div>

                    <div class="type_container">
                        <div class="type_wrapper"  ref="pay_wrapper">
                            <div class="type_content">
                                <div class="margin">
                                    <div class="item">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/alipay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">支付宝</p>
                                            <i class="checkbox"></i>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/wechat_pay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">微信支付</p>
                                            <i class="checkbox checkbox_selected"></i>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/alipay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">支付宝</p>
                                            <i class="checkbox"></i>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/wechat_pay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">微信支付</p>
                                            <i class="checkbox checkbox_selected"></i>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/alipay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">支付宝</p>
                                            <i class="checkbox"></i>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/wechat_pay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">微信支付</p>
                                            <i class="checkbox checkbox_selected"></i>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/alipay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">支付宝</p>
                                            <i class="checkbox"></i>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/wechat_pay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">微信支付</p>
                                            <i class="checkbox checkbox_selected"></i>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/alipay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">支付宝</p>
                                            <i class="checkbox"></i>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="pay_logo">
                                            <img src="@assets/images/icon/wechat_pay.png" alt="">
                                        </div>
                                        <div class="text">
                                            <p class="p1">微信支付</p>
                                            <i class="checkbox checkbox_selected"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
        <div class="submit_pay">
            <p>立即支付(¥2000.00)</p> 
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import headerNotDot from "@components/headerNotDot";
export default {
    name: 'payIndex',
    data() {
        return {
            title: '订单支付'
        }
    },
    components: {
        headerNotDot
    },
    mounted() {  
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.pay_wrapper, {
                // scrollbar: true
            });
        });
    }
}
</script>
<style lang="sass" scoped>
.payIndex
    height: 100vh
    background-color: #f5f5f5
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