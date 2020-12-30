<template>
    <div class="footerIndex">
        <div class="nav">
            <div class="wrapper">
                <div class="content clearfix">
                    <div class="item">
                        <router-link :to="{name: 'index'}">
                            <div :data="$route.name" class="show_icon">
                                <img :src="this.$route.name === 'index' ? img.selected[0] : img.select[0]" alt="">
                            </div>
                            <div :class="this.$route.name === 'index' ? 'text_hover' : 'text'">
                                <p>首页</p>
                            </div>
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link :to="{name: 'category'}">
                            <div class="show_icon">
                                <img :src="this.$route.name === 'category' ? img.selected[1] : img.select[1]" alt="">
                            </div>
                            <div :class="this.$route.name === 'category' ? 'text_hover' : 'text'">
                                <p>分类</p>
                            </div>
                        </router-link>
                    </div>
                    <div class="item">
                        <!-- <router-link :to="{name: 'discover'}"> -->
                            <div class="show_icon">
                                <img :src="this.$route.name === 'discover' ? img.selected[2] : img.select[2]" alt="">
                            </div>
                            <div :class="this.$route.name === 'discover' ? 'text_hover' : 'text'">
                                <p>发现</p>
                            </div>
                        <!-- </router-link> -->
                    </div>
                    <div class="item">
                        <router-link :to="{name: 'cart'}">
                            <div class="show_icon">
                                <img :src="this.$route.name === 'cart' ? img.selected[3] : img.select[3]" alt="">
                            </div>
                            <div :class="this.$route.name === 'cart' ? 'text_hover' : 'text'">
                                <p>购物车</p>
                            </div>
                        </router-link>
                    </div>
                    
                    <div class="item">
                        <router-link :to="{name: this.$store.getters.getLoginStatus === 1 ? 'userCenter' : 'login'}">
                            <div class="show_icon">
                                <img :src="this.$route.name === 'userCenter' ? img.selected[4] : img.select[4]" alt="">
                            </div>
                            <div :class="this.$route.name === 'userCenter' ? 'text_hover' : 'text'">
                                <p>{{ this.$store.getters.getLoginStatus === 1 ? '我的' : '未登录' }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'footerIndex',
    data () {
        return {
            img: {
                select: [
                    require('@/assets/images/icon/home.png'),
                    require('@/assets/images/icon/category.png'),
                    require('@/assets/images/icon/discover.png'),
                    require('@/assets/images/icon/cart.png'),
                    require('@/assets/images/icon/user_center.png')
                ],
                selected: [
                    require('@/assets/images/icon/home_hover.png'),
                    require('@/assets/images/icon/category_hover.png'),
                    require('@/assets/images/icon/discover_hover.png'),
                    require('@/assets/images/icon/cart_hover.png'),
                    require('@/assets/images/icon/user_center_hover.png')
                ]
                
            }
        }
    }

}
</script>
<style lang="sass" scoped>
.footerIndex
    height: $footerIndexTop
    .nav
        position: fixed
        bottom: 0
        left: 0
        z-index: $fixedPositionZIndex
        width: 100%
        box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6)
        .wrapper
            background: $fc
            padding: 10px 0
            .content
                margin: 0 20px
                .item
                    float: left
                    width: 20%
                    text-align: center
                    .show_icon
                        height: 40px
                        img
                            height: 100%
                    .text
                        transform: scale(0.8)
                        margin-top: 2px
                        color: #8B8B8B
                    .text_hover
                        transform: scale(0.8)
                        margin-top: 2px
                        color: $theam
                    

            

</style>