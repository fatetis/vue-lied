<template>
  <div class="search">
    <header-only-search @change="handleSearch"></header-only-search>
    <div class="container">
      <div class="wrapper">
        <div class="content"  v-show="history_data.length > 0">
          <div class="list">
            <div class="title">
              <p class="p1">最近搜索</p>
              <i class="trash" @click="handleTransh"></i>
            </div>
            <div class="text" ref="history_search">
              <span class="span-bg" v-for="(value, key) of history_data" :key="key">{{ value.key }}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="list">
            <div class="title">
              <p class="p1">热门搜索</p>
              <p class="p2" @click="handleHidden">{{ hidden ? '隐藏' : '显示'}}</p>
            </div>
            <div class="text" v-show="hidden">
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
            <p class="hiden_search" v-show="!hidden">已隐藏搜索发现</p>

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
import { setStore, getStore, removeStore } from '@/util/mUtils';
export default {
  name: 'search',
  data () {
    return {
      filter_show: false,
      history_data: [],
      hidden: true,
    }
  },
  components: {
    headerOnlySearch
  },
  methods: {
    handleSearch (key) {
      let that = this
      let change = false
      if(key.length > 0) {
        that.filter_show = true
        let obj = {
          key: key,
          /**
           * 链接内容
           */
          link: '12111'
        }
        that.history_data.forEach(function(val){
          if(val.key === obj.key) {
            /**
             * 同名搜索key，只改变链接内容
             */
            val.link = 1
            change = true
          }
        })
        !change && that.history_data.unshift(obj)
        setStore('search', that.history_data)
      } else {
        that.filter_show = false
      }
    },
    handleTransh () {
      removeStore('search')
      this.history_data = []
    },
    handleHidden() {
      this.hidden = !this.hidden
    }
  },
  mounted() {
    this.history_data = getStore('search') === null ? [] : eval("(" + getStore('search') + ")")
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
          .hiden_search
            text-align: center
            margin-top: 50px
            @include sc(24px, #999999)
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
