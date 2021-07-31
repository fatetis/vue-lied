<template>
    <div class="question" >
        <transition-group name="fadeshort" tag="div">
            <div class="click_bg" key="one" v-show="showQuestion"></div>
            <div class="container" key="two" v-show="showQuestion">
                <div class="wrapper">
                    <div class="content">
                        <div class="title">
                            <p>详细说明</p>
                        </div>
                    </div>
                    <p class="s-title">选择评价公开</p>
                    <p class="s-content">1、评价在“宝贝评价”列表中展示时，将公开展示你的淘宝头像，用户昵称不对外展示；</p>
                    <p class="s-content">2、评价中的买家秀还有机会被平台精选，展示在淘宝首页、逛逛等公共频道中，将公开展示你的淘宝头像和昵称；</p>
                    <p class="s-title">选择评价匿名</p>
                    <p class="s-content">1、评价在“宝贝评价”区展示时，你的用户昵称和头像将不会对外展示</p>
                    <p class="s-content">2、评价中的买家秀将不会在公共页面展示</p>
                    <p class="complete"  @click="handleShowQuestion">完成</p>
                </div>
            </div>
        </transition-group>
    </div>
</template>
<script>
export default {
    name: 'question',
    data () {
        return {
        }
    },
    props: {
        showQuestion: Boolean,
    },
    methods: {
        handleShowQuestion() {
            this.$emit('change', !this.showQuestion)
        },
    },
    mounted() {
    }
}
</script>
<style lang="sass" scoped>
.click_bg
    position: fixed
    z-index: $higherPositionZIndex
    left: 0
    right: 0
    bottom: 0
    top: 0
    background-color: #333333
    opacity: 0.6
.question
    .container
        position: fixed
        bottom: 0
        left: 0
        z-index: $higherPositionZIndex
        background-color: #fff
        height: 60vh
        width: 100%
        border-radius: 30px 30px 0 0
        overflow: hidden
        transform: all 0.2s linear
        .wrapper
            padding: 0 40px
            .content
                .close
                    position: absolute
                    top: 36px
                    right: 36px
                    @include wh(40px, 40px)
                    @include bis('../../../assets/images/icon/prod_close.png')
                .title
                    text-align: center
                    font-weight: bold
                    padding-top: 36px 
                    @include sc(32px, $headerBlack)
            .s-title
                font-weight: bold
                margin: 40px 0
                @include sc(32px, #333333)
            .s-content
                @include sc(28px, #949494)
            .complete
                position: absolute
                bottom: 0
                width: 90%
                box-sizing: border-box
                margin: 20px auto
                text-align: center
                line-height: 80px
                height: 80px
                background-image: linear-gradient(-45deg, #e8513d, $theam 50%)
                border-radius: 50px
                @include sc(34px, $fc)
    .fadeshort-enter-active, .fadeshort-leave-active 
        transition: all linear .2s

    .fadeshort-enter, .fadeshort-leave-to  
        bottom: -60vh
                                   
</style>