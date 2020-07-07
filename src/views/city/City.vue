<template>
    <div class="city">
        <!-- <SearchCities /> -->
        <CityList />
    </div>
</template>

<script>
import SearchCities from '@/views/city/components/SearchCities.vue'
import CityList from '@/views/city/components/CityList.vue'
export default {
    'name': 'City',
    components: {
        // SearchCities,
        CityList
    }
}
</script>
