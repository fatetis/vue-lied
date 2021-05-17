<template>
  <div class="search">
    <header-only-search></header-only-search>
    <div class="container">
      <div class="wrapper">
        <div class="content">
          <div class="list">
            <div class="title">
              <p class="p1">最近搜索</p>
              <i class="trash"></i>
            </div>
            <div class="text">
              <span>asdas</span>
              <span>asdas</span>
              <span>aswwwwwwwwwwwwwdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdwwwwwwwwwwas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
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
              <span>asdas</span>
              <span>asdas</span>
              <span>aswwwwwwwww3wwwwdas</span>
              <span>aas</span>
              <span>as</span>
              <span>asdwwwwwwwwwwas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
              <span>asdas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headerOnlySearch from '@components/headerOnlySearch'
export default {
  name: 'search',
  components: {
    headerOnlySearch
  },
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
            span
              display: inline-block
              padding: 10px 14px
              margin: 10px 10px 10px 20px 
              background-color: #f0f2f5
              border-radius: 10px
              white-space: nowrap
              text-overflow: ellipsis
              @include sc(24px, #686868)
         
</style>
