<template>
    <div class="setting">
        <header-not-dot :title="title" :type='2'></header-not-dot>
        <div class="container">
            <div class="wrapper">
                <div class="content">

                    <div class="info clearfix">
                        <div class="clearfix">
                            <div class="float-left user_img">
                                <img src="@assets/images/userCenter/fatetis.jpg" alt="图片加载失败">
                            </div>
                            <div class="float-left user">
                                <p class="p1">不对劲的上班</p>
                                <p class="p2">手机号：188****9087</p>
                            </div>
                        </div>
                        <div class="info_edit ct">编辑</div>
                    </div>
                    <div class="item">
                        <router-link :to="{name: 'addressList'}">
                        <p class="p1">我的收货地址</p>
                        </router-link>
                    </div>

                    <div class="item margin">
                        <p>密码重置</p>
                        <p>改绑手机号码</p>
                    </div>
                    <div class="item margin">
                        <p>问题反馈</p>
                        <p>关于我们</p>
                    </div>

                    <p class="logout">
                        退出登录
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerNotDot from "@components/headerNotDot";

export default {
    name: 'setting',
    data() {
        return {
            title: '设置'
        }
    },
    components: {
        headerNotDot,
    },
}
</script>
<style lang="sass" scoped>
.setting
    height: 100vh
    background-color: $bc1
    .item
        padding: 0 20px
        background-color: $fc
        p
            font-size: 30px
            position: relative
            padding: 20px 0
            border-bottom: 1px solid $headerBorderColor
        p:last-child
            border-bottom: 0
        p::after
            content: ''
            position: absolute
            right: 0
            top: 50%
            @include borderArrow(right, 14px, #999999)
            transform: translateY(-50%) rotate(45deg)
    .margin
        margin: 20px 0
    .container
        .wrapper
            .content
                .info
                    position: relative
                    padding: 30px 20px
                    background-color: $fc
                    border-bottom: 1px solid $headerBorderColor
                    .user_img
                            width: 104px
                            height: 104px
                            overflow: hidden
                            border-radius: 100px
                            img
                                width: 100%
                    .user
                        margin-top: 16px
                        margin-left: 20px 
                        p.p1
                            font-size: 30px
                        p.p2
                            font-size: 24px
                            color: #999999
                    .info_edit
                        right: 20px
                        font-size: 24px
                        color: $theam
                        border: 1px solid $theam
                        border-radius: 10px
                        padding: 0 10px
                .logout
                    background-color: $fc
                    padding: 20px 0
                    text-align: center
                    font-size: 30px
                    
                            
</style>