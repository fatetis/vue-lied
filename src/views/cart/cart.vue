<template>
    <div class="cart">
          <div class="cartHeader">
            <div class="wrapper">
                <div class="content">
                    <p class="p1">购物车<span>{{ totalCartLength ? '(' + totalCartLength + ')' : '' }}</span></p>
                    <p class="p2" @click="handleEditCart" v-show="totalCartLength !== 0">{{ showSettlement ? '编辑' : '完成' }}</p>
                </div>
            </div>
            <div class="more"  :class="showSettlement ? '' : 'no-show'">
                <dot :type="1"></dot>
            </div>
        </div>
        <div class="container" ref="cart_container">
            <div class="wrapper">
                <div class="content">
                    <!-- 空购物车 -->
                    <null-slot v-show="totalCartLength === 0" tip="空空如也"></null-slot>
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
                                            <span class="item_action" @click="handleDeleteCart(i.id, item.brandId, i.skuId)" :data-cartid="i.id" :data-skuid="i.skuId" :data-brandid="item.brandId">删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixbar" v-show="totalCartLength !== 0">
            <div class="container">
                <div class="wrapper">
                    <div class="content">
                        <div class="total_checkbox">
                            <i class="checkbox checkbox_total" :class="{checkbox_selected: selectedTotalShow}" @click="handleTotalSelected"></i>
                            全选
                        </div>
                        <div class="text" :class="showSettlement ? '' : 'no-show'">
                            <div class="price clearfix">
                                <p class="p1">
                                    总计:
                                    <span>¥{{ totalData.totalPrice }}</span>
                                </p>
                                <p class="p2">已优惠¥1232.00</p>
                            </div>
                            <button class="settlement" @click="handleBuyValidate">去结算(<em>{{ totalData.totalNum }}</em>件)</button>
                        </div>
                        <div class="text" :class="showSettlement ? 'no-show' : ''">
                            <div class="operation">
                                <p class="p1">
                                    <span class="icon"></span>
                                    <span>清理</span>
                                </p>
                                <p class="p2" @click="handleCollection()">移入收藏夹</p>
                                <p class="p3" @click="handleDeleted()">删除</p>
                            </div>
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
import dot from '@components/common/dot'
import footerIndex from "@components/footerIndex";
import inputNum from "@views/cart/components/inputNum";
import { getCart, modifyCart, deleteCart, productValidate } from '@/service/getData'
import nullSlot from "@components/nullSlot";
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
            showSettlement: true,
            totalCartLength: '',
            selectedData: [],
        }
    },
    components: {
        dot,
        footerIndex,
        inputNum,
        nullSlot
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
            this.totalCartLength = data.length;
            this.cartData = result;
        },
        // 购物车删除
        async handleDeleteCart(cartid, brandid, skuid) {
            let _this = this
            await deleteCart({
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
            if(JSON.stringify(_this.cartData) == '{}') {
                this.totalCartLength = 0
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
            let param = new FormData()
            for(let key in this.skuIds){
                param.append('sku_id[' + key + ']', this.skuIds[key])
            }
            if(JSON.stringify(this.skuIds) == '{}') {
                this.$toast("你还没有选择宝贝哦")
                return false
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
        },
        handleEditCart() {
            this.showSettlement = !this.showSettlement
        },
        handleCollection() {
            console.log('移入收藏夹')
        },
        handleDeleted() {
            if(this.selectedData.length <= 0) {
                this.$toast("你还没有选择宝贝哦")
                return false
            }
            this.$dialog.confirm({
                title: '确认删除?',
                confirmButtonText: '删除',
                cancelButtonText: '我在想想'
            })
            .then(() => {
                this.selectedData.forEach(item => {
                    let split_arr = item.split('-')
                    this.handleDeleteCart(split_arr[0], split_arr[1], split_arr[2])
                })
            })
            .catch(() => {
                console.log('取消')
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.cart_container, {
                scrollbar: true,
                click: true,
                useTransition: false
            });
        });
        this.init()
    },
    computed: {
        totalData: function() {
            let total = 0;
            let num = 0;
            this.skuIds = {}
            this.selectedData = []
            this.cartIds = []
            this.selectedRange.forEach(item => {
                for(let key in this.cartData) {
                    if(this.cartData[key].product[item] !== undefined) {
                        total += this.cartData[key].product[item].price.price * this.cartData[key].product[item].num
                        num += this.cartData[key].product[item].num
                        this.skuIds[item] = this.cartData[key].product[item].num
                        this.cartIds.push(this.cartData[key].product[item].id)
                        let selectedData = this.cartData[key].product[item].id + '-' + this.cartData[key].brandId + '-' + item
                        this.selectedData.push(selectedData)
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
// 头部样式
.cartHeader
  height: $headerIndexTop
  .wrapper
    .content
      height: $headerIndexTop
      width: 84%
      padding-left: 4%
      display: flex
      justify-content: space-between
      align-items: center
      p.p1
        @include sc(32px, #333333)
        font-weight: bold
        span
          font-weight: normal
          @include sc(26px, #666666)
      p.p2
        @include sc(24px, #666666)
//body样式
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
                padding-top: 0
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
                .content
                    height: 100px
                    padding: 0 20px
                    display: flex
                    justify-content: space-between
                    align-items: center
                    .total_checkbox
                        @include sc(26px, #333)
                        .checkbox_total
                            margin-right: 10px
                    .text
                        display: flex
                        justify-content: space-between
                        align-items: center
                        .price
                            color: #333
                            margin-top: -10px
                            .p1
                                font-size: 30px
                                span
                                    font-size: 32px
                                    font-weight: 700
                            .p2   
                        .operation
                            display: flex
                            justify-content: space-between
                            align-items: center
                            width: 100%
                            p
                                margin: 0 10px
                                font-size: 24px
                            .p1
                                display: flex
                                justify-content: center
                                color: #444444
                                margin-left: 0
                                .icon
                                    display: inline-block
                                    @include wh(36px, 36px)
                                    @include bis('../../assets/images/icon/deleted.png')
                            .p2
                                border: 1px solid $theam
                                padding: 18px 12px  
                                border-radius: 50px
                                color: $theam
                            .p3
                                background-image: linear-gradient(-45deg, #f97590, #f90336 50%)
                                color: $fc
                                padding: 18px 40px
                                border-radius: 50px
                                margin-right: 0
                        .settlement
                            margin-left: 20px
                            border-radius: 40px
                            line-height: 76px
                            text-align: center
                            background-image: linear-gradient(-45deg, #f97590, #f90336 50%)
                            @include wh(226px, 76px)
                            @include sc(28px, #fff)
                            em
                                font-weight: 700

</style>