<template>
    <div class="addressList">
        <header-not-dot :title="title" :type="2"></header-not-dot>
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
        />
    </div>
</template>
<script>
import headerNotDot from "@components/headerNotDot";
import { getAddress } from '@/service/getData';
import { setStore } from '@/util/mUtils'

export default {
    name: 'addressList',
    data() {
        return {
            title: '我的收货地址',
            chosenAddressId: '1',
            list: [],
            disabledList: [
                // {
                // id: '3',
                // name: '王五',
                // tel: '1320000000',
                // address: '浙江省杭州市滨江区江南大道 15 号',
                // },
            ],
            fullPath: {}
            
        };
    },
    components: {
        headerNotDot
    },
    methods: {
        onAdd() {
            this.$router.replace({
                name: 'addressEdit',
                params: {id: 0}
            })
        },
        onEdit(item, index) {
            this.$router.replace({
                name: 'addressEdit',
                params: {id: item.id}
            })
        },
        onSelect(item, index) {
            let orderQuery = eval("("+this.$store.getters.getOrderQuery+")");
            orderQuery.address_id = item.id
            this.$store.commit('setOrderQuery', orderQuery);
            this.$router.go(-1);
        },
        getAddressData() {
            getAddress({

            }).then((res) => {
                this.list = res.data
            })
        }
    },
    mounted(){
        this.getAddressData();
    }
};
</script>