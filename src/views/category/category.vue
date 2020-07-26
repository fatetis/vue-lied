<template>
    <div class="category">
        <header-search></header-search>
        <div class="container clearfix" >
            <div class="float left">
                <div class="wrapper left_wrapper" ref="left_wrapper">
                    <div class="content">
                        <ul>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                            <li>热门推荐</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="float right">
                <div class="wrapper" ref="right_wrapper">
                    <div class="content">
                        <div class="title">热门推荐</div>
                        <div class="list">
                            <ul class="clearfix">
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                                <li>
                                    <img src="@assets/images/category/conditioner.jpg" alt="">
                                    <p>空调</p>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <footer-index></footer-index>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import headerSearch from '@components/headerSearch'
import footerIndex from "@components/footerIndex";
export default {
    name: 'category',
    components: {
        headerSearch,
        footerIndex
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.left_wrapper, {
                scrollbar: true
            });
            this.scroll = new Bscroll(this.$refs.right_wrapper, {
                scrollbar: true
            });
        });
    }
}
</script>
<style lang="sass" scoped>
.container
    width: 100%
    position: relative
    .float
        float: left
    .left
        width: 172px
        background-color: #f8f8f8
        height: $hftop
        min-width: 152px
        overflow: hidden
        .left_wrapper
            position: relative
        .wrapper
            height: $hftop
            .content
                li
                    font-size: 28px
                    color: #333
                    text-align: center
                    height: 92px
                    line-height: 92px
    .right
        width: calc( 100% - 172px )
        overflow: hidden
        box-sizing: border-box
        height: $hftop
        .wrapper
            height: $hftop
            overflow: hidden
            .content
                margin: 0 20px
                .title
                    height: 96px
                    line-height: 96px
                    font-size: 28px
                    color: #333
                    font-weight: 700
                .list
                    padding-bottom: 34px
                    ul
                        li
                            float: left
                            width: 33.3%
                            box-sizing: border-box
                            text-align: center
                            img
                                width: 140px
                                height: 140px
                            p
                                color: #333
        
</style>