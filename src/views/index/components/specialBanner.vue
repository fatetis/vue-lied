<template>
    <div class="specialBanner">
        <div class="container">
            <div class="wrapper">
                <div class="content clearfix">

                    <div class="item" v-for="(item, index) of specialBannerData" :key="index">
                        <div class="show_img">
                            <img :src="item.link" alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'specialBanner',
    props: ['specialBannerData']
}
</script>
<style lang="sass" scoped>
    .container
        width: 100%
        background: #fff
        box-sizing: border-box
        margin-bottom: 20px 
        .wrapper
            .content
                .item
                    width: 33.33%
                    float: left
                    .show_img
                        img
                            width: 100%
</style>