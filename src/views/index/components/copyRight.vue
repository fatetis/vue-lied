<template>
  <div class="copyRight">
    <div class="wrapper">
      <div class="content">
        <div class="common_link clearfix border">
          <div class="item">
            <router-link :to="{name: 'login'}">
              <p>登录</p>
            </router-link>
          </div>
          <div class="item">
            <router-link :to="{name: 'login'}">
              <p>注册</p>
            </router-link>
          </div>
          <div class="item">
            <router-link :to="{path: '/'}">
              <p>客户服务</p>
            </router-link>
          </div>
          <div class="item">
            <router-link :to="{path: '/'}">
              <p>意见反馈</p>
            </router-link>
          </div>
        </div>
        <div class="copy_right border">
          <!-- <p>粤ICP备74568512号-2</p>
          <p>Copyright © 2014-2020 lied. All rights reserved.</p> -->
          
          <p>网站仿京东(<a href="https://m.jd.com">https://m.jd.com</a>)的风格。如有任何侵权纠纷，可及时联系开发者处理，以免造成不必要的麻烦</p>
          
          <p>开发者：fatetis QQ：2580926706</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "copyRight",
};
</script>
<style lang="sass" scoped>
.copyRight
    width: 100%
    background: $fc
    .wrapper
        .border  
            border-bottom: 1px solid #e5e5e5
            border-top: 1px solid #e5e5e5    
        .content
            .common_link
                padding: 32px 40px 20px 40px
                .item::after
                    content: ""
                    display: inline-block
                    width: 1px
                    height: 70%
                    background: #d7d7d7
                    position: absolute
                    right: 0
                    top: 15%
                .item:nth-child(4n)::after
                    content: ""
                    height: 0
                .item
                    position: relative
                    width: 25%
                    float: left
                    text-align: center
                    padding: 0 12px
                    box-sizing: border-box
                    padding-bottom: 12px 
                    @include sc(28px, #848689)
                    p
                        @include overwrap()
        .copy_right
            text-align: center
            padding: 15px 20px
            border-top: none
            p  
                @include sc(24px, #848689)    
                // @include overwrap()
            p:last-child
                padding-top: 10px
           
</style>