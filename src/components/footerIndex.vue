<template>
    <div class="footerIndex">
        <div class="nav">
            <div class="wrapper">
                <div class="content clearfix">
                    <div class="item">
                        <div class="show_icon">
                            <img src="@assets/images/icon/home.png" alt="">
                        </div>
                        <div class="text">
                            <p>首页</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="show_icon">
                            <img src="@assets/images/icon/category.png" alt="">
                        </div>
                        <div class="text">
                            <p>分类</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="show_icon">
                            <img src="@assets/images/icon/discover.png" alt="">
                        </div>
                        <div class="text">
                            <p>发现</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="show_icon">
                            <img src="@assets/images/icon/cart.png" alt="">
                        </div>
                        <div class="text">
                            <p>购物车</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="show_icon">
                            <img src="@assets/images/icon/user_center.png" alt="">
                        </div>
                        <div class="text">
                            <p>未登录</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footerIndex'
}
</script>
<style lang="sass" scoped>
.footerIndex
    height: 94px
    .nav
        position: fixed
        bottom: 0
        left: 0
        z-index: 99
        width: 100%
        box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6)
        -webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6)
        -moz-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6)
        .wrapper
            background: $fc
            padding: 10px 0
            .content
                margin: 0 20px
                .item
                    float: left
                    width: 20%
                    text-align: center
                    color: #8B8B8B
                    font-size: 1px
                    .show_icon
                        height: 42px
                        img
                            height: 100%
                    .text
                        transform: scale(0.9)
                    

            

</style>