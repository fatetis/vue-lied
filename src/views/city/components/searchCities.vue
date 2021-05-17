<template>
    <div class="search_cities">
        <div class="search_wrapper">
            <input v-model="keyVal" class="search_content" type="text" placeholder="请输入搜索城市名称">
        </div>
        <div class="list_wrapper" v-show="bigShow" ref="list_wrapper">
            <div class="content">
                <div class="content-item">
                    <div class="botton_item" v-for="item in screenCities" :key="item" v-show="!show">{{ item }}</div>
                    <div class="botton_item"  v-show="show">暂无搜索数据</div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
    'name': 'searchCities',
    data () {
        return {
            keyVal: '', // 搜索关键词
            screenCities: [], // 筛选的城市数组
            show: true, // 是否展示搜索为空数据提示
            bigShow: false, // 是否展示搜索数据
            timer: null // 节流控制
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.list_wrapper, {
                scrollbar: true
            });
        });
    },
    props: {
        cities: Array
    },
    watch: {
        keyVal () {
            if(this.timer) {
                clearTimeout(this.timer)
            }
            if(this.keyVal.length > 0) {
                this.timer = setTimeout(() => {
                    this.screenCities = []
                    // 匹配关键词写入数组
                    for(let item of this.cities){
                        item.cities.forEach(element => {
                            if(element.name.indexOf(this.keyVal) >= 0){
                                this.screenCities.push(element.name)
                            }
                            if(element.pinyin.indexOf(this.keyVal) >= 0){
                                this.screenCities.push(element.name)
                            }
                        });
                    }
                    
                    this.show = this.screenCities.length > 0 ? false : true
                    this.bigShow = true
                }, 500)
            }else{
                this.screenCities = []
                this.show = true
                this.bigShow =  false
            }
            this.scroll.refresh()
        }
    }
}
</script>

<style lang="sass" scoped>
.search_cities
    background: #fff
    .search_wrapper
        width: 100%
        padding: 20px 20px
        box-sizing: border-box
        .search_content
            color: #666
            width: 100%
            line-height: 46px
            text-align: center
            border-radius: 10px
            border: 1px solid #ccc
            padding: 8px 28px 
            box-sizing: border-box
    .list_wrapper
        position: absolute
        left: 0
        top: $cityTop
        bottom: 0
        right: 0
        z-index: 1
        background-color: $bc
        overflow: hidden
        .content
            background-color: $fc
            .content-item
                margin: 0 18px
                .botton_item
                    background: $fc
                    padding: 8px 0
                    line-height: 64px
                    color: #333
                    border-bottom: 1px solid #f5f5f5
                    font-size: 24px
</style>
