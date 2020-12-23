<template>
    <div class="order">
        <header-not-dot :title="title" :type="2"></header-not-dot>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="address">
                        <div class="address_content address_border">
                            <router-link :to="{name: 'addressList'}">
                            <div class="address_detail">
                                <div class="detail_content">
                                    <p class="p1">{{ addressData.pca }}</p>
                                    <p class="p2">{{ addressData.addressDetail }}</p>
                                </div>
                                <div class="address_arrow"></div>
                            </div>
                            <div class="address_user">
                                <p class="name">{{ addressData.name }}</p>
                                <p class="tel">{{ addressData.tel }}</p>
                            </div>
                            </router-link>
                        </div>
                    </div>

                    <div class="padding">
                        <div class="order_container">
                            <div class="order_wapper">
                                <div class="order_content">
                                    <div class="item">
                                        <div class="seller clearfix">
                                            <i class="checkbox checkbox_seller"></i>
                                            <div class="text clearfix">
                                                <i class="icon_shop"></i>
                                                <div class="name">
                                                    {{ productData.brandName }}
                                                    <i class="icon_arrow_right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item_product">
                                            <div class="product clearfix">
                                                
                                                <div class="text clearfix">
                                                    <div class="img_wrap">
                                                        <img class="prod_thumb" :src="productData.picture" alt="图片加载失败">
                                                    </div>
                                                    <div class="right">
                                                        <div class="name">{{ productData.productName }}
                                                        </div>
                                                        <div class="sku_line_style sku_line">
                                                            <div class="sku sku_style">
                                                                <span class="sku_attr sku_attr_style">{{ productData.skuName }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="price_line clearfix">
                                                            <div class="price">
                                                                ¥<span>
                                                                    <em>{{ productData.productPrice.int }}</em>
                                                                    .{{ productData.productPrice.point }}
                                                                    </span>
                                                            </div>
                                                            <div class="num_wrap">
                                                                <input-num :value="num" :min="1" @change="handleChangeNum"></input-num>
                                                            </div>
                                                        </div>
                                                        <div class="order_detail_tip">
                                                            <ul>
                                                                <li>
                                                                    <img src="" alt="">
                                                                    支持15天无理由退货
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shipping">
                                        <div class="shipping_content clearfix">
                                            <div class="title">
                                                <p class="p1">配送</p>
                                                <p class="p2">中小件送货时间</p>
                                            </div>
                                            <div class="title content">
                                                <p class="p1">快递运输</p>
                                                <p class="p2">工作日、双休日与节假日均可送货</p>  
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shipping">
                                        <div class="shipping_content clearfix">
                                            <div class="title">
                                                <p class="p1">留言</p>
                                            </div>
                                            <input type="text" placeholder="选填，给商家留言" maxlength="45">
                                        </div>
                                    </div>
                                </div>
                                <div class="price_content">
                                    <div class="price_item">
                                        <div class="shipping">
                                            <div class="shipping_content clearfix">
                                                <div class="title">
                                                    <p class="p1">商品总额</p>
                                                </div>
                                                <div class="title content">
                                                    <p class="p1 small_size font_weight">￥{{ totalProductPrice }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shipping">
                                            <div class="shipping_content clearfix">
                                                <div class="title">
                                                    <p class="p1">运费</p>
                                                </div>
                                                <div class="title content">
                                                    <p class="p1 small_size change_red_color">免运费</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shipping shipping_padding_right">
                                            <div class="shipping_content clearfix">
                                                <div class="title">
                                                    <p class="p1">优惠券</p>
                                                </div>
                                                <div class="title content">
                                                    <p class="p1 small_size change_grey_color">无可用</p>
                                                </div>
                                                <div class="arrow arrow_grey"></div>
                                            </div>
                                        </div>
                                        <div class="total_price">
                                            总计：<span>￥{{ totalPrice }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="price_content invoice_content">
                                    <div class="price_item">
                                        <div class="shipping shipping_padding_right">
                                            <div class="shipping_content nomargin clearfix">
                                                <div class="title">
                                                    <p class="p1">发票</p>
                                                </div>
                                                <div class="title content">
                                                    <p class="p1 small_size change_grey_color">不开发票</p>
                                                </div>
                                                <div class="arrow arrow_grey"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="submit_order">
                                    提交订单
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
import headerNotDot from "@components/headerNotDot";
import inputNum from "@views/cart/components/inputNum";
import { upFixed } from "@/util/mUtils";
import { productSkuDetail, findAddress, order } from '@/service/getData'

export default {
    name: 'order',
    data() {
        return {
            title: '确认订单',
            // 路由参数信息
            routeParam: {},
            // 产品数据
            productData: {
                picture: '',
                productName: '',
                productPrice: '',
                brandName: '',
                skuName: '',
            },
            // 地址数据
            addressData: {
                id: '',
                name: '',
                tel: '',
                pca: '',
                addressDetail: '',
            },
            // 商品总价格
            totalProductPrice: '',
            // 订单总价格
            totalPrice: '',
            // 产品数量
            num: 1,
            // 产品skuid
            skuId: '',
        }
    },
    components: {
        headerNotDot,
        inputNum
    },
    methods: {
        // 获取订单产品信息
        getProductSkuDetail() {
            productSkuDetail({
                include: 'product,product.attrs,product.brand'
            }, this.skuId).then((res) => {
                let data = res.data
                this.productData.picture = data.media.data.link
                this.productData.productName = data.product.data.name
                this.productData.productPrice = data.product.data.price
                this.productData.brandName = data.product.data.brand.data.name
                // 遍历查找sku名称
                let attrData = data.product.data.attrs.data
                let attrKey = data.attr_key
                for(let i = 0; i < attrData.length; i++) {
                    this.productData.skuName += '，' + attrData[i].attr.data.name + '：'
                    for(let j = 0; j < attrData[i].values.data.length; j++) {
                        let values_data = attrData[i].values.data[j];
                        let keyIndex = attrKey.indexOf(values_data.product_attr_value_id)
                        if(keyIndex !== -1) {
                            this.productData.skuName += values_data.value.data.name
                        }
                    }
                }
                this.productData.skuName = this.productData.skuName.substr(1)
                this.calculatePrice()
            })
        },
        // 获取默认收货地址
        findUserAddress() {
            let condition = this.addressData.id === undefined ? {is_default: 1} : {id : this.addressData.id}
            findAddress(condition).then((res) => {
                let data = res.data;
                this.addressData.id = data.id
                this.addressData.name = data.name
                this.addressData.tel = data.tel
                this.addressData.pca = data.province+'省' + data.city + data.county
                this.addressData.addressDetail = data.addressDetail
            })
        },
        // 修改产品数量
        handleChangeNum(num) {
            this.num = num
        },
        // 计算价格
        calculatePrice() {
            this.totalProductPrice = upFixed(this.productData.productPrice.price*this.num)
            this.totalPrice = this.totalProductPrice;
        },
        // 初始化
        init() {
            // 订单参数值
            this.routeParam = eval("("+this.$store.getters.getOrderQuery+")")
            this.num = this.routeParam.num
            this.skuId = this.routeParam.skuId
            this.addressData.id = this.routeParam.addressId
        },
        order() {
            order({
                sku_id: this.skuId,
                num: this.num,
                address_id: this.addressData.id,
            }).then((res) => {
                console.log(res)
            })
        }
    },
    watch: {
        num(){
            this.calculatePrice();
        }
    },
    mounted() {
        this.init()
        this.getProductSkuDetail()
        this.findUserAddress()
    }
}
</script>
<style lang="sass" scoped>
.shipping_padding_right
    padding-right: 28px
.shipping
    width: 100%
    position: relative
    box-sizing: border-box
    .shipping_content
        margin-top: 20px
        .title
            position: relative
            float: left
            text-align: left
            z-index: 2
            line-height: 42px
            .p1
                
                font-weight: 400
                @include sc(28px, #333)
            .p2
                margin: 16px 0
                @include sc(12px, #999)
        .content 
            float: right
            text-align: right
        input
            position: absolute
            right: 0
            z-index: 1
            float: right
            text-align: right
            display: block
            width: 100%
            box-sizing: border-box
            padding-left: 120px
            line-height: 42px
        input::-webkit-input-placeholder 
            // /* Chrome/Opera/Safari */
            color: #999
        input::-moz-placeholder 
            // /* Firefox 19+ */
            color: #999
        input:-ms-input-placeholder
            // /* IE 10+ */
            color: #999

        input:-moz-placeholder 
            // /* Firefox 18- */
            color: #999
        .arrow
            position: absolute
            top: 50%
            margin-top: -8px 
            right: 0
        .arrow_grey
            @include borderArrow(right, 12px, #999)

.order
    height: 100vh
    background-color: #f7f7f7
    .container
        .wrapper
            .content
                .address
                    width: 100%
                    box-sizing: border-box
                    .address_border
                        background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAKBAMAAACOO0tGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURf///4u16Oxtbezz/J3B7NDh9vSmprjS8vGNjfjDw/vd3f7w8O57e0EOI68AAABSSURBVCjPY2CAAE4l7GACVJ4hUBArEIXJL8KuXw0mz4xdv2ABVJ77EHYDGmAGmGDXLwKT58CuX2cDTIEjdgOcYfJJ2A3Qgsmz4/CBwWgQUiMIAXzCOFELLk/nAAAAAElFTkSuQmCC) -14px bottom repeat-x
                        background-size: 128px 10px 
                    .address_content
                        padding: 24px 20px
                        .address_detail
                            position: relative
                            .detail_content
                                padding-right: 20px 
                                .p1
                                    @include sc(12px, #666)
                                .p2
                                    font-weight: 700
                                    padding: 12px 0
                                    @include sc(32px, #333)
                            .address_arrow
                                position: absolute
                                right: 0
                                top: 50%
                                margin-top: -8px
                                @include borderArrow(right, 16px, #666)
                        .address_user
                            width: 100%
                            @include sc(12px, #666)
                            p
                                display: inline-block
                                word-wrap: break-word
                                word-break: break-all
                            .name
                                margin-right: 12px
                .padding
                    margin-top: 20px
                    .order_container
                        .order_wapper
                            .order_content
                                background-color: #fff
                                padding: 20px 20px
                                box-sizing: border-box
                                border-radius: 20px
                                overflow: hidden
                                .item
                                    margin-bottom: 10px
                                    .seller
                                        .checkbox_seller
                                        .text
                                            float: left
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
                                            .text 
                                                float: left
                                                box-sizing: border-box
                                                width: 100%
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
                                                        font-size: 28px
                                                        @include overwraps(2)
                                                        
                                                    .sku_line_style
                                                        width: 100%
                                                        .sku_style
                                                            display: inline-block
                                                            position: relative
                                                            border-radius: 16px
                                                            padding-left: 12px
                                                            box-sizing: border-box
                                                            max-width: 100%
                                                            line-height: 32px
                                                            margin-bottom: 16px
                                                            @include sc(12px, #999)
                                                            .sku_attr_style
                                                                display: inline-block
                                                                max-width: 100%
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
                                                    .order_detail_tip
                                                        margin: 14px 0
                                                        li
                                                            color: #999
                                                            img
                                                                display: inline-block
                                                                @include wh(30px, 30px)
                                                                @include bis('../../assets/images/order/fiveteen.png')
                                                                vertical-align: bottom
                            .price_content
                                margin-top: 20px
                                background-color: #fff
                                padding: 20px 20px
                                box-sizing: border-box
                                border-radius: 20px
                                overflow: hidden
                                .price_item
                                    .shipping
                                        .font_weight
                                            font-weight: 700
                                        .small_size
                                            font-size: 12px
                                        .change_red_color
                                            color: #f2270c
                                        .change_grey_color
                                            color: #999
                                    .total_price:before
                                        content: ''
                                        height: 1px
                                        background: #e5e5e5
                                        position: absolute
                                        width: 100%
                                        top: 0
                                        left: 0
                                    .total_price
                                        margin-top: 40px
                                        position: relative
                                        padding: 40px 0 20px 0
                                        font-size: 28px
                                        text-align: right
                                        span
                                            font-weight: 600
                                            color: #f2270c
                            .invoice_content
                                .nomargin
                                    margin: 0
                            .submit_order
                                margin: 60px 20px
                                padding: 28px 20px
                                box-sizing: border-box
                                background: #f2270c
                                @include sc(36px, #fff)
                                text-align: center
                                border-radius: 100px





















                        






</style>