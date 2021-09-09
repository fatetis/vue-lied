<template>
    <div class="orderAddressModify">
        <header-dot :title="title" :type="1"></header-dot>
        <div class="container">
            <div class="content">
                <div class="originAddress">
                    <p class="title">原地址：</p>
                    <p class="address">广东省 河源市 源城区 上城街道 新信息性能新信息性能新信息性能新信息性能新信息性能新信息性能</p>
                    <p class="userInfo">何达哒 18825099088</p>
                </div>
                <div class="newAddress">
                    <p class="title">新收货地址：</p>
                    <div class="middle">
                        <div class="left">
                            <p>何</p>
                        </div>
                        <div class="right">
                            <p class="userInfo">
                                <span class="name">何达哒</span>
                                <span class="mobile">18825099088</span>
                            </p>
                            <p class="address">广东省 河源市 源城区 上城街道 新信息性能新信息性能新信息性能新信息性能新信息性能</p>
                        </div>
                    </div>
                    <div class="tips">
                        <i></i>
                        <span>地址修改成功</span>
                    </div>
                </div>
            </div>
        </div>
        <order-address-modify-footer></order-address-modify-footer>
    </div>
</template>
<script>
import headerDot from "@components/headerDot";
import orderAddressModifyFooter from "@components/orderAddressModifyFooter";
export default {
    name: 'orderAddressModify',
    data() {
        return {
            title: '修改成功'
        }
    },
    components: { headerDot, orderAddressModifyFooter }
    // methods: {

    // }
    
}
</script>
<style lang="sass" scoped>
.orderAddressModify
    background-color: #f2f2f2
    height: 100vh
    .container
        .content
            .originAddress
                padding: 0 20px
                p
                    margin: 20px 0
                .title
                    font-weight: bold
                    font-size: 32px
                .address
                    margin: 0
                    font-size: 28px
                    @include overwraps(2)
                .userInfo
                    @include sc(24px, #999999)
            .newAddress
                background-color: $fc
                margin: 0 10px
                padding: 20px 20px
                border-radius: 20px
                .title
                    font-weight: bold
                    font-size: 32px
                .middle
                    display: flex
                    justify-content: space-between
                    margin: 40px 0
                    align-items: center
                    .left
                        width: 10%
                        p
                            background-color: #fdeee5
                            padding: 20px
                            border-radius: 50%
                            @include sc(26px, #e67846)
                            font-weight: bold
                    .right
                        width: 85%
                        .userInfo
                            margin-bottom: 20px
                            .name
                                font-weight: bold
                                font-size: 32px
                                padding-right: 10px
                            .mobile
                                @include sc(24px, #999999)
                        .address
                            font-size: 28px
                            @include overwraps(2)
                .tips
                    i
                        display: inline-block
                        vertical-align: middle
                        @include wh(40px, 40px)
                        @include bis('../../assets/images/icon/gou.png')
                    span
                        vertical-align: middle
                        margin-left: 10px
                        display: inline-block
                        @include sc(24px, #91d45b)
</style>