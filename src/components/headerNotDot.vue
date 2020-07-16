<template>
  <div class="headerNotDot">
      <div class="wrapper">
        <span class="back" @click="back"></span>
        <p class="arrow text">{{ title }}</p>
      </div>
  </div>
</template>
<script>
export default {
  name: 'headerNotDot',
  props: {
    title: String
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
      top: 22px
      @include borderArrow(left, 28px, $fc)
      
</style>