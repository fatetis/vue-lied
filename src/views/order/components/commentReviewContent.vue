<template>
    <div class="commentReviewContent">
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="item">
                        <div class="prod-info clearfix">
                            <div class="img">
                                <self-image 
                                    :src="image"
                                    radius="3"
                                />
                            </div>
                            <div class="right">
                                <p class="title">日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤</p>
                                <p class="sku-name">颜色:灰色;尺码:L</p>
                            </div>
                        </div>
                        <div class="text">
                            <van-field
                                name="message[]"
                                v-model="message"
                                rows="3"
                                :autosize="autosize"
                                type="textarea"
                                left-icon="edit"
                                placeholder="已经用了一段时间了，有更多宝贝使用心得？分享给想买的他们吧"
                                show-word-limit
                                maxlength="150"
                            />
                        </div>
                        <div class="uploader">
                            <self-uploader 
                            maxCount="9"
                            uploadText="晒出我的买家秀"
                            />
                        </div>
                        <div class="anonymous">
                            <div class="checkbox">
                                <van-checkbox 
                                v-model="checked" 
                                checked-color="#ff8620" 
                                icon-size="14px"
                                >
                                公开
                                </van-checkbox>
                            </div>
                            <div class="input">

                                <van-field value="公开头像昵称，大家可以看得到我的主页" disabled right-icon="question-o"/>
                            </div>
                        </div>
                    </div>
                    
                    <div class="item">
                        <div class="prod-info clearfix">
                            <div class="img">
                                <self-image 
                                    :src="image"
                                    radius="3"
                                />
                            </div>
                            <div class="right">
                                <p class="title">日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤日系工装九分裤</p>
                                <p class="sku-name">颜色:灰色;尺码:L</p>
                            </div>
                        </div>
                        <div class="text">
                            <van-field
                                name="message[]"
                                v-model="message"
                                rows="3"
                                :autosize="autosize"
                                type="textarea"
                                left-icon="edit"
                                placeholder="已经用了一段时间了，有更多宝贝使用心得？分享给想买的他们吧"
                                show-word-limit
                                maxlength="150"
                            />
                        </div>
                        <div class="uploader">
                            <self-uploader 
                                maxCount="9"
                                uploadText="晒出我的买家秀"
                            />
                        </div>
                        <div class="anonymous">
                            <div class="checkbox">
                                <van-checkbox 
                                v-model="checked" 
                                checked-color="#ff8620" 
                                icon-size="14px"
                                >
                                公开
                                </van-checkbox>
                            </div>
                            <div class="input" @click="handleShowQuestion(!showQuestion)">
                                <van-field value="公开头像昵称，大家可以看得到我的主页" disabled right-icon="question-o"/>
                            </div>
                        </div>
                    </div>

                    <p class="commit">发表追评</p>
                </div>
            </div>
        </div>
        <question :showQuestion='showQuestion' @change="handleShowQuestion"></question>
    </div>
</template>
<script>
import selfUploader from '@components/common/selfUploader'
import question from '@views/order/components/question'
export default {
    name: 'commentReviewContent',
    data() {
        return {
            message: '',
            checked: true,
            image: require('@assets/images/userCenter/fatetis.jpg'),
            autosize: { maxHeight: 100},
            showQuestion: false
        }
    },
    components: {
        selfUploader,
        question
    },
    methods: {
        handleShowQuestion(bool) {
            this.showQuestion = bool
        },
    }
}
</script>
<style lang="sass" scoped>
.commentReviewContent /deep/ .van-field
    padding: 20px 0
.commentReviewContent /deep/ .van-uploader .van-uploader__upload .van-uploader__upload-icon
    color: #656565
.commentReviewContent /deep/ .van-uploader .van-uploader__upload .van-uploader__upload-text
    color: #656565
.commentReviewContent /deep/ .van-uploader .van-uploader__upload
    width: 202px
    color: #656565
    margin: 26px 12px
.commentReviewContent /deep/ .van-uploader .van-image
    @include wh(203px, 203px)
.commentReviewContent /deep/ .anonymous .van-checkbox__label
    font-size: 12px
.commentReviewContent /deep/ .anonymous .input .van-cell
    padding: 0 
.commentReviewContent
    .container
        .wrapper
            padding: 0 20px
            .content
                .item
                    background-color: $fc
                    margin: 20px 0
                    padding: 20px 20px
                    border-radius: 20px
                    overflow: hidden
                    .prod-info
                        .img
                            width: 80px
                            height: 80px
                            float: left
                        .right
                            float: left
                            margin-left: 20px 
                            width: calc( 100% - 100px )
                            .title
                                color: #949494
                                font-size: 30px
                                @include overwrap()
                            .sku-name
                                margin-top: 8px
                                color: #969799
                    .text
                    .anonymous
                        display: flex
                        justify-content: space-between
                        .checkbox
                            display: flex
                            align-content: center
                            width: 18%
                        .input   
                            width: 82% 
                .commit
                    width: 90%
                    box-sizing: border-box
                    margin: 20px auto
                    text-align: center
                    line-height: 80px
                    height: 80px
                    background-image: linear-gradient(-45deg, #f6ba7d, $theam 50%)
                    border-radius: 50px
                    @include sc(32px, $fc)

        
</style>