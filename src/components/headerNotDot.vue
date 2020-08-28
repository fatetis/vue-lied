<template>
  <div class="headerNotDot">
      <div class="wrapper" :class="type == 1 ? 'wrapper_fff' : (type == 2 ? 'wrapper_fff border' : '')" >
        <span class="back" @click="back"></span>
        <p class="arrow text" :class="(type == 1 || type == 2) ? 'text_fff' : ''">{{ title }}</p>
      </div>
  </div>
</template>
<script>
export default {
  name: 'headerNotDot',
  props: {
    title: {
      type: String,
      default: '八块钱网家装商城',
    },
    type: {
      default: ''
    },
    border: {
      default: ''
    }
  },
  methods:{
    back(){
        this.$router.go(-1);//返回上一层
    },
  },
}
</script>
<style lang="sass" scoped>
.headerNotDot
  .border
    border-bottom: 1px solid #e5e5e5
  .wrapper
    padding: 0 20px
    background: $theam
    height: $headerIndexTop
    .back
      width: 76px
      height: $headerIndexTop
      position: absolute
      left: 0px
      top: 0px
      cursor: pointer 
      z-index: 1
    .text
      line-height: 46px
      padding: 22px 24px 
      text-align: center
      font-size: 36px
      color: $fc
      position: relative
    .text::before
      content: ''
      position: absolute
      left: 10px
      top: 32px
      @include borderArrow(left, 20px, $fc)
.headerNotDot
  .wrapper_fff
    background: $fc
    // border-bottom: 1px solid #f2f2f2
    .text_fff
      color: $headerBlack
    .text_fff::before
      content: ''
      position: absolute
      left: 10px
      top: 32px
      @include borderArrow(left, 20px, $headerBlack)
</style>