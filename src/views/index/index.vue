<template>
    <div class="index">
        <header-index></header-index>
        <div class="index_container">
            <div class="index_wrapper" ref="index_wrapper">
                <div class="index_content">
                    <!-- 轮播 -->
                    <home-swiper :swiperBanner="swiperBanner"></home-swiper>
                    <!-- 首页分类 -->
                    <category 
                    :categoryData="categoryData" 
                    v-show="!(JSON.stringify(categoryData) == '{}')">
                    </category>
                    <!-- 广告插件 -->
                    <special-banner 
                    :specialBannerData="specialBannerData" 
                    v-show="!(JSON.stringify(specialBannerData) == '{}')">
                    </special-banner>
                    <!-- 每日逛 -->
                    <stroll-day 
                    :strollDayData="strollDayData" 
                    v-show="!(JSON.stringify(strollDayData) == '{}')">
                    </stroll-day>
                    <!-- 今日推荐 -->
                    <recommand></recommand>
                    <!-- 版权 -->
                    <copy-right></copy-right>
                </div>
            </div>
        </div>
        <footer-index></footer-index>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
import headerIndex from "@components/headerIndex";
import homeSwiper from "@views/index/components/homeSwiper";
import category from "@views/index/components/category";
import specialBanner from "@views/index/components/specialBanner";
import strollDay from "@views/index/components/strollDay";
import recommand from "@views/index/components/recommand";
import copyRight from "@views/index/components/copyRight";
import footerIndex from "@components/footerIndex";
import { indexAdv } from "@/service/getData";
export default {
    name: "index",
    data() {
        return {
            swiperBanner: {}, // 轮播数据
            categoryData: {}, // 分页数据
            specialBannerData: {}, // 广告插件
            strollDayData: {}, // 每日逛
        }
    },
    components: {
        headerIndex,
        homeSwiper,
        category,
        specialBanner,
        strollDay,
        recommand,
        copyRight,
        footerIndex,
    },
    methods: {
        group(array, subGroupLength) {
            let index = 0;
            let newArray = [];
            if(array == undefined) return {};
            while(index < array.length) {
                newArray.push(array.slice(index, index += subGroupLength));
            }
            return newArray;
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.index_wrapper, {
                scrollbar: true,
            });
        });
        indexAdv({
            city: 1
        }).then((res) => {
            this.swiperBanner = res.index;
            this.categoryData = this.group(res.index_category, 8) || {};
            this.specialBannerData = res.index_plug || {};
            this.strollDayData = this.group(res.index_daily, 4) || {};
        });
    },
};
</script>


<style lang="sass" scoped>
.index
    background-color: #f6f6f6
    overflow: hidden
    height: 100vh
    width: 100%
    position: relative
    .index_container
    .index_wrapper
        height: $hftop
        overflow: hidden

        
</style>
