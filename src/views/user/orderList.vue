<template>
    <div class="orderList">
        <order-list-header></order-list-header>
    </div>
</template>
<script>
import orderListHeader from "@components/orderListHeader";
export default {
    name: 'orderList',
    components: {
        orderListHeader,
    },
}
</script>
<style lang="sass" scoped>
.orderList
    height: 100vh
    background-color: $bc1
</style>