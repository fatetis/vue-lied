<template>
  <div class="headerNotDot">
      <div class="wrapper" :class="type == 1 ? 'wrapper_fff' : ''">
        <span class="back" @click="back"></span>
        <p class="arrow text" :class="type == 1 ? 'text_fff' : ''">{{ title }}</p>
      </div>
  </div>
</template>
<script>
export default {
  name: 'headerNotDot',
  props: {
    title: String,
    type: {
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
      left: 0
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
      left: 0
      top: 32px
      @include borderArrow(left, 20px, $headerBlack)
</style>