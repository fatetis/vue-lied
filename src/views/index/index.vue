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
                    <recommand 
                    :productData="productData"
                    v-show="!(JSON.stringify(productData) == '[]')"></recommand>
                    <!-- 版权 -->
                    <copy-right v-show="footShow"></copy-right>
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
import { indexAdv, productList } from "@/service/getData";
export default {
    name: "index",
    data() {
        return {
            swiperBanner: {}, // 轮播数据
            categoryData: {}, // 分页数据
            specialBannerData: {}, // 广告插件
            strollDayData: {}, // 每日逛
            productData: [], // 产品列表
            productDataMeta: [],
            page: 0,
            footShow: false
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
            // 对象转数组
            let arr = [];
            for (var i in array) {
                arr.push(array[i]); //属性
            }
            while(index < arr.length) {
                newArray.push(arr.slice(index, index += subGroupLength));
            }
            return newArray;
        },
        getProductListData(){
            this.page++;
            productList({
                page: this.page,
                include: 'medias'
            }).then((res) => {
                this.productDataMeta = res.meta;
                this.productData = this.productData.concat(res.data)
                if(this.productDataMeta.pagination.count <= 1) {
                    this.footShow = true;
                }
            })
        }
        
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.index_wrapper, {
                scrollbar: true,
                useTransition:false,
                // 上拉加载
                pullUpLoad: {
                    // 当上拉距离超过30px时触发 pullingUp 事件
                    threshold: -8
                },
                // 下拉刷新
                pullDownRefresh: {
                    // 下拉距离超过30px触发pullingDown事件
                    threshold: 8,
                    // 回弹停留在距离顶部20px的位置
                    stop: 0
                }
            });
            this.scroll.on('pullingUp', () => {
                // 判断请求页数与总页数来显示底部区域
                if(this.page >= this.productDataMeta.pagination.total_pages) {
                    this.footShow = true;
                }else{
                    this.getProductListData();
                }
                setTimeout(() => {
                    // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
                    this.scroll.finishPullUp()
                }, 2000)
            });
            // this.scroll.on('pullingDown', () => {
            //     console.log('处理下拉刷新操作')
            //     setTimeout(() => {
            //         // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
            //         this.scroll.finishPullDown()
            //     }, 2000)
            // })
        });
        indexAdv({
            city: 1
        }).then((res) => {
            this.swiperBanner = res.index;
            this.categoryData = this.group(res.index_category, 10) || {};
            this.specialBannerData = res.index_plug || {};
            this.strollDayData = this.group(res.index_daily, 4) || {};
        });
        this.getProductListData();

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
