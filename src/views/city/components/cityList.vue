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
          </div>
        </div>
        <div class="area">
          <div class="hotCity border_topbottom">热门城市</div>
          <div class="city_wrapper">
            <div class="city_item">
              <div class="button_item">广州</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="hotCity border_topbottom">A</div>
          <div class="botton_wrapper">
            <div class="botton_item">阿米尔</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "cityList",
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.list, {});
    });
  }
};
</script>

<style lang="scss" scoped>
.list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.city_list .area .border_topbottom::before {
  border: 1px solid #ccc;
}
.city_list .area .border_topbottom::after {
  border: 1px solid #ccc;
}
.city_list .area .hotCity {
  padding: 6px 8px;
  line-height: 37.5px;
  background: #eee;
  color: #666;
  font-size: 20px;
}
.city_list .area .city_wrapper {
  overflow: hidden;
  padding: 7.5px 64px 7.5px 7.5px;
}
.city_list .area .city_wrapper .city_item {
  float: left;
  width: 33.3%;
}
.city_list .area .city_wrapper .city_item .button_item {
  line-height: 37.5px;
  border-radius: 7.5px;
  border: 1px solid #ccc;
  padding: 6px;
  font-size: 7.5px;
  text-align: center;
  margin: 8px;
}
.city_list .area .botton_wrapper .botton_item {
  background: #fff;
  padding-left: 18px;
  line-height: 64px;
  color: #666;
  border-bottom: 1px solid #ccc;
  font-size: 6px;
}
.city_list .area .botton_wrapper .botton_item:last-child {
  border: none;
}
</style>
