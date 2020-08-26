<template>
    <div class="prodPopup">
        <div class="click_bg" @click="handleShowPopup"></div>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="close" @click="handleShowPopup"></div>
                    <div class="sku">
                        <div class="title clearfix">
                            <div class="float show_img">
                                <img :src="this.skuDetailData.src" alt="">
                            </div>
                            <div class="float text">
                                <p class="price">
                                    ¥<span>{{ this.skuDetailData.int }}</span>.{{ this.skuDetailData.point }}
                                </p>
                                <p class="detail">
                                    <span class="fixed">库存 </span>
                                     {{ this.skuDetailData.quantity }} 件
                                </p>
                                <p class="detail nomargin">
                                    <span class="fixed">已选 </span>
                                     {{ this.skuDetailData.desc }}
                                </p>
                            </div>
                        </div>
                        <div class="attr_container">
                            <div class="attr_wrapper" ref="attr_wrapper">
                                <div class="attr_content">
                                    <div class="attr_list">
                                        <div class="item" v-for="(item, index) of attrData" :key="index">
                                            <div class="attr_title">{{ item.attr.data.name }}</div>
                                            <div class="list">
                                                <span 
                                                v-for="(v, k) of item.values.data" 
                                                :key="k" 
                                                :class="k === AttrHover[index] && 'hover'"
                                                @click="handleAttrSelect(index,k)"
                                                >
                                                {{ v.value.data.name }}
                                                </span>
                                                <!-- <span class="hover">7层-102cm【条纹防尘帘】【2.0升级】</span> -->
                                            </div>
                                        </div>

                                    </div>
                                    
                                    <div class="num_wrap clearfix">
                                        <div class="num_title">数量</div>
                                        <div class="num">
                                            <input-num :value="num" :min="1" @change="handleChangeNum"></input-num>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="pretendHeight"></div>
                        
                        <div class="sku_footer">
                            <div class="sku_contaier ">
                                <p class="p1 margin">加入购物车</p>
                                <p class="p2">立即购买</p>
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
import inputNum from "@views/cart/components/inputNum";
export default {
    name: 'prodPopup',
    data () {
        return {
            skuSelected: '',
            AttrHover: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
            }, // 属性高亮数据
            skuDetailData: {
                src: '', // 图片链接
                quantity: '', // 库存
                int: '', // 价格整数
                point: '', // 价格小数
                desc: '', // 描述
            }, // sku详情数据
            num: 1, // 购买数量
            skuId: '' // skuid用于产品下单的凭证
        }
    },
    props: {
        skuData: Array,
        attrData: Array,
        showPopup: Boolean
    },
    components: {
        inputNum
    },
    methods: {
        /**
         * 改变sku的价格
         */
        handleAttrSelectedShowSkuPrice() {
            let arrDataLength = this.attrData.length
            let arr = [];
            let implodeArr = '';
            let desc = '';
            for(let i = 0; i<arrDataLength; i++) {
                arr.push(this.attrData[i].values.data[this.AttrHover[i]].product_attr_value_id)
                desc += '"' + this.attrData[i].values.data[this.AttrHover[i]].value.data.name + '" ';
            }
            arr.sort()
            implodeArr = arr.join('-')
            this.skuDetailData.desc = desc + '，' + this.num + '个';
            for(let i = 0; i < this.skuData.length; i++) {
                let skuDataObj = this.skuData[i];
                if(skuDataObj.attr_key === implodeArr) {
                    this.skuDetailData.src = skuDataObj.media.data.link;
                    this.skuDetailData.quantity = skuDataObj.stock.data.quantity;
                    this.skuDetailData.int = skuDataObj.price.int;
                    this.skuDetailData.point = skuDataObj.price.point;
                    this.skuId = skuDataObj.id
                }
            }
        },
        handleAttrSelect(index, key) {
            this.AttrHover[index] = key;
            this.handleAttrSelectedShowSkuPrice();
        },
        handleShowPopup() {
            this.$emit('change', !this.showPopup)
        },
        handleChangeNum(num) {
            this.num = num
            this.handleAttrSelectedShowSkuPrice();
        }
    },
    watch: {
        showPopup() {
            this.handleAttrSelectedShowSkuPrice();
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.attr_wrapper, {
                scrollbar: {
                    fade: false,
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
.prodPopup
    .container
        position: fixed
        bottom: 0
        left: 0
        z-index: $higherPositionZIndex
        background-color: #fff
        max-height: $hpopupContainerMaxtop
        min-height: $hpopupContainerMintop
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
                .sku
                    padding-top: 36px
                    .title
                        padding: 0 36px
                        margin-bottom: 54px
                        .show_img
                            @include wh(200px, 200px)
                            overflow: hidden
                            border-radius: 10px
                            img
                                vertical-align: middle
                                @include wh(100%, 100%)
                        .text
                            width: calc( 100% - 200px )
                            padding-left: 20px
                            box-sizing: border-box 
                            margin-top: 60px
                            .price
                                color: #f23030
                                font-weight: 700
                                span
                                    font-size: 48px
                            .detail
                                word-break: break-all
                                color: #333
                                margin-top: 18px
                                @include overwraps(2)
                                span
                                    color: #8c8c8c
                            .nomargin
                                margin-top: 0
                                
                    .attr_container
                        .attr_wrapper
                            position: relative
                            max-height: $hpopuptop
                            overflow: hidden
                            .attr_content
                                padding: 0 36px
                                .attr_list
                                    .item
                                        padding: 10px 0
                                        .attr_title
                                            font-weight: 700
                                            margin-bottom: 20px
                                            @include sc(26px, #262626)
                                        .list
                                            width: 100%
                                            overflow: hidden
                                            span
                                                padding: 0 36px
                                                min-width: 40px
                                                max-width: 540px
                                                overflow: hidden
                                                height: 60px
                                                line-height: 60px
                                                float: left
                                                text-align: center
                                                margin-left: 24px
                                                margin-bottom: 20px
                                                font-size: 22px
                                                color: #262626
                                                background: #f2f2f2
                                                border-radius: 30px
                                            span.hover
                                                background: #fcedeb
                                                border: 1px solid #f2270c
                                                font-size: 22px
                                                color: #f2270c
                                                font-weight: 700
                                                height: 56px
                                                line-height: 56px
                                .num_wrap
                                    font-weight: 700
                                    padding: 52px 0
                                    @include sc(26px, #262626)
                                    .num_title
                                        float: left
                                    .num
                                        float: right
                    .pretendHeight
                        height: $footerIndexTop
                    .sku_footer  
                        position: absolute
                        width: 100%
                        bottom: 0                
                        .sku_contaier
                            display: flex
                            justify-content: center
                            align-items: center
                            height: $footerIndexTop
                            padding: 0 36px
                            box-shadow: 0 0 2px 0 hsla(0, 6%, 58%, .6)
                            p
                                display: flex
                                justify-content: center
                                align-items: center
                                width: 100%
                                padding: 20px 0
                                border-radius: 40px
                                font-weight: 700
                                box-shadow: 0 6px 12px 0 rgba(255,65,66,.2)
                                @include sc(26px, $fc)
                            .margin
                                margin-right: 3%
                            .p1
                                background-color: #f2270c
                            .p2
                                background-color: $theam
                            
                                
                                    

</style>