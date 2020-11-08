<template>
    <div class="addressEdit">
        <header-not-dot :title="title" :type="2"></header-not-dot>
        <van-address-edit
        :area-list="areaList"
        show-postal
        :show-delete="showDelete"
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
import headerNotDot from "@components/headerNotDot";
export default {
    name: 'addressEdit',
    data() {
        return {
            title: '编辑收货地址',
            id: '',
            showDelete: false,
            areaList: {
                province_list: {
                    110000: '北京市',
                    120000: '天津市'
                },
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市',
                    120200: '县'
                },
                county_list: {
                    110101: '东城区',
                    110102: '西城区',
                    110105: '朝阳区',
                    110106: '丰台区',
                    120101: '和平区',
                    120102: '河东区',
                    120103: '河西区',
                    120104: '南开区',
                    120105: '河北区',
                }
            },
            searchResult: [],
        };
    },
    components: {
        headerNotDot
    },
    methods: {
        onSave(content) {
            console.log(content)
            this.$toast('save');
        },
        onDelete() {
            this.$toast('delete');    
        },
        onChangeDetail(val) {
            // if (val) {
            //     this.searchResult = [
            //     {
            //         name: '黄龙万科中心',
            //         address: '杭州市西湖区',
            //     },
            //     ];
            // } else {
            //     this.searchResult = [];
            // }
        },
        changeTitle() {
            if(this.$route.params.id === 0) {
                this.title = '新增收货地址'
            }else{
                this.id = this.$route.params.id;
                this.showDelete = true;
                this.title = '编辑收货地址'
            }
        }
    },
    mounted() {
        this.changeTitle();
    }
};
</script>