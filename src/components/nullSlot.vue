<template>
    <div class="nullSlot">
        <div class="container">
            <div class="height"></div>
            <img src="@/assets/images/order/null-page-draw.png" alt="">
            <p>{{ tip ? tip : '没有找到符合条件的结果'}}</p>
            <div class="height"></div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'nullSlot',
    props: ['tip']
}
</script>
<style lang="sass" scoped>
.nullSlot
    .container
        
        text-align: center
        .height
            height: 100px
        img
            width: 230px
        p
            margin-top: 20px
            @include sc(26px, #999999)
</style>