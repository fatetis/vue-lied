<template>
    <div class="payRecommand">
        <div class="recommand_pay">
            <div class="recommand_bg">
                <div class="title clearfix">
                    <p class="left">
                        <i class="small"></i>
                        <i class="middle"></i>
                        <i class="big"></i>
                    </p>
                    <p class="">{{ title ? title : '继续剁手' }}</p>
                    <p class="right ">
                        <i class="big"></i>
                        <i class="middle"></i>
                        <i class="small"></i>
                    </p>
                    
                </div>
            </div>
            <recommand 
            :productData="productData"
            v-show="!(JSON.stringify(productData) == '[]')"></recommand>
        </div>
    </div>
</template>
<script>
import recommand from "@views/index/components/recommand";
export default {
    name: 'payRecommand',
    props: ['productData', 'title'],
    components: {
        recommand
    }
}
</script>
<style lang="sass" scoped>
.payRecommand
    .recommand_pay
        .recommand_bg
            margin-top: 36px
            margin-bottom: 20px
            .title
                text-align: center
                font-weight: bold
                @include sc(32px, #866023)
                display: flex
                justify-content: center
                line-height: 1
                .big
                    display: inline-block
                    @include wh(10px, 10px)
                    border-radius: 50%
                    background-image: linear-gradient(90deg, #ffb97e, #ff8620 50%)
                    margin-right: 32px
                    vertical-align: middle
                .middle
                    display: inline-block
                    @include wh(6px, 6px)
                    border-radius: 50%
                    background-image: linear-gradient(90deg, #ffb97e, #ff8620 50%)
                    margin-right: 20px
                    vertical-align: middle
                .small
                    display: inline-block
                    @include wh(3px, 3px)
                    border-radius: 50%
                    background-image: linear-gradient(90deg, #ffb97e, #ff8620 50%)
                    margin-right: 20px
                    vertical-align: middle
                .right
                    .big
                        background-image: linear-gradient(-90deg, #ffb97e, #ff8620 50%)
                        margin-left: 32px
                        margin-right: 0
                    .middle
                        background-image: linear-gradient(-90deg, #ffb97e, #ff8620 50%)
                        margin-left: 20px
                        margin-right: 0
                    .small
                        background-image: linear-gradient(-90deg, #ffb97e, #ff8620 50%)
                        margin-left: 20px
                        margin-right: 0
</style>