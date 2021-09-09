<template>
    <div class="cart">
        <header-dot :title="title" :type="1"></header-dot>
        <div class="container" ref="cart_container">
            <div class="wrapper">
                <div class="content">
                    <div class="item" v-for="(item, index) of cartData" :key="index">
                        <!-- 商家模块 -->
                        <div class="seller clearfix">
                            <i class="checkbox checkbox_seller" :class="{checkbox_selected: selectedBrandShow[index]}" @click="handleBrandSelected(item.brandId)" :data-brandid="item.brandId"></i>
                            <div class="text clearfix">
                                <i class="icon_shop"></i>
                                <div class="name">
                                    {{ item.brandName }}
                                    <i class="icon_arrow_right"></i>
                                </div>
                            </div>
                        </div>

                        <div class="item_product" v-for="(i, k) of item.product" :key="k">
                            <div class="product clearfix">
                                <div class="checkbox_wrap">
                                    <input readonly type="text"  class="checkbox checkbox_product" :class="{checkbox_selected: selectedRange.includes(i.skuId)}" @click="handleSelected(item.brandId, i.skuId)" :data-price="i.price.int" :data-num="i.num">
                                </div>
                                
                                <div class="text clearfix">
                                    <router-link :to="{name: 'product', params: {id: i.productId}}">
                                        <div class="img_wrap">
                                            <img class="prod_thumb" :src="i.media" alt="图片加载失败">
                                        </div>
                                    </router-link>
                                    <div class="right">
                                        <router-link :to="{name: 'product', params: {id: i.productId}}">
                                            <div class="name">{{ i.name }}</div>
                                        </router-link>
                                        <div class="sku_line_style sku_line">
                                            <div class="sku sku_style">
                                                <span class="sku_attr sku_attr_style">{{ i.skuName }}</span>
                                                <!-- <span class="sku_service sku_service_style">，选服务</span> -->
                                            </div>
                                        </div>
                                        <div class="sku_line_style discount_line">
                                            <div class="discount sku_style">
                                                <div class="sku_attr_style discount_item">
                                                满2件9折
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="price_line clearfix">
                                            <div class="price">
                                                ¥<span>
                                                    <em>{{ i.price.int }}</em>
                                                    .{{ i.price.point }}
                                                    </span>
                                            </div>
                                            <div class="num_wrap">
                                                <input-num :min="1" :max="i.max" :value="i.num" @change="handleChangeNum" :unique='i.skuId'></input-num>
                                            </div>
                                        </div>
                                        <div class="action clearfix">
                                            <span class="item_action" @click="handleDeleteCart" :data-cartid="i.id" :data-skuid="i.skuId" :data-brandid="item.brandId">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="fixbar">
            <div class="container">
                <div class="wrapper">
                    <div class="content clearfix">
                        <div class="total_checkbox">
                            <i class="checkbox checkbox_total" :class="{checkbox_selected: selectedTotalShow}" @click="handleTotalSelected"></i>
                            全选
                        </div>
                        <div class="text clearfix">
                            <div class="price clearfix">
                                <p class="p1">
                                    总计:
                                    <span>¥{{ totalData.totalPrice }}</span>
                                </p>
                                <p class="p2">已优惠¥1232.00</p>
                            </div>
                            <button class="settlement" @click="handleBuyValidate">去结算(<em>{{ totalData.totalNum }}</em>件)</button>
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
import headerDot from "@components/headerDot";
import footerIndex from "@components/footerIndex";
import inputNum from "@views/cart/components/inputNum";
import { getCart, modifyCart, deleteCart, productValidate } from '@/service/getData'
export default {
    name: 'cart',
    data () {
        return {
            title: '购物车',
            cartData: {},
            selectedRange: [],
            selectedBrandlength: {},
            selectedBrandShow: {},
            selectedTotalShow: false,
            skuIds: {},
            cartIds: [],
        }
    },
    components: {
        headerDot,
        footerIndex,
        inputNum
    },
    methods: {
        async getCart() {
            let res = await getCart({
                include: 'sku,product,product.attrs,brand',
            });
            let data = res.data
            let result = {};
            data.forEach(item => {
                let brandData = item.brand.data;
                let productData = item.product.data;
                let skuData = item.sku.data;
                result[brandData.id] = result[brandData.id] === undefined ? {} : result[brandData.id] 
                result[brandData.id]['brandId'] = brandData.id
                result[brandData.id]['brandName'] = brandData.name
                result[brandData.id]['product'] = result[brandData.id]['product'] === undefined 
                ? {} 
                : result[brandData.id]['product'] 
                result[brandData.id]['product'][skuData.id] = result[brandData.id]['product'][skuData.id] === undefined 
                ? {} 
                : result[brandData.id]['product'][skuData.id]
                result[brandData.id]['product'][skuData.id]['id'] = item.id
                result[brandData.id]['product'][skuData.id]['productId'] = productData.id
                result[brandData.id]['product'][skuData.id]['skuId'] = skuData.id
                result[brandData.id]['product'][skuData.id]['name'] = productData.name
                result[brandData.id]['product'][skuData.id]['num'] = item.number
                result[brandData.id]['product'][skuData.id]['max'] = skuData.stock.data.quantity
                result[brandData.id]['product'][skuData.id]['price'] = skuData.price
                result[brandData.id]['product'][skuData.id]['media'] = skuData.media.data.link
                result[brandData.id]['product'][skuData.id]['is_selected'] = item.is_selected
                result[brandData.id]['product'][skuData.id]['skuName'] = ''
                let attrData = productData.attrs.data
                let attrKey = skuData.attr_key
                for(let i = 0; i < attrData.length; i++) {
                    for(let j = 0; j < attrData[i].values.data.length; j++) {
                        let values_data = attrData[i].values.data[j];
                        let keyIndex = attrKey.indexOf(values_data.product_attr_value_id)
                        if(keyIndex !== -1) {
                            result[brandData.id]['product'][skuData.id]['skuName'] += '，' + values_data.value.data.name
                        }
                    }
                }
                result[brandData.id]['product'][skuData.id]['skuName'] = result[brandData.id]['product'][skuData.id]['skuName'].substr(1)
            });
            this.cartData = result;
        },
        // 购物车删除
        async handleDeleteCart(e) {
            let cartid = e.currentTarget.dataset.cartid
            let skuid = e.currentTarget.dataset.skuid
            let brandid = e.currentTarget.dataset.brandid
            let _this = this
            let res = await deleteCart({
                id: cartid
            })
            // 删除对象里购物车的属性
            _this.$delete(_this.cartData[brandid].product, skuid)
            // 删除选中的对象
            _this.handleSelected(brandid, Number(skuid), true, false)
            // 一个商家里若无其他商品则将商家信息一并清除了
            if(Object.keys(_this.cartData[brandid].product).length <= 0) {
                _this.$delete(_this.cartData, brandid)
            }
        },
        async handleChangeNum(num, skuId) {
            // 改变购物车数据的num值
            let res = await modifyCart({
                sku_id: skuId,
                num : num
            })
            for(let key in this.cartData) {
                if(this.cartData[key].product[skuId] !== undefined) 
                this.cartData[key].product[skuId].num = num
            }
        },
        /**
         * 产品input框
         * splice 控制是否全选和反选的问题
         * sendAxios 控制是否发axios请求
         */
        async handleSelected(brandid, skuid, splice = true, sendAxios = true) {
            let checkSelectIndex = this.selectedRange.indexOf(skuid)
            let is_selected = 0
            // 控制当前框是否被选中
            if(checkSelectIndex < 0){
                this.selectedRange.push(skuid)
                this.selectedBrandlength[brandid] = this.selectedBrandlength[brandid] === undefined 
                    ? 0 
                    : this.selectedBrandlength[brandid]
                this.selectedBrandlength[brandid]++
                is_selected = 1
            } else if(splice) {
                this.selectedRange.splice(checkSelectIndex, 1)
                this.selectedBrandlength[brandid]--
            }
            // 获取一个商家下所有的产品数量
            let sellerCheckBoxLength = Object.keys(this.cartData[brandid].product).length
            // 获取所有的产品数量
            let totalCheckBoxLength = 0;
            for(let key in this.cartData) {
                totalCheckBoxLength += Object.keys(this.cartData[key].product).length
            }
            // 获取产品选中的数量
            let selectedCheckBoxLength = this.selectedRange.length;
            // 获取一个商家下产品选中的数量
            let selectedSellerCheckBoxLength = this.selectedBrandlength[brandid]
            // 控制该商家input框是否被选中
            this.selectedBrandShow[brandid] = selectedSellerCheckBoxLength === 0 
            ? false 
            : (sellerCheckBoxLength === selectedSellerCheckBoxLength ? true : false )
            // 控制全选框是否被选中
            this.selectedTotalShow = selectedCheckBoxLength === 0 
            ? false 
            : (selectedCheckBoxLength === totalCheckBoxLength ? true : false)
            if(sendAxios === true) 
            await modifyCart({
                sku_id: skuid,
                is_selected: splice === false ? 1 : is_selected
            })
        },
        // 商家input框
        handleBrandSelected(brandid) {
            let skuids = Object.keys(this.cartData[brandid].product)
            let show = this.selectedBrandShow[brandid] === undefined ? false : this.selectedBrandShow[brandid]
            skuids.forEach(item => {
                this.handleSelected(brandid, Number(item), show)
            })
        },
        // 全选框
        handleTotalSelected() {
            let show = this.selectedTotalShow
            for(let key in this.cartData) {
                for (let k in this.cartData[key].product) {
                    this.handleSelected(key, Number(k), show)
                }
            }
        },
        // 下单操作
        handleBuyValidate() {
            let param = new FormData();
            for(let key in this.skuIds){
                param.append('sku_id[' + key + ']', this.skuIds[key])
            }
            productValidate(param).then((res) => {
                this.$store.commit('setOrderQuery', {
                    skuIds: this.skuIds,
                    cartIds: this.cartIds,
                });
                this.$router.push({name: 'order'})
            })
        },
        async init() {
            await this.getCart();
            for(let key in this.cartData) {
                for (let k in this.cartData[key].product) {
                    if(this.cartData[key].product[k].is_selected == 1) {
                        this.handleSelected(key, Number(k), true, false)
                    }
                }
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.cart_container, {
                scrollbar: true
            });
        });
        this.init()
    },
    computed: {
        totalData: function() {
            let total = 0;
            let num = 0;
            this.selectedRange.forEach(item => {
                for(let key in this.cartData) {
                    if(this.cartData[key].product[item] !== undefined) {
                        total += this.cartData[key].product[item].price.price * this.cartData[key].product[item].num
                        num += this.cartData[key].product[item].num
                        this.skuIds[item] = this.cartData[key].product[item].num
                        this.cartIds.push(this.cartData[key].product[item].id)
                    }
                }
            })
            if(total === 0) return {totalPrice: '0.00', totalNum: num}
            return {totalPrice: total, totalNum: num}
        }
    }
}
</script>
<style lang="sass" scoped>
.checkbox
    float: left
    display: inline-block
    width: 36px
    height: 36px
    @include bis('../../assets/images/icon/cart_checkbox.png') 
