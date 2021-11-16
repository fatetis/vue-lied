<template>
    <div class="orderDetailFooter">
        <div class="container">
            <div class="content">
                <div class="item">
                    <div class="more needsclick">
                        <van-popover
                        v-model="showPopover"
                        trigger="click"
                        :actions="actions"
                        placement="top-start"
                        @select="onSelect"
                        >
                            <template #reference>
                                <p class="more_text">更多</p>
                            </template>
                        </van-popover>
                    </div>
                    <div class="operate">
                        <p>修改地址</p>
                        <p>帮我付</p>
                        <p class="hover">付款</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'orderDetailFooter',
    data() {
        return {
            showPopover: false,
            actions: [{ text: '加入购物车' }, { text: '取消订单' }],
        }
    },
    props: ["orderno"],
    methods: {
        /**
         * 查看更多-选项框点击
         */
        onSelect(action) {
            console.log(action);
        },
    }
}
</script>
<style lang="sass" scoped>
.orderDetailFooter
    height: $footerIndexTop
    .container
        position: fixed
        bottom: 0
        left: 0
        width: 100%
        background-color: $fc
        .content
            padding: 20px
            .item
                display: flex
                justify-content: space-between
                align-items: center
                .more
                    .more_text
                        color: #999999
                .operate
                    width: 60%
                    display: flex
                    justify-content: space-between  
                    align-items: center
                    p
                        padding: 8px 24px
                        border-radius: 50px
                        border: 1px solid #cccccc
                        @include sc(24px, #666666)
                    p.hover
                        border: 1px solid $theam
                        color: $theam
                        

</style>