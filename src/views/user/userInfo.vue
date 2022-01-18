<template>
    <div class="userInfo">
        <header-dot :title="title" :type="1"></header-dot>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="head-img">
                        <div class="uploader">
                            <self-uploader 
                                maxCount="9"
                                uploadText="头像"
                            />
                        </div>
                    </div>
                    <div class="operate">
                        <div class="item">
                            <div class="border">
                                <p>
                                    <span class="left">昵称</span>
                                    <span class="right">不对劲的上班</span>
                                </p>
                            </div>
                            <div class="border">
                                <p>
                                    <span class="left">性别</span>
                                    <span class="right">男</span>
                                </p>
                            </div>
                            <div class="border">
                                <p>
                                    <span class="left">个性签名</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div> 
        </div>
    </div>
</template>
<script>
import selfUploader from '@components/common/selfUploader'
import headerDot from "@components/headerDot";
export default {
    name: 'userInfo',
    data() {
        return {
            title: '个人信息'
        }
    },
    components: {
        headerDot,
        selfUploader
    },
    mounted() {

    }
}
</script>
<style lang="sass" scoped>
.userInfo
    height: 100vh
    background-color: #f2f2f2
    .container
        background-color: #ffffff
        .wrapper
            .content
                .head-img
                    display: flex
                    justify-content: center
                    align-items: center
                    height: 300px
                    .uploader
                .operate
                    .item
                        padding-left: 20px
                        background-color: $fc
                        .border
                            border-top: 1px solid #f5f5f5
                            p
                                font-size: 30px
                                position: relative
                                padding: 20px 0
                                margin-right: 20px
                                color: #666666
                                .left
                                    display: inline-block
                                    width: 30%
                                .right
                                    color: #999999        
                            p:last-child
                                border-bottom: 0
                            p::after
                                content: ''
                                position: absolute
                                right: 0
                                top: 50%
                                @include borderArrow(right, 14px, #999999)
                                transform: translateY(-50%) rotate(45deg)
</style>