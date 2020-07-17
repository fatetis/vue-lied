<template>
  <div class="copyRight">
    <div class="wrapper">
      <div class="content">
        <div class="common_link clearfix border">
          <div class="item">
            <router-link :to="{path: '/'}">
              <p>登录</p>
            </router-link>
          </div>
          <div class="item">
            <router-link :to="{path: '/'}">
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
              <p>返回顶部</p>
            </router-link>
          </div>
        </div>
        <div class="copy_right border">
          <p>粤ICP备15073814号-2</p>
          <p>Copyright © 2014-2020 八块钱家装商城. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "copyRight"
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
                @include sc(12px, #848689)    
                @include overwrap()
            p:last-child
                padding-top: 10px
           
</style>