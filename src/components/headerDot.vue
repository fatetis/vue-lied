<template>
  <div class="headerDot" :class=" type === 1 ? 'headerDot_fff' : ''">
      <div class="wrapper">
        <span class="back" @click="back"></span>
        <p class="arrow text" :class="type === 1 ? 'text_grey' : ''">{{ title }}</p>
      </div>
      <not :type="type"></not>
  </div>
</template>
<script>
import not from '@components/common/not'
export default {
  name: 'headerDot',
  props: {
    title: String,
    type: String
  },
  components: {
    not
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
  padding: 0 20px
  background: $theam
  .wrapper
    .back
      width: 76px
      height: 76px
      position: absolute
      left: 0px
      top: 0px
      cursor: pointer 
      z-index: 1
    .text
      line-height: 46px
      padding: 16px 24px 
      text-align: center
      font-size: 36px
      color: $fc
    .text::before
      content: ''
      position: absolute
      left: 24px
      top: 24px
      @include borderArrow(left, 20px, $fc)
    .text_grey
      color: $headerBlack
    .text_grey::before
      content: ''
      position: absolute
      left: 24px
      top: 24px
      @include borderArrow(left, $borderArrowSize, $arrowGrey)
.headerDot_fff
  background: $fc 
  border-bottom: 1px solid $headerBorderColor     
</style>