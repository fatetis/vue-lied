<template>
    <div class="headerSearch">
        <div class="container">
            <div class="wrapper">
                <div class="content clearfix">
                    <div class="item left">
                        <span class="arrow"></span>
                        <span class="back" @click="back"></span>
                    </div>
                    <div class="item search">
                      <div class="input">
                        <input type="text" placeholder="请输入搜索名称">
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <dot></dot>
    </div>
</template>
<script>
import dot from '@components/common/dot'
export default {
    name: 'headerSearch',
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
.headerSearch
  height: $headerIndexTop
  .container
    position: fixed
    width: 100%
    background: $fc
    height: $headerIndexTop
    border-bottom: 1px solid $headerBorderColor
    box-sizing: border-box
    top: 0
    left: 0
    width: 100%
    z-index: $fixedPositionZIndex
    .wrapper
      .content
        .item
          float: left
        .left
          position: absolute
          left: 0
          padding-left: 20px
          width: 66px
          box-sizing: border-box
          height: $headerIndexTop
          .back
            width: 66px
            height: $headerIndexTop
            position: absolute
            left: 0px
            top: 0px
            cursor: pointer 
            z-index: 1
          .arrow
            display: inline-block
            position: relative
          .arrow:before
            content: ''
            position: absolute
            top: 8px
            left: 5px
            @include borderArrow(left, 20px, $arrowGrey)
        .search
          height: 60px
          margin-top: 14px
          box-sizing: border-box
          overflow: hidden
          position: relative
          width: 100%
          .input
            height: 60px
            background: #f7f7f7
            position: absolute
            top: 0
            left: 0
            width: 76vw
            margin-left: 66px
            border-radius: 30px
            padding-left: 30px
            @include bis('../assets/images/icon/search_32x32.png')
            background-size: 6%
            background-position: 20px center
            input
              color: #232326
              padding-left: 10px
              box-sizing: border-box
              -webkit-box-flex: 1
              height: 60px
              vertical-align: middle
              line-height: 30px
              background-color: #f7f7f7
              display: inline-block
              margin: 0px 40px
              width: 70vw
              border-radius: 30px

</style>