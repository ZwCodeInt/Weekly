<template>
    <div id="suggest">
        <div class="suggestTitle">
            <router-link to="/"  class="toHome" ><Icon type="ios-arrow-back" size="24"/></router-link>
            <!-- <div class="toPerson">&lt;</div> -->
            意见反馈
        </div>
        <div style="color: #969598;height: 3rem;line-height: 4rem;padding: 0 1rem">问题和意见</div>
        <div class="suggestMessage">
            <textarea placeholder="请简要描述您的问题和意见"></textarea>
            <div>
                <div class="demo-upload-list" v-for="(item, index) in uploadList" :key = "index">
                    <template v-if="item.status === 'finished'">
                        <img :src="item.url">
                        <div class="demo-upload-list-cover">
                            <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                        </div>
                    </template>
                    <template v-else>
                        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                    </template>
                </div>
                <Upload
                    ref="upload"
                    :show-upload-list="false"
                    :default-file-list="defaultList"
                    :on-success="handleSuccess"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    :before-upload="handleBeforeUpload"
                    multiple
                    type="drag"
                    action="//jsonplaceholder.typicode.com/posts/"
                    style="display: inline-block;width:58px;">
                    <div style="width: 58px;height:58px;line-height: 58px;">
                        <Icon type="ios-camera" size="20"></Icon>
                    </div>
                </Upload>
                <Modal title="View Image" v-model="visible">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582286690929&di=0b6240f3af0986a7003d30ffdd97eac4&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180928%2F17%2F1538126080-MvDtJiKGyR.jpg" v-if="visible" style="width: 100%">
                    <!-- <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%"> -->
                </Modal>
            </div>
        </div>
        <div style="color: #969598;height: 3rem;line-height: 4rem;padding: 0 1rem">留下你的联系方式</div>
        <div style="width: 100%;padding: 0 1rem;">
            <input style="border: none;width: 100%;height: 2rem;text-indent: 1rem;" type="number" name="" placeholder="请填写你的手机号 / QQ / 邮箱">
        </div>
        <div style="padding: 2rem 1rem;">
            <Button @click="success" style="width: 100%;height: 2.4rem;background: #8893c4;border: none;color: white;">提交</Button>
        </div>
    </div>
</template>
<script>
export default {
        data () {
            return {
                defaultList: [
                    
                ],
                imgName: '',
                visible: false,
                uploadList: []
            }
        },
        
        methods: {
            success () {
                this.$Message.success({
                    content: '提交成功',
                    duration: 3,
                    closable: true
                });
            },
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file, fileList) {
                console.log(res);
                console.log(file);
                console.log(fileList);
                 file.url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582286225674&di=b846d1437021d3a3b20a8434ac2ff139&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-afe97df0febba174941c75a1577dfc75_hd.jpg';
                 file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            //文件格式错误
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式错误',
                    desc: '文件格式 ' + file.name + ' 是错误的,请选择jpg或者png格式.'
                });
            },
            //文件最大尺寸限制
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过2M'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 9;
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传9张图片'
                    });
                }
                return check;
            }
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
        }    
}


</script>
<style>
    #suggest {
        background: #eaf1fe;
        height: 100%;
    }
    .suggestTitle {
        height: 4rem;
        line-height: 4rem;
        font-size: 1.4rem;
        background: #8894c4;
        color: white;
        text-align: center;
        position: relative;
    }
    .toHome {
        position: absolute;
        left: 1rem;
        color: white;       
    }
    .suggestMessage {
        padding: 1rem;
        margin: 0 1rem;
       
        background: white;
    }
    .suggestMessage textarea {
        width:100%;
        resize:none; 
        padding: .4rem;
        border: none;
        min-height: 10rem;
    }
    textarea::-webkit-input-placeholder, ::-webkit-input-placeholder{
        color: #a8a7ad !important;
    }

    textarea:-moz-placeholder,:-moz-placeholder {
        color: #a8a7ad !important;
    }

    textarea::-moz-placeholder,::-moz-placeholder {
        color: #a8a7ad !important;

    }

    textarea:-ms-input-placeholder,:-ms-placeholder {
        color: #a8a7ad !important;
    }
    /* 上传图片样式设置 */
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>