<template>
  <div class="headerIndex">
    <div class="margin_content clearfix">
      <router-link :to="{name: 'city'}">
        <div class="padding_city">
          <div class="city">广州</div>
        </div>
      </router-link>

      <div class="search_wrapper">
        <div class="search">
          <i class="logo"></i>
          <i class="icon"></i>
          <div class="input">
            <router-link :to="{name: 'search'}">
            <input type="text" disabled name placeholder="请输入搜索名称" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="register">
        <router-link v-if="this.$store.getters.getLoginStatus === 1" :to="{name: 'userCenter'}">
          <img src="@assets/images/icon/user_center_index.png" alt="">
        </router-link>
        <router-link v-else :to="{name: 'login'}">
          <span>登录</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerIndex"
};
</script>
<style lang="sass" scoped>
.headerIndex
  height: $headerIndexTop

  .margin_content
    position: fixed
    width: 100%
    height: $headerIndexTop
    background-color: $theam
    z-index: 99
    top: 0
    left: 0
    overflow: hidden
    .padding_city
      margin-left: 20px
      padding: 14px 14px 14px 0
      float: left
      height: $headerIndexTop
      box-sizing: border-box
      display: flex
      align-items: center
      .city
        @include sc(28px, #fff)
        @include bis("../assets/images/icon/location_32x32.png")
        padding-left: 38px
        background-size: 40%
    .search_wrapper
      margin: 0 40px 0 100px
      overflow: hidden
      height: $headerIndexTop
      .search
        position: relative
        height: 60px
        margin-right: 56px
        margin-top: 14px
        position: relative
        .logo:after
          content: ''
          border-right: 1px solid #ddd
          height: 31px
          position: absolute
          left: 54px
          top: 6px
        .logo
          display: block
          margin: 12px 16px 0 30px
          position: relative
          z-index: 1
          float: left
          @include bis("../assets/images/logo/small_letter.png")
          @include wh(40px, 40px)
        .icon
          display: block
          margin: 14px 0 0 16px
          position: relative
          z-index: 1
          float: left
          @include wh(36px, 36px)
          @include bis("../assets/images/icon/search_32x32.png")
        .input
          display: block
          width: 100%
          border-radius: 30px
          height: 60px
          overflow: hidden
          background: #f7f7f7
          font-size: 24px
          -webkit-box-align: center
          line-height: 60px
          position: absolute
          top: 0
          left: 0
          padding-left: 128px
          padding-right: 20px
          box-sizing: border-box
          input
            border: 0
            background: 0 0
            font-size: 24px
            color: #232326
            padding-left: 10px
            box-sizing: border-box
            -webkit-box-flex: 1
            height: auto
            margin: 0 0 0 10px
            vertical-align: middle
            text-overflow: ellipsis
            white-space: nowrap
            width: 100%
            line-height: 32px;
    .register
      z-index: 120
      overflow: hidden
      position: absolute
      top: 0
      right: 0
      width: 78px
      height: $headerIndexTop
      line-height: $headerIndexTop
      span
        margin: 14px 0
        @include sc(28px, #fff)
      img
        margin: 24px 14px
        @include wh(38px, 38px)
          

            
            
</style>