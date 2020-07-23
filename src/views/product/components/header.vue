<template>
    <div class="prodHeader">
        <div class="wrapper">
            <div class="content">
                <div class="left">
                    <span></span>
                </div>
            </div>
        </div>
        <dot :type="2"></dot>
    </div>
</template>
<script>
import dot from '@components/common/dot'
export default {
    name: 'prodHeader',
    props: {
        type: {
            default: 1
        }
    },
    components: {
        dot
    }
}
</script>
<style lang="sass" scoped>
.prodHeader
    .wrapper
        width: 100%
        position: fixed
        top: 0
        left: 0
        height: $headerIndexTop
        .content
            margin: 20px 20px 0 20px
            .left
                @include borderArrow(left, 20px, $arrowGrey)
</style>