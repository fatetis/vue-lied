<template>
  <div class="strollDay">
    <div class="stroll_bg">
      <div class="content">
        <img src="@assets/images/index/stroll_day_index.png" alt />
      </div>
    </div>
    <div class="stroll_wrapper">
      <div class="content">
        <div class="border" v-for="(item, index) of strollDayData" :key="index">
          <div class="padding clearfix">
            <div class="item" v-for="(v, k) of item" :key="k">
              <a :href="v.url">
                <div class="text">
                  <p class="p1">{{ v.name }}</p>
                  <p class="p2">{{ v.content }}</p>
                </div>
                <div class="img">
                  <img
                    :src="v.link"
                    alt
                  />
                </div>
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "strollDay",
  props: ['strollDayData']
};
</script>
<style lang="sass" scoped>
.stroll_bg
    width: 100%
    .content
        margin: 0 20px
        height: 70px
        text-align: center
        img
            width: auto
            vertical-align: bottom
            @include minHeight(1px)
            max-height: 100%
.stroll_wrapper
    width: 100%
    height: 552px
    .content
        margin: 0 20px
        background: #fff
        .border:last-child
            border-bottom: none
        .border
            border-bottom: 1px solid #f5f5f5
            .padding
                .item:nth-child(4n)
                    border-right: none
                .item
                    width: 25%
                    text-align: center
                    float: left
                    padding-bottom: 20px
                    border-right: 1px solid #f5f5f5
                    box-sizing: border-box
                    padding: 20px
                    .text
                        text-align: left
                        padding-bottom: 20px
                        .p1
                            background: -webkit-linear-gradient(left,#FF2A2A,#F139D2)
                            background: linear-gradient(90deg, #FF2A2A,#F139D2)
                            -webkit-background-clip: text
                            color: transparent
                            font-weight: 700
                            font-size: 32px
                            display: inline-block
                            max-width: 100%
                            @include overwrap()
                        .p2
                            @include sc(24px, #222222)
                            @include overwrap()
                    .img
                        @include wh(120px, 120px)
                        display: inline-block
                        img
                            transform: scale(0.9)
                            @include wh(100%, 100%)

</style>