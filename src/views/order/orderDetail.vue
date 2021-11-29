<template>
    <div class="orderDetail"  v-show="JSON.stringify(shipping_data) !== '{}'">
        <header-dot :title="title" :type="4">
            <template v-slot:title>
                <p class="t-title">剩余23小时59分自动关闭</p>
            </template>
            <template v-slot:content>
                <div class="address-container">
                    <div class="address-content">
                        <div class="icon">
                            <i></i>
                        </div>
                        <div class="detail">
                            <div class="user-info">
                                <span class="name">{{ shipping_data.name }}</span>
                                <span class="mobile">{{ shipping_data.mobile }}</span>
                            </div>
                            <div class="address-info">
                                {{shipping_data.pca + " " + shipping_data.address}}
                            </div>
                        </div>
                        <div class="modify">
                            <p @click="handleRedirectAddressList()">修改</p>
                        </div>
                    </div>
                </div>
            </template>
        </header-dot>
        <div class="container"  ref="order_wrapper" >
            <div class="content">
                <div class="item" v-for="(item, index) of orderData" :key="index">
                    <div class="seller">
                        <div class="name">
                            <i class="icon_shop"></i>
                            {{ item.name }}
                            <i class="icon_arrow_right"></i>
                        </div>
                    </div>
                    <div class="detail" v-for="(i, k) of item.product" :key="k">
                        <div class="wrapper">
                            <div class="img">
                                <self-image width="100%" :src="i.skuImg" radius="5"/>
                            </div>
                            <div class="content">
                                <p class="p1">{{ i.productName }}</p>
                                <p class="p2">{{ i.skuName }}</p>
                                <p class="p3">3天内发货</p>
                            </div>
                            <div class="price">
                                ¥
                                <span>
                                    <em>{{i.int}}</em>
                                    {{ i.point == '' ? '' : '.' + i.point }}
                                </span> 
                                <p class="num">×{{ i.number }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="extra">
                        <div class="list">
                            <p class="p1">商品总价</p>
                            <p class="p2">
                                <span>¥</span>
                                {{orderOtherData.origin_price.int}}<span>{{ orderOtherData.origin_price.point == '' ? '' : '.' + orderOtherData.origin_price.point }}</span>
                            </p>
                        </div>
                        <div class="list">
                            <p class="p1">运费</p>
                            <p class="p2">
                                <span>¥</span>{{orderOtherData.shipping_price.int}}<span>{{ orderOtherData.shipping_price.point == '' ? '' : '.' + orderOtherData.shipping_price.point }}</span>
                            </p>
                        </div>
                        <div class="list list-hover">
                            <p class="p1">优惠</p>
                            <p class="p2">
                                <span>¥</span>{{orderOtherData.discount_price.int}}<span>{{ orderOtherData.discount_price.point == '' ? '' : '.' + orderOtherData.discount_price.point }}</span>
                            </p>
                        </div>
                    </div>
                    <div class="total_price">
                        <span class="text">实付款&nbsp;</span>
                        <span class="price">
                            <span class="scale">¥</span>{{orderOtherData.price.int}}<span class="scale">{{ orderOtherData.price.point == '' ? '' : '.' + orderOtherData.price.point }}</span>
                        </span>
                    </div>
                </div>
                
                <div class="order-item">
                    <div class="content">
                        <div class="title">
                            <p>订单信息</p>
                        </div>
                        <div class="detail">
                            <div class="l-title">
                                <p>订单编号：</p>
                            </div>
                            <div class="r-data">
                                <p>{{orderno}}</p>
                                <p class="copy" @click="handleCopy(orderno)">复制</p>
                            </div>
                        </div>
                        <div class="detail">
                            <div class="l-title">
                                <p>创建时间：</p>
                            </div>
                            <div class="r-data">
                                <p>{{ orderOtherData.time }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="link">
                    <p class="p1"><span></span>联系卖家</p>
                    <p class="p2"><span></span><a href="tel://18825099087">拨打电话</a></p>
                </div>
                <!-- <pay-recommand :productData="productData" :title="recommandTitle"></pay-recommand> -->
            </div>
        </div>
        <div class="orderDetailFooter">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-item">
                        <div class="footer-more needsclick">
                            <van-popover
                            v-model="showPopover"
                            trigger="click"
                            :actions="actions"
                            placement="top-start"
                            @select="onSelect"
                            >
                                <template #reference>
                                    <p class="footer-more_text">更多</p>
                                </template>
                            </van-popover>
                        </div>
                        <div class="footer-operate">
                            <p class="footer-p" @click="handleRedirectAddressList()">修改地址</p>
                            <p class="footer-p">帮我付</p>
                            <p class="footer-p footer-hover">付款</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import headerDot from "@components/headerDot";
import payRecommand from "@views/pay/components/payRecommand";
import { productList, findOrder, findAddress } from "@/service/getData";
import { copy } from '@/util/mUtils';
export default {
    name: 'orderDetail',
    data() {
        return {
            title: '等待买家付款',
            recommandTitle: '你可能还喜欢',
            recommandPage: 0,
            productData: [], // 产品列表
            productDataMeta: [],
            orderno: '',
            orderData: {},
            orderOtherData: {},
            shipping_data: {},
            showPopover: false,
            actions: [{ text: '加入购物车' }, { text: '取消订单' }],
        }
    },
    components: {
        headerDot,
        payRecommand
    },
    methods: {
        // 获取推荐产品--暂取消
        async getProductListData(){
            this.recommandPage++;
            await productList({
                page: this.recommandPage,
                include: 'medias'
            }).then((res) => {
                this.productData = this.productData.concat(res.data)
                this.productDataMeta = res.meta
            })
        },
        handleCopy(text) {
            copy(text) 
            ? this.$toast.success('复制成功') 
            : this.$toast.fail('不支持复制,该浏览器不支持自动复制') 
        },
        async init() {
            this.orderno = this.$route.params.orderno
            let res = await findOrder({
                include: "productOrder,snapshot,productOrder.brand,productOrder.productOrderChild,productOrder.shippingAddress"
            }, this.orderno)
            let data = res.data
            let productOrderData = data.productOrder.data
            let result = {}
            let snapshot = eval('(' + data.snapshot.data.value + ')')
            let addressId = '';
            
            // 订单详情数据
            productOrderData.forEach(item => {
                let brand_id = item.brand_id
                result[brand_id] = result[brand_id] === undefined ? {} : result[brand_id]
                result[brand_id]['name'] = item.brand.data.name
                let orderChildData = item.productOrderChild.data
                // 地址数据
                if(addressId === '') {
                    let params = eval("("+this.$store.getters.getOrderQuery+")")
                    addressId = (params == null || params.addressId == null) ? item.shippingAddress.data.id : params.addressId
                    findAddress({id: addressId}).then((res) => {
                        let shipped_data = {
                            name: res.data.name,
                            mobile: res.data.tel,
                            pca: res.data.province + ' ' + res.data.city + ' ' + res.data.county,
                            address: res.data.addressDetail,
                        };
                        this.shipping_data = shipped_data
                    })
                }
                orderChildData.forEach(i => {
                    result[brand_id]['product'] = result[brand_id]['product'] === undefined ? {} : result[brand_id]['product']
                    result[brand_id]['product'][i.sku_id] = result[brand_id]['product'][i.sku_id] === undefined 
                    ? {} 
                    : result[brand_id]['product'][i.sku_id]
                    result[brand_id]['product'][i.sku_id]['int'] = i.product_price.int
                    result[brand_id]['product'][i.sku_id]['point'] = i.product_price.point
                    result[brand_id]['product'][i.sku_id]['number'] = i.number
                    result[brand_id]['product'][i.sku_id]['skuName'] = ''
                    for(let s in snapshot.sku_info) {
                        let snapshotSkuData = snapshot.sku_info[s]
                        if(snapshotSkuData.id != i.sku_id) continue
                        let attrKey = snapshotSkuData.attr_key.split('-')
                        let attrValues = snapshotSkuData.attr_values
                        result[brand_id]['product'][i.sku_id]['productId'] = i.product_id
                        result[brand_id]['product'][i.sku_id]['productName'] = snapshotSkuData.product.name
                        result[brand_id]['product'][i.sku_id]['skuImg'] = snapshotSkuData.media.link
                        attrKey.forEach(a => {
                            result[brand_id]['product'][i.sku_id]['skuName'] += ',' + attrValues[a].name
                        })
                        result[brand_id]['product'][i.sku_id]['skuName'] = result[brand_id]['product'][i.sku_id]['skuName'].substr(1)
                    }
                })
            })
            this.orderData = result
            this.orderOtherData.time = data.created_at
            this.orderOtherData.shipping_price = data.shipping_price
            this.orderOtherData.discount_price = data.discount_price
            this.orderOtherData.price = data.price
            this.orderOtherData.origin_price = data.origin_price
        },
        handleRedirectAddressList() {
            this.$store.commit('setOrderQuery', {
                addressId: null
            });
            this.$router.push({name: 'addressList'})
        },
        /**
         * 查看更多-选项框点击
         */
        onSelect(action) {
            console.log(action);
        },
    },
    mounted() {  
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.order_wrapper, {
                scrollbar: true,
                useTransition:false,
                // 上拉加载
                pullUpLoad: {
                    // 当上拉距离超过30px时触发 pullingUp 事件
                    threshold: -30
                },
                click: true,
            });
            // this.scroll.on('pullingUp', () => {
            //     // console.log(this.productDataMeta.length)
            //     // 判断请求页数与总页数来显示底部区域
            //     if(this.productDataMeta.length == 0) this.getProductListData();
            //     if (this.productDataMeta.length !== 0 && this.recommandPage < this.productDataMeta.pagination.total_pages)
            //         this.getProductListData(); 
            //     // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
            //     this.scroll.finishPullUp()
            // });
            this.init()
            
        });
    }
}
</script>
<style lang="sass" scoped>
.orderDetail /deep/ .van-popover__action-text
    font-size: 24px
