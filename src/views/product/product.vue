<template>
    <div class="product">
        <prod-header></prod-header>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                     <prod-swiper></prod-swiper>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import prodHeader from '@views/product/components/prodHeader'
import prodSwiper from '@views/product/components/prodSwiper'
export default {
    name: 'product',
    components: {
        prodHeader,
        prodSwiper
    }
}
</script>
<style lang="sass" scoped>
.product
    .container
        .wrapper
            .content
</style>