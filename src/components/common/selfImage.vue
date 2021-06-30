<template>
    <div class="selfImage" v-if="this.clickFlag">
        <van-image
        :width="width"
        :height="height"
        lazy-load
        :src="src"
        @click="handleImagePreview"
        :radius="radius"
        />
    </div>
    <div class="selfImage" v-else >
        <van-image
        :width="width"
        :height="height"
        lazy-load
        :src="src"
        :radius="radius"
        />
    </div>
</template>
<script>
export default {
    name: 'selfImage',
    data() {
        return {
            handleClick: this.clickFlag
        }
    },
    props: {
        width: {
            default: ''
        },
        height: {
            default: ''
        },
        radius: {
            default: 0
        },
        src: {
            default: ''
        },
        clickFlag: {
            default: false
        },
        scrollObj: {
            default: ''
        }
    },
    methods: {
        handleImagePreview(e) {
            this.$imagePreview({
                images: [e.target.getAttribute('src')],
                showIndex: false,
                showIndicators: false
            });
            this.scrollObj !== '' && this.scrollObj.refresh()
        }
    }
}
</script>
<style lang="sass" scoped>

</style>