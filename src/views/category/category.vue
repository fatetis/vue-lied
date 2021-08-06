<template>
    <div class="category">
        <header-search></header-search>
        <div class="container clearfix" >
            <div class="float left">
                <div class="wrapper left_wrapper" ref="left_wrapper">
                    <div class="content">
                        <ul>
                            <li @click="getProductData" :class="hover == 0 ? 'hover' : ''">热门推荐</li>
                            <li :class="hover == item.id ? 'hover' : ''" v-for="(item, index) of categoryParentData" :key="index" :data-pid="item.id" @click="getProductData">{{ item.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="float right">
                <div class="wrapper" ref="right_wrapper">
                    <div class="content">
                        <div class="item" v-for="(item, index) of categoryChildData" :key="index">
                            <div class="title">{{ item.name }}</div>
                            <div class="list">
                                <ul class="clearfix">
                                    <li v-for="(v, k) of item.children" :key="k">
                                        <self-image :src="(v.media && v.media.link) || ''"/>
                                        <p>{{ v.name }}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <footer-index></footer-index>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import headerSearch from '@components/headerSearch'
import footerIndex from "@components/footerIndex";
import { productCategory } from '@/service/getData'
export default {
    name: 'category',
    data () {
        return {
            categoryParentData: {},
            categoryChildData: {},
            hover: 0,
        }
    },
    components: {
        headerSearch,
        footerIndex,
    },
    methods: {
        getProductData (e) {
            let arr = e === undefined ? 0 : (e.target.dataset.pid || 0)
            this.hover = arr
            productCategory({
                pid: arr
            }).then((res) => {
                arr === 0 && (this.categoryParentData = res.data)
                this.categoryChildData  = arr === 0 ? res.rec : res.data
            })
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.left_wrapper, {
                scrollbar: true
            });
            this.scroll = new Bscroll(this.$refs.right_wrapper, {
                scrollbar: true
            });
        });
        this.getProductData()
    }
}
</script>
<style lang="sass" scoped>
.container
    width: 100%
    position: relative
    .float
        float: left
    .left
        width: 172px
        background-color: #f8f8f8
        height: $hftop
        min-width: 152px
        overflow: hidden
        .left_wrapper
            position: relative
        .wrapper
            height: $hftop
            .content
                li
                    font-size: 28px
                    color: #333
                    text-align: center
                    height: 92px
                    line-height: 92px
                .hover
                    color: #e93b3d
    .right
        width: calc( 100% - 172px )
        overflow: hidden
        box-sizing: border-box
        height: $hftop
        .wrapper
            height: $hftop
            overflow: hidden
            .content
                margin: 0 20px
                .title
                    font-size: 28px
                    color: #333
                    height: 96px
                    line-height: 96px
                    font-weight: 700
                .list
                    padding-bottom: 34px
                    ul
                        li
                            float: left
                            width: 33.3%
                            box-sizing: border-box
                            text-align: center
                            /deep/ .van-image
                                    display: inline-block
                                    width: 140px
                                    height: 140px
                            p
                                color: #333
        
</style>