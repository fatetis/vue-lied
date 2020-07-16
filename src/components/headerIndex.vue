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
            <input type="text" name placeholder="请输入搜索名称" />
            </div>
        </div>
      </div>
      <div class="register">
        <span>登录</span>
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
    position: fixed
    width: 100%
    height: 88px
    background-color: $theam
    z-index: 10
    .margin_content
        margin-left: 20px 
    .padding_city
        padding: 14px 14px 14px 0
        float: left
        height: 88px
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
        height: 88px
        .search
            position: relative
            height: 60px
            margin-right: 56px
            margin-top: 14px
            position: relative
            .logo
                @include bis("../assets/images/logo/small_letter.png")
                @include wh(40px, 40px)
                display: block
                margin: 12px 16px 0 30px
                position: relative
                z-index: 1
                float: left
            .logo:after
                content: ''
                border-right: 1px solid #ddd 
                height: 31px
                position: absolute
                left: 54px
                top: 6px
            .icon
                display: block
                @include wh(36px, 36px)
                @include bis("../assets/images/icon/search_32x32.png")
                margin: 14px 0 0 16px
                position: relative
                z-index: 1
                float: left
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
        height: 88px
        line-height: 88px
        span
            @include sc(28px, #fff)
            margin: 14px 0

            
            
</style>