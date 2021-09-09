<template>
    <div class="orderList">
        <order-list-header></order-list-header>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="order_status">
                        <div class="order_status_item">
                            <ul>
                                <li :class="{hover: orderStatus == null}" @click="handleClickStatus">全部</li>
                                <li :class="{hover: orderStatus == 0}" @click="handleClickStatus" data-status="0">待付款</li>
                                <li :class="{hover: orderStatus == 1}" @click="handleClickStatus" data-status="1">待发货</li>
                                <li :class="{hover: orderStatus == 3}" @click="handleClickStatus" data-status="3">待收货</li>
                                <li :class="{hover: orderStatus == 4}" @click="handleClickStatus" data-status="4">待评价</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="item_container">
                        <div class="item_wrapper"  ref="order_wrapper">
                            <div class="item_content">
                                <null-slot v-show="orderDataLength === 0" tip="暂无此类订单"></null-slot>
                                <div class="item" v-for="(item, index) of orderData" :key="index">
                                    <div class="seller">
                                        <div class="name">
                                            <i class="icon_shop"></i>
                                            {{ item.name }}
                                            <i class="icon_arrow_right"></i>
                                        </div>
                                        <div class="status">{{ item.show_status_text }}</div>
                                    </div>
                                    <router-link :to="{name: 'orderDetail', params: {orderno: item.orderno}}">
                                    <div class="detail"  v-for="(i, k) of item.product" :key="k">
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
                                        <div class="label">
                                            <p class="title">运费险</p>
                                        </div>
                                        <div class="text">
                                            <p class="p1">退换货可自动理赔</p>
                                            <p class="p2">¥&nbsp;0.00×1</p>
                                        </div>
                                    </div>
                                    </router-link>
                                    <div class="order_price clearfix">
                                        <div class="price " v-if="item.pay_price.price != 0">
                                            <em class="bold">&nbsp;实付款&nbsp;</em>¥
                                            <span>
                                                <em>{{ item.pay_price.int }}</em>
                                                {{ item.pay_price.point == '' ? '' : '.' + item.pay_price.point }}
                                            </span> 
                                        </div>
                                        <div class="price " v-if="item.show_status == 0">
                                            <em class="bold">&nbsp;需付款&nbsp;</em>¥
                                            <span>
                                                <em>{{ item.price.int }}</em>
                                                {{ item.price.point == '' ? '' : '.' + item.price.point }}
                                            </span> 
                                        </div>
                                        <div class="price grey" v-if="item.discount_price.int != 0">
                                            <em>优惠&nbsp;</em>¥
                                            <span>
                                                <em>{{ item.discount_price.int }}</em>
                                                {{ item.discount_price.point == '' ? '' : '.' + item.discount_price.point }}
                                            </span>
                                        </div>
                                        <div class="price grey" v-if="item.price.price != 0">
                                            <em>总价&nbsp;</em>¥
                                            <span>
                                                <em>{{ item.price.int }}</em>
                                                {{ item.price.point == '' ? '' : '.' + item.price.point }}&nbsp;
                                            </span>
                                        </div>
                                    </div>
                                    <div class="button clearfix">
                                        <div class="more">
                                            <van-popover
                                            v-model="item.showPopover"
                                            trigger="click"
                                            :actions="actions"
                                            :offset="[0,8]"
                                            placement="bottom-start"
                                            @select="onSelect(index)"
                                            >
                                                <template #reference>
                                                    <p class="more_text">更多</p>
                                                </template>
                                            </van-popover>
                                        </div>
                                        <div class="text">
                                            <p>修改地址 </p>
                                            <p class="hover" @click="handlePay(item.orderno)" v-if="item.show_status == 0">付款</p>
                                        </div>
                                    </div>
                                </div>
                                <pay-recommand :productData="productData" :title="recommandTitle"></pay-recommand>
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
import orderListHeader from "@components/orderListHeader";
import payRecommand from "@views/pay/components/payRecommand";
import { productList, orderList } from "@/service/getData";
import { mergeJson } from '@/util/mUtils'
import nullSlot from "@components/nullSlot";
export default {
    name: 'orderList',
    data() {
        return {
            productData: [], // 产品列表
            recommandTitle: '你可能还喜欢',
            recommandPage: 0,
            orderData: {},
            orderDataMeta: [],
            productDataMeta: [],
            orderPage: 0,
            orderStatus: null,
            orderDataLength: 1,
            actions: [{ text: '加入购物车' }, { text: '取消订单' }],
        }
    },
    components: {
        orderListHeader,
        payRecommand,
        nullSlot
    },
    methods: {
        handleClickStatus(e) {
            this.orderStatus = e.currentTarget.dataset.status == undefined ? null : e.currentTarget.dataset.status
            this.orderPage = 0
            this.recommandPage = 0
            this.productData = []
            this.orderData = {}
            this.getOrderListData()
        },
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
        async getOrderListData() {
            this.orderPage++
            let res = await orderList({
                page: this.orderPage,
                status: this.orderStatus,
                include: 'productOrderChild,order,order.snapshot,brand'
            })
            let data = res.data
            let result = {}
            this.orderDataMeta = res.meta
            this.orderDataLength = data.length
            data.forEach(item => {  
                let orderId = item.id
                let snapshotData = item.order.data.snapshot
                let orderChildData = item.productOrderChild.data
                let brandData = item.brand.data
                let snapshot = eval('(' + snapshotData.data.value + ')')
                result[orderId] = result[orderId] === undefined ? {} : result[orderId]
                result[orderId]['name'] = brandData.name
                result[orderId]['showPopover'] = false
                result[orderId]['price'] = item.order.data.price
                result[orderId]['discount_price'] = item.order.data.discount_price
                result[orderId]['pay_price'] = item.order.data.pay_price
                result[orderId]['show_status'] = item.show_status
                result[orderId]['show_status_text'] = item.show_status_text
                result[orderId]['orderno'] = item.order.data.orderno
                orderChildData.forEach(i => {
                    result[orderId]['product'] = result[orderId]['product'] === undefined 
                    ? {} 
                    : result[orderId]['product']
                    result[orderId]['product'][i.sku_id] = result[orderId]['product'][i.sku_id] === undefined 
                    ? {} 
                    : result[orderId]['product'][i.sku_id]
                    result[orderId]['product'][i.sku_id]['int'] = i.product_price.int
                    result[orderId]['product'][i.sku_id]['point'] = i.product_price.point
                    result[orderId]['product'][i.sku_id]['number'] = i.number
                    result[orderId]['product'][i.sku_id]['skuName'] = ''
                    for(let s in snapshot.sku_info) {
                        let snapshotSkuData = snapshot.sku_info[s]
                        if(snapshotSkuData.id != i.sku_id) continue
                        let attrKey = snapshotSkuData.attr_key.split('-')
                        let attrValues = snapshotSkuData.attr_values
                        result[orderId]['product'][i.sku_id]['productId'] = i.product_id
                        result[orderId]['product'][i.sku_id]['productName'] = snapshotSkuData.product.name
                        result[orderId]['product'][i.sku_id]['skuImg'] = snapshotSkuData.media.link
                        attrKey.forEach(a => {
                            result[orderId]['product'][i.sku_id]['skuName'] += ',' + attrValues[a].name
                        })
                        result[orderId]['product'][i.sku_id]['skuName'] = result[orderId]['product'][i.sku_id]['skuName'].substr(1)
                    }
                })
            });
            this.orderData = mergeJson(this.orderData, result)
            if(this.orderDataMeta.pagination.current_page == this.orderDataMeta.pagination.total_pages) {
                this.getProductListData();
            }
        },
        init() {
            let orderStatus = this.$route.query.status
            if(orderStatus !== undefined) this.orderStatus = orderStatus
            this.getOrderListData()
        },
        /**
         * 查看更多-选项框点击
         */
        onSelect(action) {
            console.log(action);
        },
        /**
         * 付款
         */
        handlePay(orderno) {
            this.$router.push({
                name: 'payIndex',
                params: {id: orderno}
            })
        }
        
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
            });

            this.scroll.on('pullingUp', () => {
                // console.log(this.productDataMeta.length)
                // 判断请求页数与总页数来显示底部区域
                if(this.orderPage < this.orderDataMeta.pagination.total_pages) {
                    this.getOrderListData();
                } else {
                    if(this.productDataMeta.length == 0) this.getProductListData();
                    if (this.productDataMeta.length !== 0 && this.recommandPage < this.productDataMeta.pagination.total_pages)
                     this.getProductListData(); 
                }
                // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
                this.scroll.finishPullUp()
            });
        });
        this.init()
    }
}
</script>
<style lang="sass" scoped>
.orderList
    height: 100vh
    background-color: $bc1
    .container
        .wrapper
            .content
                .order_status
                    padding: 0 20px
                    margin-bottom: 20px 
                    .order_status_item
                        ul
                            display: flex
                            justify-content: space-between
                            text-align: center
                            @include sc(26px, #494949)
                            li
                                padding: 20px 0
                            li.hover
                                @include sc(26px, $theam)
                                border-bottom: 4px solid $theam
                .item_container
                    .item_wrapper
                        height: $horderlisttop
                        overflow: hidden
                        .item_content
                            .item
                                background: $fc
                                margin: 20px
                                overflow: hidden
                                border-radius: 20px
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
                                    display: flex
                                    justify-content: space-between
                                    padding-top: 20px
                                    .label
                                        width: 20%
                                        .title
                                            text-align: right
                                            @include sc(24px, #000000)
                                            font-weight: 500
                                    .text
                                        width: 76%
                                        display: flex
                                        justify-content: space-between
                                        .p1
                                            @include sc(24px, #999999)
                                        .p2
                                            @include sc(24px, #000000)
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

                                


</style>