.checkbox_selected
    float: left
    display: inline-block
    width: 36px
    height: 36px
    @include bis('../../assets/images/icon/cart_checkbox_selected_red.png') 
.cart
    background-color: #f2f2f2
    .container
        height: $hfcarttop
        overflow: hidden
        .wrapper
            .content
                padding: 20px
                .item
                    background-color: #fff
                    padding: 20px
                    margin-bottom: 40px
                    border-radius: 20px
                    overflow: hidden
                    box-shadow: 0 0.08rem 0.32rem rgba(0,0,0,0.08)
                    .seller
                        .checkbox_seller
                        .text
                            float: left
                            margin-left: 20px
                            padding-top: 2px
                            .icon_shop
                                display: inline-block
                                @include wh(32px, 32px)
                                @include bis('../../assets/images/icon/cart_shop.png')
                                float: left
                            .name
                                float: left
                                margin-left: 12px
                                line-height: 32px
                                font-weight: 700
                                color: #333
                                .icon_arrow_right
                                    @include borderArrow('right', 10px, #123)
                                    margin-bottom: 2px
                    .item_product
                        .product
                            margin-top: 20px
                            .checkbox_wrap
                                width: 36px
                                height: 200px
                                float: left
                                position: relative
                                .checkbox_product
                                    position: absolute
                                    top: 50%
                                    transform: translateY(-50%)
                            .text 
                                float: left
                                width: calc( 100% - 36px )
                                box-sizing: border-box
                                padding-left: 20px
                                .img_wrap
                                    overflow: hidden
                                    border-radius: 10px 
                                    float: left
                                    box-sizing: border-box
                                    @include wh(200px, 200px)
                                    .prod_thumb 
                                        width: 100%
                                .right
                                    float: left
                                    width: calc( 100% - 200px )
                                    padding-left: 20px
                                    box-sizing: border-box
                                    .name
                                        color: #262626
                                        margin-bottom: 12px
                                        @include overwraps(2)
                                        
                                    .sku_line_style
                                        width: 100%
                                        .sku_style:after
                                            content: ''
                                            @include borderArrow('bottom', 6px, #262626)
                                            position: absolute
                                            right: 12px
                                            top: 50%
                                            margin-top: -3px
                                        .sku_style
                                            display: inline-block
                                            color: #262626
                                            background-color: #f2f2f2
                                            position: relative
                                            border-radius: 16px
                                            padding-right: 28px
                                            padding-left: 12px
                                            box-sizing: border-box
                                            max-width: 100%
                                            line-height: 32px
                                            margin-bottom: 8px
                                            .sku_attr_style
                                                display: inline-block
                                                @include overwrap()
                                                // max-width: calc( 100% - 96px )
                                                max-width: calc( 100% - 0px )
                                                vertical-align: top
                                            .sku_service_style
                                                display: inline-block
                                                vertical-align: top
                                    .discount_line
                                        .discount
                                            margin-bottom: 12px
                                            .discount_item
                                                max-width: 100%
                                    .price_line
                                        .price
                                            float: left
                                            color: #f2270c
                                            font-weight: 550
                                            span
                                                em
                                                    font-weight: 700
                                                    font-size: 32px
                                        .num_wrap
                                            float: right
                                            display: inline-block
                                    .action
                                        margin-right: 6px
                                        margin-top: 6px
                                        .item_action
                                            float: right
                                            @include sc(24px, #333)
    .fixbar
        .container
            position: fixed
            bottom: $footerIndexTop
            z-index: $fixedPositionZIndex
            left: 0
            background-color: #fff
            height: 100px
            overflow: hidden
            width: 100%
            border-top: 1px solid #f2f2f2
            .wrapper
                margin: 0px 20px
                .content
                    .total_checkbox
                        float: left
                        padding-top: 14px 
                        @include sc(26px, #333)
                        .checkbox_total
                            margin-right: 20px
                    .text
                        float: right
                        .price
                            float: left
                            color: #333
                            margin-top: -10px
                            .p1
                                font-size: 30px
                                span
                                    font-size: 32px
                                    font-weight: 700
                            .p2   
                                float: right
                        .settlement
                            float: right
                            margin-left: 20px
                            margin-top: -8px
                            border-radius: 40px
                            line-height: 76px
                            text-align: center
                            background-image: linear-gradient(-45deg, #f97590, #f90336 50%)
                            @include wh(226px, 76px)
                            @include sc(28px, #fff)
                            em
                                font-weight: 700

</style>