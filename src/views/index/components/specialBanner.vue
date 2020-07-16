<template>
    <div class="specialBanner">
        <div class="container">
            <div class="wrapper">
                <div class="content clearfix">
                    <div class="item">
                        <div class="show_img">
                            <img src="@assets/images/index/special_1.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <div class="show_img">
                            <img src="@assets/images/index/special_2.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <div class="show_img">
                            <img src="@assets/images/index/special_3.png" alt="">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'specialBanner'
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