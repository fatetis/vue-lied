<template>
    <div class="prodCommentContent">
        <div class="list clearfix">
            <div class="first_comment clearfix">
                <div class="img">
                <img src="@assets/images/userCenter/fatetis.jpg" alt="">
                </div>
                <div class="test">
                    <div class="top">
                        <p class="name">
                            这是名称
                            <i class="star_icon"></i>
                            <i class="star_icon"></i>
                            <i class="star_icon"></i>
                            <i class="star_icon half"></i>
                            <i class="star_icon empty"></i>
                        </p>
                        <div class="comment">
                            <p class="text">这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论</p>
                            <div class="img_coment clearfix">
                                <div class="img_content">
                                    <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                </div>
                                <div class="img_content">
                                    <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                </div>
                                <div class="img_content">
                                    <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                </div>
                                <div class="img_content">
                                    <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <p class="time">13小时前</p>
                        <div class="right">
                            <small>188</small>
                            <span class="zan"></span>
                            <span class="reply"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reply_comment">
                <div class="content clearfix">
                    <div class="img">
                    <img src="@assets/images/userCenter/fatetis.jpg" alt="">
                    </div>
                    <div class="test">
                        <div class="top">
                            <p class="name">
                                <span class="first_name">这是名称3</span> 
                                <span class="arrow"></span>
                                <span class="reply_name">这是名称2</span>
                            </p>
                            <div class="comment">
                                <p class="text">这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论</p>
                                <div class="img_coment clearfix">
                                    <div class="img_content">
                                        <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                    </div>
                                    <div class="img_content">
                                        <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                    </div>
                                    <div class="img_content">
                                        <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                    </div>
                                    <div class="img_content">
                                        <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bottom">
                            <p class="time">11小时前</p>
                            <div class="right">
                                <small>188</small>
                                <span class="zan"></span>
                                <span class="reply"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reply_comment">
                <div class="content clearfix">
                    <div class="img">
                    <img src="@assets/images/userCenter/fatetis.jpg" alt="">
                    </div>
                    <div class="test">
                        <div class="top">
                            <p class="name">
                                <span class="first_name">这是名称3</span> 
                                <span class="arrow"></span>
                                <span class="reply_name">这是名称2</span>
                            </p>
                            <div class="comment">
                                <p class="text">这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论</p>
                                <div class="img_coment clearfix">
                                    <div class="img_content">
                                        <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                    </div>
                                    <div class="img_content">
                                        <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                    </div>
                                    <div class="img_content">
                                        <self-image :src="img" radius="5" :clickFlag="true" :scrollObj="scrollObj"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bottom">
                            <p class="time">11小时前</p>
                            <div class="right">
                                <small>188</small>
                                <span class="zan"></span>
                                <span class="reply"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment_more">
                    <p class="more">展开其他3条回复</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'prodCommentContent',
    data() {
        return {
            img: require('@assets/images/index/index.jpg')
        }
    },
    props: ['scrollObj'],
    methods: {
        
    }
}
</script>

<style  lang="sass" scoped>
.product .container .wrapper .content .comment_wrap .commen_item div:last-child
    margin-bottom: 0
    border-bottom: 0

.prodCommentContent:last-child .list
        border-bottom: none
.prodCommentContent
    .list
        border-bottom: 1px solid #ececec
        padding-bottom: 20px
        margin-bottom: 20px
        .img
            border-radius: 50%
            overflow: hidden
            float: left
            @include wh(72px, 72px)
            img          
                @include wh(100%, 100%) 
        .test  
            float: left
            margin-left: 20px 
            margin-top: -4px  
            width: calc(100% - 92px)
            .top 
                .name
                    font-weight: 600
                    @include sc(28px, #333333) 
                    span.arrow
                        display: inline-block
                        margin: 0 14px 2px 14px
                        @include arrow(right, 8px, #999999)
                .comment
                    .text
                        margin-top: 6px 
                        line-height: 1.5
                        @include sc(24px, #666666)
                    .img_coment
                        .img_content:nth-child(3n+1)
                            margin-left: 0
                        .img_content
                            float: left
                            height: auto
                            width: 31.33%
                            margin-top: 20px
                            margin-left: 2%
                        img
                            vertical-align: top
                            height: auto
                            width: 31.33%
                            margin-top: 20px
                            margin-left: 2%
                            border-radius: 5px
            .bottom
                display: flex
                justify-content: space-between
                margin-top: 10px
                .time
                    @include sc(24px, #999999)
                .right
                    small
                        display: inline-block
                        @include sc(24px, #999999)
                    .zan
                        display: inline-block
                        margin-left: 10px 
                        vertical-align: bottom
                        @include wh(32px, 32px)
                        @include bis('../../../assets/images/icon/zan.png')
                    .reply
                        display: inline-block
                        margin-left: 40px 
                        vertical-align: bottom
                        @include wh(28px, 28px)
                        @include bis('../../../assets/images/icon/comment.png')
        .first_comment
            .bottom
                border-bottom: 1px solid #ececec
                padding-bottom: 20px
        .reply_comment
            margin-left: 92px
            margin-top: 20px
            .content
                margin-bottom: 20px
                .img
                    @include wh(40px, 40px)
                .test
                    width: calc(100% - 60px)
            .comment_more
                .more
                    @include sc(26px, #3582fb)
    
</style>