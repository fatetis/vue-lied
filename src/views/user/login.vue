<template>
    <div class="login">
        <header-not-dot :title="title" :type="1"></header-not-dot>
        <div class="container">
            <div  class="wrapper">
                <div class="content">
                    <!-- 手机短信验证码登录 -->
                    <div class="phone" v-show="isMobileLogin">
                        <div class="input-container">
                            <span>+86</span>
                            <div class="input_wrap">
                                <input maxlength="11" v-model="mobile" type="text" placeholder="请输入手机号">
                            </div>
                        </div>
                        <div class="input-container yzm_container">
                            <div class="input_wrap yzm_wrap">
                                <input v-model="verifyCode" maxlength="6" type="text" placeholder="请输入收到的验证码">
                            </div>
                            <button class="btn_yzm" :class="(!verifyCodeStatus && valideteMobile) && 'btn_yzm_hover'" @click="handleGetVerifyCode">
                                 {{ (verifyCodeStatus) ? '验证码('+verifyCodeTime+'秒)' : '获取验证码' }}
                            </button>
                        </div>
                    </div>
                    
                    <!-- 账号密码登录 -->
                    <div class="account" v-show="!isMobileLogin">
                        <div class="input-container">
                            <div class="input_wrap account_wrap">
                                <input type="text" placeholder="用户名/手机号/密码">
                            </div>
                        </div>
                        <div class="input-container yzm_container account_container">
                            <div class="input_wrap eye_bg" :class="isEyeClose ? '' : 'eye_bg_hover'">
                                <input :type="isEyeClose ? 'password' : 'text'" placeholder="请输入密码">
                            </div>
                            <div class="bth_eye" @click="handleChangeEyeClose"></div>
                            <button class="btn_yzm ">忘记密码</button>
                        </div>
                    </div>

                    <button class="btn_login" 
                    :class="(valideteVerifyCode && valideteMobile && isMobileLogin) && 'btn_login_hover'" 
                    @click="handleLogin">
                        登录
                    </button>
                    <div class="btn_quick clearfix">
                        <div @click="handleChangeLoginType">
                            <p class="p1"  v-show="isMobileLogin" >账号密码登录</p>
                            <p class="p1"  v-show="!isMobileLogin">短信验证码登录</p>
                        </div>
                        <p class="p2">手机快速注册</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerNotDot from '@components/headerNotDot'
import { verifyCode, loginByMobile } from "@/service/getData";
import { NO } from "@/config/globalStatusCode"
import { validatorsTool } from '@/util/validatorsTool';
import { SneakRules } from '@/validation/validateRule.ts';
import { setStore } from '@/util/mUtils';
export default {
    name: 'login',
    data () {
        return {
            title: '登录注册',
            isMobileLogin: true, // 是否手机号登录
            isEyeClose: true, // 密码是否可看
            mobile: 1882509908, // 手机号
            valideteMobile: false, // 手机号码校验状态
            verifyCode: 12354,
            valideteVerifyCode: false,
            timer: null, // 节流控制
            verifyCodeTime: 60, // 获取验证码倒计时
            verifyCodeTimer: null, // 获取验证码倒计时计时器
            verifyCodeStatus: false // 是否获取过验证码
        }
    },
    components: {
        headerNotDot,
    },
    watch: {
        mobile() {
            if(this.timer) clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                // 手机号校验
                let regxMobile = /^1[3456789][0-9]{9}$/
                this.valideteMobile = regxMobile.test(this.mobile)
            }, 500)
        },
        verifyCode() {
            if(this.timer) clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                // 验证码校验
                let regxVerifyCode = /^\d{6}$/
                this.valideteVerifyCode = regxVerifyCode.test(this.verifyCode)
            }, 500)
        }
    },
    methods: {
        handleChangeLoginType () {
            this.isMobileLogin = !this.isMobileLogin;
        },
        handleChangeEyeClose () {
            this.isEyeClose = !this.isEyeClose;
        },
        async handleGetVerifyCode () {
            if(this.verifyCodeStatus) return;
            if(this.valideteMobile) {
                // 同步获取验证码请求
                await verifyCode({
                    mobile: this.mobile,
                    using_type: NO
                }).then((res) => {
                    this.verifyCodeStatus = true
                    this.$toast.success('验证码发送成功,请注意查收')
                })
                if(this.verifyCodeStatus) {
                    // 60s倒计时获取验证码控制
                    this.verifyCodeTimer = setInterval(() => {
                        this.verifyCodeTime--;
                        if(this.verifyCodeTime <= 0) {
                            clearTimeout(this.verifyCodeTimer)
                            this.verifyCodeStatus = false
                            this.verifyCodeTime = 60
                        }
                    }, 1000);
                }
                
            } else {
                this.$toast.fail('请输入正确的手机号')
            }
        },
        handleLogin () {
            this.isMobileLogin 
            ? this.$options.methods.handleLoginByMobile.bind(this)() 
            : this.$options.methods.handleLoginByUserName.bind(this)()
        },
        handleLoginByMobile () {
            if(this.valideteVerifyCode && this.valideteMobile) {
                loginByMobile({
                    mobile: this.mobile,
                    code: this.verifyCode
                }).then((res) => {
                    console.log(res)
                })
            } else {
                this.$toast.fail('请正确填写手机号和验证码')
            }
        },
        handleLoginByUserName () {

        },
        setToken (token) {
            setStore('token', token)
        }
        
        
    },
    
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
                    position: relative
                    .eye_bg
                        padding-right: 230px
                        @include bis('../../assets/images/icon/eye_close.png')
                        background-size: 10%
                        background-position: 68% center
                    .eye_bg_hover
                        @include bis('../../assets/images/icon/eye_open.png')
                        background-size: 7%
                        background-position: 68% center
                    .bth_eye
                        position: absolute
                        z-index: 1
                        width: 60px
                        height: 60px
                        left: 400px
                        top: 18px
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