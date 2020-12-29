<template>
    <div class="payResult">
        <header-not-dot :title="title" :type="2"></header-not-dot>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="result">
                        {{ result === true ? '支付成功' : '支付失败'}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerNotDot from "@components/headerNotDot";
export default {
    name: 'payResult',
    data() {
        return {
            title: '支付结果',
            result: this.$route.params.result
        }
    },
    components: {
        headerNotDot
    },
}
</script>
<style lang="sass" scoped>

</style>