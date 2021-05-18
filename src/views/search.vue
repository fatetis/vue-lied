<template>
  <div class="search">
    <header-only-search @change="handleSearch"></header-only-search>
    <div class="container">
      <div class="wrapper">
        <div class="content">
          <div class="list">
            <div class="title">
              <p class="p1">最近搜索</p>
              <i class="trash"></i>
            </div>
            <div class="text">
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">aswwwwwwwwwwwwwdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdwwwwwwwwwwas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="list">
            <div class="title">
              <p class="p1">热门搜索</p>
              <p class="p2">隐藏</p>
            </div>
            <div class="text">
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">aswwwwwwwww3wwwwdas</span>
              <span class="span-bg">aas</span>
              <span class="span-bg">as</span>
              <span class="span-bg">asdwwwwwwwwwwas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
              <span class="span-bg">asdas</span>
            </div>
          </div>
        </div>

        <div class="filter" v-show="filter_show">
          <ul>
            <li>
              <span class="key">雨伞</span>
              <div class="skey">
                <span class="span-bg">儿童</span>
                <span class="span-bg">自动折叠</span>
              </div>
            </li>
            <li>
              <span class="key">雨伞</span>
              <div class="skey">
                <span class="span-bg">儿童</span>
                <span class="span-bg">自动折叠</span>
              </div>
            </li>
            <li>
              <span class="key">雨伞</span>
              <div class="skey">
                <span class="span-bg">儿童</span>
                <span class="span-bg">自动折叠</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headerOnlySearch from '@components/headerOnlySearch'
export default {
  name: 'search',
  data () {
    return {
      filter_show: false
    }
  },
  components: {
    headerOnlySearch
  },
  methods: {
    handleSearch (key) {
      if(key.length > 0) {
        this.filter_show = true
      } else {
        this.filter_show = false
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.search
  .container
    .wrapper
      .content
        padding: 20px
        .list
          .title
            display: flex
            justify-content: space-between
            .p1
              @include sc(30px, #232326)
            .trash
              display: inline-block
              @include wh(32px, 32px)
              @include bis('../assets/images/icon/trash.png')
            .p2
              @include sc(24px, #999999)
          .text
            width: 100%
            margin-top: 20px 
      .filter
        position: absolute
        box-sizing: border-box
        top: $headerIndexTop
        left: 0
        width: 100%
        padding: 0px 20px
        height: 100vh
        background-color: $fc
        li:after
          content: ''
          position: absolute
          bottom: 0
          left: 0
          width: 200%
          height: 1px
          background-color: #f0f2f5
        li
          display: flex
          justify-content: space-between
          height: 96px
          position: relative
          .key
            line-height: 96px
            @include sc(26px, #232326)
          .skey
            span
              margin-top: 24px
  span.span-bg
    display: inline-block
    padding: 10px 14px
    margin: 10px 10px 10px 20px 
    background-color: #f0f2f5
    border-radius: 10px
    white-space: nowrap
    text-overflow: ellipsis
    @include sc(24px, #232326)
         
</style>
