<template>
    <div class="recommand">
        <div class="recommand_bg">
            <div class="content">
                <img src="@assets/images/index/recommand.png" alt />
            </div>
        </div>
        <div class="container">
            <div class="wrapper">
                <div class="content clearfix">
                    <div class="item" v-for="(item, index) of productData" :key="index">
                        <router-link :to="{name: 'product', params: {id: item.id}}">
                        <div class="show_img">
                            <img :src="item.medias.data[0].media.data.link" alt="">
                        </div>
                        <div class="text">
                            <p class="title">{{item.name}}</p>
                            <div class="detail clearfix">
                                <div class="float price">￥<span>{{item.price.int}}</span>.{{item.price.point}}</div>
                                <div class="right buy_num">35人付款</div>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <!-- <div class="item">
                        <div class="show_img">
                            <img src="@assets/images/index/product_1.jpg" alt="">
                        </div>
                        <div class="text">
                            <p class="title">产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题</p>
                            <div class="detail clearfix">
                                <div class="float price">￥<span>20</span>.00</div>
                                <div class="right buy_num">35人付款</div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="show_img">
                            <img src="@assets/images/index/product_2.jpg" alt="">
                        </div>
                        <div class="text">
                            <p class="title">产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题</p>
                            <div class="detail clearfix">
                                <div class="float price">￥<span>20</span>.00</div>
                                <div class="right buy_num">35人付款</div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="show_img">
                            <img src="@assets/images/index/product_2.jpg" alt="">
                        </div>
                        <div class="text">
                            <p class="title">产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题</p>
                            <div class="detail clearfix">
                                <div class="float price">￥<span>20</span>.00</div>
                                <div class="right buy_num">35人付款</div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="show_img">
                            <img src="@assets/images/index/product_2.jpg" alt="">
                        </div>
                        <div class="text">
                            <p class="title">产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题</p>
                            <div class="detail clearfix">
                                <div class="float price">￥<span>20</span>.00</div>
                                <div class="right buy_num">35人付款</div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'recommand',
    props: ['productData'],
}
</script>
<style lang="sass" scoped>
.recommand
    background: #f0f2f5
    padding-top: 20px
    margin-top: 20px
    .recommand_bg
        margin: 0 20px
        .content
            width: 100%
            height: 70px
            text-align: center
            background: #fff
            img
                width: calc( 100% - 40px)
                vertical-align: bottom
                @include minHeight(1px)
                max-height: 100%
                height: 100%
    .container
        margin: 0 20px
        box-sizing: border-box
        border-top: 1px solid #f0f2f5
        .wrapper
            width: 100%
            .content
                .item
                    width: 50%
                    box-sizing: border-box
                    padding-bottom: 8px
                    padding-right: 4px
                    float: left
                    overflow: hidden
                    .show_img
                        width: 100%
                        img
                            width: 100%
                            vertical-align: bottom
                    .text
                        padding: 18px
                        box-sizing: border-box
                        vertical-align: top
                        width: 100%
                        background: #fff
                        .title
                            @include overwraps(2)
                            height: 74px
                            line-height: 38px
                        .detail
                            height: 40px
                            margin-top: 20px
                            .float
                                float: left 
                            .right
                                float: right  
                            .price
                                color: #f23030
                                font-weight: 700
                                span
                                    font-size: 32px
                            .buy_num
                                color: #999999

        
</style>