<template>
  <div class="city_list">
    <div class="list" ref="list">
      <div class="content">
        <div class="area">
          <div class="hotCity border_topbottom">当前城市</div>
          <div class="city_wrapper">
            <div class="city_item">
              <div class="button_item">广州</div>
            </div>
            <div class="city_item">
              <div class="button_item">广州</div>
            </div>
            <div class="city_item">
              <div class="button_item">广州</div>
            </div>
            <div class="city_item">
              <div class="button_item">广州</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="hotCity border_topbottom">热门城市</div>
          <div class="city_wrapper">
            <div class="city_item">
              <div class="button_item">广州</div>
            </div>
            <div class="city_item">
              <div class="button_item">广州</div>
            </div>
            <div class="city_item">
              <div class="button_item">广州</div>
            </div>
            <div class="city_item">
              <div class="button_item">广州</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="item of cities" :key="item.idx" :ref="item.idx">
          <div class="hotCity border_topbottom">{{ item.idx }}</div>
          <div class="botton_wrapper" v-for="item of item.cities" :key="item.id">
            <div class="botton_item">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "cityList",
  props: {
    cities: Array,
    letter: String
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element, 600);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.list, {});
    });
  }
};
</script>

<style lang="scss" scoped>
.city_list {
  height: 88vh;
}
.list {
  position: absolute;
  top: $cityTop;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.city_list .area {
  background-color: #fff;
}
.city_list .area .border_topbottom::before {
  border: 1px solid #ccc;
}
.city_list .area .border_topbottom::after {
  border: 1px solid #ccc;
}
.city_list .area .hotCity {
  padding: 12px 20px;
  line-height: 37.5px;
  background: #eee;
  color: #666;
  font-size: 26px;
}
.city_list .area .city_wrapper {
  overflow: hidden;
  padding: 12px 56px 12px 12px;
}
.city_list .area .city_wrapper .city_item {
  float: left;
  width: 33.3%;
}
.city_list .area .city_wrapper .city_item .button_item {
  line-height: 48px;
  border-radius: 7.5px;
  border: 1px solid #ccc;
  padding: 6px 0;
  font-size: 18px;
  text-align: center;
  margin: 8px;
}
.city_list .area .botton_wrapper {
  margin: 0 20px;
}
.city_list .area .botton_wrapper .botton_item {
  background: $fc;
  line-height: 64px;
  color: #333;
  border-bottom: 1px solid #f5f5f5;
  font-size: 14px;
  padding: 8px 0;
}
</style>
