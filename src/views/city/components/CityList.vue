<template>
  <div class="city_list">
    <div class="list">
      <div class="hotCity border_topbottom">当前城市</div>
      <div class="city_wrapper">
        <div class="city_item">
          <div class="button_item">广州</div>
        </div>
      </div>
    </div>
    <div class="list">
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
        <div class="city_item">
          <div class="button_item">广州</div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="hotCity border_topbottom">A</div>
      <div class="botton_wrapper">
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
      </div>
    </div>
    <div class="list">
      <div class="hotCity border_topbottom">A</div>
      <div class="botton_wrapper">
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
      </div>
    </div>
    <div class="list">
      <div class="hotCity border_topbottom">A</div>
      <div class="botton_wrapper">
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
      </div>
    </div>
    <div class="list">
      <div class="hotCity border_topbottom">A</div>
      <div class="botton_wrapper">
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
      </div>
    </div>
    <div class="list">
      <div class="hotCity border_topbottom">A</div>
      <div class="botton_wrapper">
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
          <div class="botton_item">阿米尔</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityList"
};
</script>

<style lang="scss" scoped>
.city_list {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
.city_list .list .border_topbottom::before {
  border: 1px solid #ccc;
}
.city_list .list .border_topbottom::after {
  border: 1px solid #ccc;
}
.city_list .list .hotCity {
  padding: 6px 8px;
  line-height: 37.5px;
  background: #eee;
  color: #666;
  font-size: 20px;
}
.city_list .list .city_wrapper {
  overflow: hidden;
  padding: 7.5px 48px 7.5px 7.5px;
}
.city_list .list .city_wrapper .city_item {
  float: left;
  width: 33.3%;
}
.city_list .list .city_wrapper .city_item .button_item {
  line-height: 37.5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 6px;
  font-size: 7.5px;
  text-align: center;
  margin: 8px;
}
.city_list .list .botton_wrapper .botton_item {
    background: #fff;
    padding-left: 18px;
    line-height: 64px;
    color: #666;
    border-bottom: 1px solid #ccc;
    font-size: 6px;
}
</style>
