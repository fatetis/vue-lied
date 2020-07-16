<template>
  <div class="city_letter">
    <div class="list">
      <div 
      class="content" 
      v-for="item in alphabet" 
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      >
      {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityLetters",
  props: {
    alphabet: Array,
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if(this.touchStatus) {
        if(this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY-this.startY)/22)
          if(index >= 0 && index < this.alphabet.length) {
            this.$emit('change', this.alphabet[index])
          }
        }, 16)
         
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
};
</script>

<style lang="sass" scoped>
.city_letter
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 20px
    bottom: 0
    top: 0
  .content
    line-height: 32px
    font-size: 20px
    color: #666
    padding: 4px 0
    text-align: center
</style>

