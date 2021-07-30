<template>
    <div class="selfUploader">
        <van-uploader 
        v-model="fileList" 
        multiple 
        :max-count="maxCount" 
        :after-read="afterRead" 
        :upload-text="uploadText"
        :name="name"
        
        />
    </div>
</template>
<script>
export default {
    name: 'selfUploader',
    data() {
        return {
            fileList: [
                // {
                // url: 'https://img01.yzcdn.cn/vant/leaf.jpg',
                // status: 'uploading',
                // message: '上传中...',
                // },
                // {
                // url: 'https://img01.yzcdn.cn/vant/tree.jpg',
                // status: 'failed',
                // message: '上传失败',
                // },
            ],
        }
    },
    props: {
        fileLists: {
            default: () => {
                return []
            }
        },
        uploadText: {
            default: '',
        },
        maxCount: {
            default: ''
        },
        name: {
            default: 'uploader'
        }

    },
    methods: {
        afterRead(file) {
            // file.status = 'uploading';
            // file.message = '上传中...';

            // setTimeout(() => {
            //     file.status = 'failed';
            //     file.message = '上传失败';
            // }, 1000);
        },
        
    },
    mounted() {
        this.fileList = this.fileLists
    }
    
}
</script>
<style lang="sass" scoped>

</style>