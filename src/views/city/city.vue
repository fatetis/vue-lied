<template>
  <div class="city">
    <header-not-dot :title="title"></header-not-dot>
    <search-cities :cities="cities"></search-cities>
    <city-list :cities="cities" :letter="letter"></city-list>
    <city-letters :alphabet="alphabet" @change="handleLetterChange"></city-letters>
  </div>
</template>

<script>
import headerNotDot from "@components/headerNotDot";
import searchCities from "@views/city/components/searchCities";
import cityList from "@views/city/components/cityList";
import cityLetters from "@views/city/components/cityLetters";
import { city } from "@/service/getData";
export default {
  name: "city",
  data() {
    return {
      cities: [],
      alphabet: [],
      letter: "",
      title: "城市选择"
    };
  },
  components: {
    headerNotDot,
    searchCities,
    cityList,
    cityLetters
  },
  methods: {
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    city().then(res => {
      this.cities = res.cityList;
      this.alphabet = res.alphabet;
    });
  }
};
</script>
