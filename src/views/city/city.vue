<template>
    <div class="city">
        <!-- <SearchCities /> -->
        <city-list></city-list>
        <city-letters></city-letters>
    </div>
</template>

<script>
import searchCities from '@/views/city/components/searchCities'
import cityList from '@/views/city/components/cityList'
import cityLetters from '@/views/city/components/cityLetters'
import {city} from '@/service/getData'
export default {
    'name': 'city',
    data () {
        return {
            citiess: {},
        }
    },
    components: {
        // SearchCities,
        cityList,
        cityLetters
    },
    mounted () {
        city().then(res => {
            console.log(res);
            // this.cities = res;
        })
    }
}
</script>
