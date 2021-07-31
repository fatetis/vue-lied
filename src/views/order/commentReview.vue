<template>
    <div class="commentReview">
        <header-not-dot :title="title" :type="2"></header-not-dot>
        <div class="container">
            <div class="wrapper" ref="commentreview_wrapper">
                <div class="content">
                    <p class="vir-height"></p>
                    <div class="commentComponents">
                        <comment-review-content></comment-review-content>
                    </div>
                    <p class="vir-height"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import headerNotDot from '@components/headerNotDot'
import commentReviewContent from '@views/order/components/commentReviewContent'
export default {
    name: 'commentReview',
    data() {
        return {
            title: '发表追评'
        }
    },
    components: {
        headerNotDot,
        commentReviewContent
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.commentreview_wrapper, {
                scrollbar: true
            });
        });
    }
}
</script>
<style lang="sass" scoped>
.commentReview
    background-color: $bc2
    height: 100vh
    .container
        .wrapper
            position: relative
            height: $htop
            overflow: hidden   
            .vir-height
                height: 10px
                background-color: $bc2
</style>