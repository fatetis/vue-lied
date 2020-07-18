<template>
    <div class="category">
        <header-search></header-search>
        <footer-index></footer-index>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import headerSearch from '@components/headerSearch'
import footerIndex from "@components/footerIndex";
export default {
    name: 'category',
    components: {
        headerSearch,
        footerIndex
    }
}
</script>
<style lang="sass" scoped>

</style>