<template>
    <div class="not">
        <div class="click_bg" v-show="showNav" @click="handleShowNav"></div>
        <div class="container" @click="handleShowNav">
            <div class="wrapper">
                <div class="content">
                    <!-- <img v-if="type == 1" src="@assets/images/icon/write_not.png" alt=""> -->
                    <img src="@assets/images/icon/not.png" alt="">
                </div>
            </div>
        </div>
        <div class="show_nav" v-show="showNav">
            <div class="list">
                <ul>
                    <li>
                        <router-link :to="{name: 'index'}">
                            <span class="show_img not_icon1"></span>
                            <span class="text">首页</span>
                        </router-link>
                    </li>
                    <li>
                        <span class="show_img not_icon2"></span>
                        <span class="text">分类搜索</span>
                    </li>
                    <li>
                        <span class="show_img not_icon3"></span>
                        <span class="text">购物车</span>
                    </li>
                    <li>
                        <span class="show_img not_icon4"></span>
                        <span class="text">个人中心</span>
                    </li>
                    <li>
                        <span class="show_img not_icon5"></span>
                        <span class="text">浏览记录</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'not',
    props: {
        type: String
    },
    data () {
        return {
            showNav: false
        }
    },
    methods: {
        handleShowNav () {
            this.showNav = !this.showNav
        }
    }
}
</script>
<style lang="sass" scoped>
.click_bg
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 998
.container
    position: fixed
    top: 0
    right: 0
    z-index: $fixedPositionZIndex
    .wrapper
        .content
            width: 80px
            height: $headerIndexTop
            img
                @include wh(100%, auto)
                transform: scale(0.8)
.show_nav
    .list
        ul::before
            content: ''
            @include arrow(top, 14px, rgba(0,0,0,.9))
            position: absolute
            top: -14px
            right: 10px
        ul
            position: absolute
            width: 250px
            right: 18px
            top: $headerIndexTop+20px
            background: rgba(0,0,0,.9)
            border-radius: 8px
            z-index: 999
            li
                height: 80px
                line-height: 80px
                position: relative
                .show_img
                    display: inline-block 
                    @include wh(80px, 80px)
                    line-height: 80px
                    background-position: center
                .not_icon1
                    @include bis('../../assets/images/icon/not_index.png')
                    background-size: 46%
                .not_icon2
                    @include bis('../../assets/images/icon/not_category.png')
                    background-size: 46%
                .not_icon3
                    @include bis('../../assets/images/icon/not_cart.png')
                    background-size: 46%
                .not_icon4
                    @include bis('../../assets/images/icon/not_user.png')
                    background-size: 46%
                .not_icon5
                    @include bis('../../assets/images/icon/not_brower.png')
                    background-size: 46%

                .text
                    position: absolute
                    top: 50%
                    margin-top: -40px
                    left: 80px
                    font-weight: 400
                    display: inline-block
                    @include sc(26px, #fff)
</style>