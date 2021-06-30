<template>
    <div class="prodComment">
        <div class="click_bg" @click="handleShowComment"></div>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="close" @click="handleShowComment"></div>
                    <div class="title">
                        <p>全部评论</p>
                    </div>
                    <div class="middle_container">
                        <div class="middle_wrapper">
                            <div class="middle_content">
                                <!-- 评论标签 -->
                                <!-- <div class="tag" style="height: 120px">

                                </div> -->
                                <div class="col">
                                    <div class="left">
                                        <p>评论 280</p>
                                    </div>
                                    <div class="right">
                                        <p class="hover">默认</p>
                                        <p>最新</p>
                                    </div>
                                </div>
                                <div class="inner_container">
                                    <div class="inner_wrapper" ref="inner_wrapper">
                                        <div class="inner_content">
                                            <div class="item">
                                                <prod-comment-content :scrollObj="this.scroll"></prod-comment-content>
                                                <prod-comment-content :scrollObj="this.scroll"></prod-comment-content>
                                                <prod-comment-content :scrollObj="this.scroll"></prod-comment-content>
                                                <prod-comment-content :scrollObj="this.scroll"></prod-comment-content>
                                                <prod-comment-content :scrollObj="this.scroll"></prod-comment-content>
                                                <prod-comment-content :scrollObj="this.scroll"></prod-comment-content>
                                                <prod-comment-content :scrollObj="this.scroll"></prod-comment-content>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import prodCommentContent from '@views/product/components/prodCommentContent'
export default {
    name: 'prodComment',
    data () {
        return {
            checked: true,
            scroll: '',
        }
    },
    components: {
        prodCommentContent
    },
    props: {
        showComment: Boolean,
    },
    methods: {
        handleShowComment() {
            this.$emit('change', !this.showComment)
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.inner_wrapper, {
                scrollbar: {
                    fade: true,
                }
            });
        });
    }
}
</script>
<style lang="sass" scoped>
.float
    float: left
.click_bg
    background-color: #333
    opacity: 0.6
.prodComment
    .container
        position: fixed
        bottom: 0
        left: 0
        z-index: $higherPositionZIndex
        background-color: #fff
        height: 94vh
        width: 100%
        border-radius: 30px 30px 0 0
        overflow: hidden
        .wrapper
            .content
                .close
                    position: absolute
                    top: 36px
                    right: 36px
                    @include wh(40px, 40px)
                    @include bis('../../../assets/images/icon/prod_close.png')
                .title
                    text-align: center
                    padding: 36px 0
                    @include sc(32px, $headerBlack)
                .middle_container
                    .middle_wrapper
                        .middle_content
                            .col
                                display: flex
                                justify-content: space-between
                                padding: 0 20px
                                .left
                                    font-weight: bold
                                    @include sc(28px, #333333)
                                .right
                                    display: flex
                                    justify-content: center
                                    width: 136px
                                    background-color: #f7f7f7
                                    border-radius: 60px
                                    padding: 4px
                                    p
                                        font-weight: bold
                                        border-radius: 30px
                                        width: 50%
                                        vertical-align: top
                                        height: 38px
                                        line-height: 38px
                                        text-align: center
                                        @include sc(26px, #a4a4a4)
                                    p.hover
                                        background-color: #ffffff
                                        @include sc(26px, #333333)
                            .inner_container
                                padding-top: 20px
                                .inner_wrapper
                                    position: relative
                                    height: 82vh
                                    overflow: hidden
                                    .inner_content
                                        padding: 0 20px

                                    
                                    

</style>