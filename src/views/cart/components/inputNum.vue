<template>
    <div class="inputNum">
        <button class="common min" @click="handleDown" :disabled="currentValue <= min"></button>
        <input class="input" type="text" :value="currentValue" @change="handleChange" @keyup.up='handleUp' @keyup.down='handleDown'/>
        <button class="common max" @click="handleUp" :disabled="currentValue >= max"></button>
    </div>
</template>
<script>
export default {
    name: 'inputNum',
    props: {
        max: {
            //必须是数字类型
            type: Number,
            //默认值为Infinity
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        },
        step: {
            type: Number,
            default: 1
        }
    },
    //data是本组件的数据，作用域是组件本身
    //Vue组件为单向数据流，data为一个函数，currentValue设置为父组件的value，在input-number组件内部维护currentValue
    data: function() {
        return {
            //子组件将父组件传递过来的值进行保存，在本组件的作用域下进行使用
            currentValue: this.value
        }
    },
    //监听watch：监听data或者props的变化    
    watch: {
        //监听子组件currentValue是否改变
        currentValue: function(val) {
            //$emit与父组件通信  （子组件-->父组件）
            //this指向当前组件实例
            this.$emit('input', val);
            //定义自定义函数进行通信
            this.$emit('on-change', val)
        },
        //监听父组件value是否改变
        value: function(val) {
            this.updateValue(val);
        }
    },
    methods: {
        //父组件传递过来的值可能不符合条件（大于最大值，小于最小值）
        updateValue: function(val) {
            if(val > this.max) {
                val = this.max;
            }
            if(val < this.min) {
                val = this.min;
            }
            this.currentValue = val;
        },
        handleDown: function() {
            this.currentValue -= this.step;
            if(this.currentValue <= this.min) {
                this.currentValue = this.min;
            }
        },
        handleUp: function() {
            this.currentValue += this.step;
            if(this.currentValue >= this.max) {
                this.currentValue = this.max;
            }
        },
        handleChange: function(event) {
            var val = event.target.value.trim();
            var max = this.max;
            var min = this.min;
            if(isValueNumber(val)) {
                val = Number(val);
                this.currentValue = val;
                if(val > max) {
                    this.current = max;
                }
                if(val < min) {
                    this.current = min;
                }
            } else {
                //如果输入的不是数字，将输入的内容重置为之前的currentValue
                event.target.value = this.currentValue;
            }
        },
    },
    //初始化
    mounted: function() {
        this.updateValue(this.value);
    }
}
</script>
<style lang="sass" scoped>
.inputNum
    .common
        width: 30px
        height: 30px
        line-height: 30px
        text-align: center
        font-weight: 700
        border: none
        vertical-align: bottom
        background-color: #fff
        margin-left: 8px
    .min:before
        content: ''
        position: absolute
        width: 16px
        height: 4px
        background-color: #333
        transform: translate(-50%,-50%)
    .min
        position: relative
    .input
        width: 72px
        height: 30px
        line-height: 30px
        text-align: center
        background-color: #f2f2f2
    .max
        position: relative
    .max:after
        content: ''
        position: absolute
        width: 4px
        height: 16px
        background-color: #333
        transform: translate(-50%,-50%)
    .max:before
        content: ''
        position: absolute
        width: 16px
        height: 4px
        background-color: #333
        transform: translate(-50%,-50%)

</style>