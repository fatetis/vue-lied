<template>
  <div class="headerDot">
      <div class="wrapper"  :class=" type === 1 ? 'wrapper_fff' : ''">
        <span class="back" @click="back"></span>
        <p class="arrow text" :class="type === 1 ? 'text_grey' : ''">{{ title }}</p>
        <slot name="title"></slot>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </div>
      <dot :type="type"></dot>
  </div>
</template>
<script>
import dot from '@components/common/dot'
export default {
  name: 'headerDot',
  props: {
    title: String,
    type: {
      default: ''
    }
      
  },
  components: {
    dot
  },
  methods:{
    back(){
        this.$router.go(-1);//返回上一层
    },
  },
}
</script>
<style lang="sass" scoped>

.headerDot
  height: $headerIndexTop
  .wrapper_fff
    background: $fc 
    border-bottom: 1px solid $headerBorderColor  
  .wrapper
    background-image: linear-gradient(45deg, #f8bf37, #fb5c25 60%)
    z-index: $fixedPositionZIndex
    // height: $headerIndexTop
    position: relative
    padding: 0 20px
    .back
      width: $headerIndexTop
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
      left: 0px
      top: 32px
      @include borderArrow(left, 20px, $fc)
    .text_grey
      color: $headerBlack
    .text_grey::before
      content: ''
      position: absolute
      left: 0px
      top: 32px
      @include borderArrow(left, $borderArrowSize, $arrowGrey)
   
.headerDot
  height: $headerIndexTop
  .wrapper_fff
    background: $fc 
    border-bottom: 1px solid $headerBorderColor  
</style>