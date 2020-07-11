<template>
    <div class="category">
        <div class="content">
            <div class="box_wrapper">
                <div class="box_item clearfix">
                    <router-link :to="{name: 'city'}" class="link">
                        <img class="img_category" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp" alt="">
                        <span class="text">领券</span>
                    </router-link>
                    <router-link :to="{name: 'city'}" class="link">
                        <img class="img_category" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp" alt="">
                        <span class="text">领券</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'category'
}
</script>
<style lang="sass" scoped>
.category
    .content
        width: 100%
        overflow: hidden
        .link
            width: 20%
            text-align: center
            display: block
            float: left
            .img_category
                width: 80px
                margin-top: 20px
                text-align: center
                vertical-align: top
                display: inline-block
            .text
                display: block
                margin-top: 12px
                color: #666
</style>