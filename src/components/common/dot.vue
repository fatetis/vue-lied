<template>
    <div class="dot">
        <div class="click_bg" v-show="showNav" @click="handleShowNav"></div>
        <div class="container" @click="handleShowNav">
            <div class="wrapper">
                <div class="content">
                    <!-- 带阴影的白色省略号 -->
                    <img class="grey_bg" v-if="type == 2" src="@assets/images/icon/write_dot.png" alt="">
                    <!-- 不带阴影的灰色省略号 -->
                    <img v-else-if="type == 3" src="@assets/images/icon/dot_black.png" alt="">
                    <img v-else src="@assets/images/icon/dot.png" alt="">
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
                        <router-link :to="{name: 'cart'}">
                            <span class="show_img not_icon3"></span>
                            <span class="text">购物车</span>
                        </router-link>
                    </li>
                    <li v-if="this.$store.getters.getLoginStatus === 1">
                        <router-link :to="{name: 'userCenter'}">
                            <span class="show_img not_icon4"></span>
                            <span class="text">个人中心</span>
                        </router-link>
                    </li>
                    <li v-else>
                        <router-link :to="{name: 'login'}">
                            <span class="show_img not_icon4"></span>
                            <span class="text">未登录</span>
                        </router-link>
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
    name: 'dot',
    props: {
        type: {
            default: ''
        }
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
.container
    position: fixed
    top: 0
    right: 0
    z-index: $fixedPositionZIndex
    .wrapper
        .content
            width: 80px
            height: $headerIndexTop
            display: flex
            justify-content: center
            img
                @include wh(48px, 48px)
                margin-top: 20px 
                margin-right: 3px
            .grey_bg
                background: #666
                border-radius: 60px
                margin-right: 8px
                margin-top: 16px
                @include wh(60px, 60px)
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
            top: $headerIndexTop + 20px
            background: rgba(0,0,0,.9)
            border-radius: 8px
            z-index: $higherPositionZIndex
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
                    @include bis('../../assets/images/icon/dot_index.png')
                    background-size: 46%
                .not_icon2
                    @include bis('../../assets/images/icon/dot_category.png')
                    background-size: 46%
                .not_icon3
                    @include bis('../../assets/images/icon/dot_cart.png')
                    background-size: 46%
                .not_icon4
                    @include bis('../../assets/images/icon/dot_user.png')
                    background-size: 46%
                .not_icon5
                    @include bis('../../assets/images/icon/dot_brower.png')
                    background-size: 46%

                .text
                    position: absolute
                    top: 50%
                    transform: translateY(-50%)
                    left: 80px
                    font-weight: 400
                    display: inline-block
                    @include sc(26px, #fff)
</style>