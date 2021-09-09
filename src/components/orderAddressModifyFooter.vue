<template>
    <div class="orderAddressModifyFooter">
        <div class="container">
            <div class="content">
                <div class="radius">
                    <p class="p1">重新修改地址</p>
                    <p class="p2">返回订单</p>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'orderAddressModifyFooter'
}
</script>
<style lang="sass" scoped>
.orderAddressModifyFooter
    position: fixed
    bottom: 0
    .container
        background-color: $fc 
        width: 100vw
        .content
            padding: 20px 20px
            .radius
                border-radius: 50px
                overflow: hidden
                p
                    display: inline-block
                    text-align: center
                    padding: 20px 0
                    @include sc(32px, $fc)
                .p1
                    width: 50%
                    background-image: linear-gradient(45deg, #f8bf37, #f9952d 50%)
                .p2
                    width: 50%
                    background-image: linear-gradient(45deg, #f77a28, #fb5c25 50%)
                
</style>