.orderDetail /deep/ .headerDot 
    height: auto
.orderDetail /deep/ .headerDot .wrapper .text
    padding-top: 20px
    padding-bottom: 0px 
    font-size: 32px
    line-height: 1
.orderDetail
    background-color: #f2f2f2
    height: 100vh
    .t-title
        text-align: center
        @include sc(24px, $fc)
    .address-container
        padding: 20px 20px
        .address-content
            padding: 0 20px
            background-color: $fc
            border-radius: 10px
            display: flex
            justify-content: space-between
            align-items: center
            height: 156px
            .icon
                background-image: linear-gradient(45deg, #f8bf37, #fb5c25 60%)
                border-radius: 50%
                @include wh(70px, 70px)
                i
                    display: inline-block
                    @include wh(70px, 70px)
                    @include bis("../../assets/images/icon/location_32x32.png")
                    background-size: 60%
                    background-position: center
            .detail
                width: 64%
                .user-info
                    .name
                        font-weight: bold
                        font-size: 32px
                    .mobile
                        margin-left: 10px
                        @include sc(24px, #999999)
                .address-info
                    @include sc(26px, #999999)
                    @include overwraps(2)
            .modify
                p
                    padding: 10px 28px
                    @include sc(26px, #999999)
                    border: 1px solid #999999
                    border-radius: 50px
    .vir-height
        height: 184px
    .container
        position: relative
        height: $hOrderdetailTop
        overflow: hidden
        .content
            .item
                background: $fc
                padding: 20px
                .seller
                    display: flex
                    justify-content: space-between
                    .name
                        line-height: 32px
                        font-weight: 700
                        color: #333
                        .icon_shop
                            vertical-align: bottom
                            display: inline-block
                            @include wh(32px, 32px)
                            @include bis('../../assets/images/icon/cart_shop.png')
                        .icon_arrow_right
                            @include borderArrow('right', 10px, #999999)
                            margin-bottom: 2px
                    .status
                        color: $theam
                .detail
                    padding-top: 20px
                    .wrapper
                        display: flex
                        justify-content: space-between
                        .img
                            width: 26%
                        .content
                            width: 54%
                            box-sizing: border-box
                            padding: 0 18px
                            .p1
                                @include sc(28px, #262626)
                                @include overwraps(2)
                                font-weight: bold
                            .p2
                                margin: 10px 0
                                @include sc(24px, #999999)
                                @include overwraps(2)
                            .p3
                                @include sc(24px, #DCA94F)
                        .price
                            width: 20%
                            text-align: right
                            span
                                em
                                    font-weight: 600
                                    font-size: 32px
                            .num
                                margin: 10px 0
                                color: #999999
                .extra
                    .list
                        display: flex
                        justify-content: space-between
                        padding-top: 20px
                        .p1
                            @include sc(24px, #333333)
                        .p2
                            @include sc(24px, #999999)
                            span
                                display: inline-block
                                padding-bottom: 4px
                                transform: scale(0.75)
                    .list-hover
                        .p2
                            color: $theam
                .total_price
                    text-align: right
                    .text
                        font-weight: bold
                        @include sc(28px, #333333)
                    .price
                        @include sc(28px, $theam)
                        .scale
                            display: inline-block
                            padding-bottom: 4px
                            transform: scale(0.75)
                .order_price
                    margin: 28px 0
                    .price
                        margin-right: 10px
                        float: right
                        font-size: 24px
                        em.bold
                            font-weight: bold
                        em
                            font-size: 32px
                        span
                            em
                                font-weight: 600
                                font-size: 32px
                    .grey
                        color: #999999
                    .price:first-child
                        margin: 0
                .button
                    .more
                        position: relative
                        float: left   
                        .more_text
                            padding-top: 14px 
                            @include sc(12px, #999999)
                    .text
                        width: 80%
                        float: right
                        text-align: right
                        p
                            display: inline-block
                            border-radius: 50px
                            font-size: 24px
                            padding: 14px 18px
                            border: 1px solid #cfcfcf
                            margin-left: 16px 
                            min-width: 18%
                            text-align: center
                        p:first-child
                            margin-left: 0
                        p.hover
                            border: 1px solid $theam
                            color: $theam
            .order-item
                margin-top: 20px
                background-color: $fc
                padding-bottom: 20px
                .content
                    padding: 0 20px
                    .title
                        padding: 20px 0
                        p
                            font-weight: bold
                            @include sc(32px, #333333)
                    .detail
                        display: flex
                        justify-content: space-between
                        align-items: center
                        padding: 10px 0
                        @include sc(24px, #333333)
                        .l-title
                            p
                        .r-data
                            width: 70%   
                            display: flex
                            justify-content: space-between
                            p     
                            p.copy    
                                color: $theam
            .link
                display: flex
                justify-content: space-between
                border-top: 1px solid #f0f0f0
                background-color: $fc
                align-items: center
                p
                    width: 50%
                    @include sc(28px, #333333)
                    text-align: center
                    padding: 20px
                    
                .p1
                    display: flex
                    align-items: center
                    justify-content: center
                    span
                        display: inline-block
                        margin-right: 20px
                        @include wh(38px, 38px)
                        @include bis('../../assets/images/icon/kefu.png')
                .p2
                    position: relative
                    display: flex
                    align-items: center
                    justify-content: center
                    span
                        display: inline-block
                        margin-right: 20px
                        @include wh(38px, 38px)
                        @include bis('../../assets/images/icon/phone.png')
                .p2::before
                    content: ''
                    width: 1px
                    top: 0
                    transform: scale(0.6)
                    height: 100%
                    position: absolute
                    left: 0
                    background-color: #999999
    .orderDetailFooter
        height: $footerIndexTop
        background-color: $fc
        display: flex
        align-items: center
        .footer-container
            width: 100%
            .footer-content
                .footer-item
                    display: flex
                    justify-content: space-between
                    align-items: center
                    padding: 0 20px
                    .footer-more
                        .footer-more_text
                            color: #999999
                    .footer-operate
                        width: 60%
                        display: flex
                        justify-content: space-between  
                        align-items: center
                        .footer-p
                            padding: 10px 24px
                            border-radius: 50px
                            border: 1px solid #cccccc
                            @include sc(26px, #666666)
                        .footer-hover
                            border: 1px solid $theam
                            color: $theam
                





</style>