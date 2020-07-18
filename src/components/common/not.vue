<template>
    <div class="not">
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <img src="@assets/images/icon/not.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'not'
}
</script>
<style lang="sass" scoped>
.container
    position: absolute
    top: 0
    right: 0
    .wrapper
        .content
            width: 80px
            height: $headerIndexTop
            img
                @include wh(100%, auto)
                transform: scale(0.8)
</style>