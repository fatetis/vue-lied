<template>
    <div class="comment">
        <header-not-dot :title="title" :type="2"></header-not-dot>
        <div class="container">
            <div class="wrapper">
                <div class="content">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerNotDot from '@components/headerNotDot'
export default {
    name: 'comment',
    data() {
        return {
            title: '发表评价'
        }
    },
    components: {
        headerNotDot
    }
}
</script>
<style lang="sass" scoped>
.comment
    background-color: $bc2
    
</style>