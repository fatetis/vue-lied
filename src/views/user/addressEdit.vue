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
        :address-info="addressInfo"
        />
    </div>
</template>

<script>
import headerNotDot from "@components/headerNotDot";
import { regionPca, findAddress, updateOrCreateAddress, deleteAddress } from '@/service/getData';
export default {
    name: 'addressEdit',
    data() {
        return {
            title: '新增收货地址',
            id: '',
            showDelete: false,
            areaList: {},
            searchResult: [],
            addressInfo: {},
        };
    },
    components: {
        headerNotDot
    },
    methods: {
        onSave(content) {
            updateOrCreateAddress({
                name: content.name,
                mobile: content.tel,
                area_code: content.areaCode,
                address: content.addressDetail,
                default: content.isDefault,
                id: content.id,
                code: content.postalCode,
            }).then((res) => {
                this.$router.replace({name: 'addressList'})
            })
        },
        onDelete() {
            deleteAddress({
                id: this.id
            }).then((res) => {
                this.$router.replace({name: 'addressList'})
            }) 
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
            if(this.$route.params.id == 0) {
                this.title = '新增收货地址'
            }else{
                this.id = this.$route.params.id;
                this.showDelete = true;
                this.title = '编辑收货地址'
            }
        },
        getRegionPcaData() {
            regionPca({

            }).then((res) => {
                this.areaList = res
            })
        },
        findAddressData() {
            if(this.id == 0) return true;
            findAddress({
                id: this.id
            }).then((res) => {
                res.data.isDefault = res.data.isDefault === 1 ? true : false
                this.addressInfo = res.data
            })
        }

    },
    mounted() {
        this.changeTitle();
        this.getRegionPcaData();
        this.findAddressData();
    }
};
</script>