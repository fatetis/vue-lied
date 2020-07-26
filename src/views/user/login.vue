<template>
    <div class="login">
        <header-not-dot :title="title" :type="1"></header-not-dot>
        <div class="container">
            <div  class="wrapper">
                <div class="content">
                    <div class="phone">
                        <div class="input-container">
                            <span>+86</span>
                            <div class="input_wrap">
                                <input type="text" placeholder="请输入手机号">
                            </div>
                        </div>
                        <div class="input-container yzm_container">
                            <div class="input_wrap yzm_wrap">
                                <input type="text" placeholder="请输入收到的验证码">
                            </div>
                            <button class="btn_yzm">获取验证码</button>
                        </div>
                    </div>
                    
                    <!-- 账号密码登录 -->
                    <!-- <div class="account">
                        <div class="input-container">
                            <div class="input_wrap account_wrap">
                                <input type="text" placeholder="用户名/手机号/密码">
                            </div>
                        </div>
                        <div class="input-container yzm_container account_container">
                            <div class="input_wrap eye_bg">
                                <input type="text" placeholder="请输入密码">
                            </div>
                            <button class="btn_yzm">忘记密码</button>
                        </div>
                    </div> -->

                    <button class="btn_login">
                        登录
                    </button>
                    <div class="btn_quick clearfix">
                        <p class="p1">账号密码登录</p>
                        <p class="p2">手机快速注册</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerNotDot from '@components/headerNotDot'
export default {
    name: 'login',
    data () {
        return {
            title: '登录注册'
        }
    },
    components: {
        headerNotDot,
    }
}
</script>
<style lang="sass">
.login
    .headerNotDot 
        .wrapper
            padding: 0 50px
</style>
<style lang="sass" scoped>
.login
    .container
        .wrapper
            .content
                margin: 0 50px
                .input-container
                    padding: 20px 20px
                    margin: 40px 0
                    position: relative
                    height: 60px
                    border-bottom: 1px solid #efefef
                    span::after
                        content: ''
                        width: 1px
                        height: 54px
                        background-color: #ccc
                        margin-right: -30px
                        position: absolute
                        top: 50%
                        right: 10px
                        transform: translateY(-50%)
                    span
                        display: inline-block
                        position: absolute
                        height: 60px
                        line-height: 60px
                        @include sc(32px, #000)
                    .input_wrap
                        padding-left: 100px
                        input::-webkit-input-placeholder 
                            // /* Chrome/Opera/Safari */
                            color: rgba(0,0,0,.4)
                        input::-moz-placeholder 
                            // /* Firefox 19+ */
                            color: rgba(0,0,0,.4)
                        input:-ms-input-placeholder
                            // /* IE 10+ */
                            color: rgba(0,0,0,.4)

                        input:-moz-placeholder 
                            // /* Firefox 18- */
                            color: rgba(0,0,0,.4)
                        input
                            width: 100%
                            height: 60px
                            line-height: 60px
                            border-radius: 30px
                            @include sc(32px, #000)
                    .account_wrap
                        padding-left: 0
                .yzm_container
                    .btn_yzm::before
                        content: ''
                        width: 1px
                        height: 54px
                        background-color: #ccc
                        margin-right: -30px
                        position: absolute
                        top: 50%
                        left: -40px
                        transform: translateY(-50%)
                    .btn_yzm
                        position: absolute
                        @include sc(28px, #848689)
                        height: 60px
                        line-height: 60px
                        right: 20px
                        top: 50%
                        transform: translateY(-50%)
                    .btn_yzm_hover
                        color: #e2231a
                    .input_wrap
                        padding-left: 0
                        padding-right: 200px
                        input
                .account_container
                    .eye_bg
                        padding-right: 230px
                        @include bis('../../assets/images/icon/eye_close.png')
                        background-size: 10%
                        background-position: 68% center
                    .eye_bg_hover
                        @include bis('../../assets/images/icon/eye_open.png')
                        background-size: 7%
                        background-position: 68% center
                    button
                        @include sc(28px, #333)
                .btn_login
                    background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba)
                    height: 100px
                    line-height: 100px
                    width: 100%
                    @include sc(32px, $fc)
                    border-radius: 100px
                .btn_login_hover
                    background-image: linear-gradient(90deg,#f10000,#ff2000 73%,#ff4f18)
                .btn_quick
                    margin-top: 40px
                    @include sc(28px, rgba(0,0,0,.4))
                    .p1
                        float: left
                    .p2
                        float: right


</style>