<template>
    <div class="recommand">
        <div class="container">
            <div class="wrapper">
                <div class="content clearfix">
                    <div class="item" v-for="(item, index) of productData" :key="index">
                        <router-link :to="{name: 'product', params: {id: item.id}}">
                            <self-image width="100%" :src="item.medias.data[0].media.data.link"/>
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
.recommand .container .wrapper .content .item:nth-child(2n)
    margin-right: 0
.recommand
    .container
        margin: 0 20px
        box-sizing: border-box
        border-top: 1px solid #f0f2f5
        .wrapper
            width: 100%
            .content
                .item
                    width: 49%
                    box-sizing: border-box
                    margin-bottom: 8px
                    margin-right: 2%
                    float: left
                    border-radius: 20px
                    overflow: hidden
                    background-color: $fc
                    .show_img
                        width: 100%
                        padding-top: 100% 
                        position: relative
                        img
                            position: absolute
                            top: 0
                            lef: 0
                            width: 100%
                            height: 100%
                            vertical-align: bottom
                    .text
                        padding: 18px
                        box-sizing: border-box
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