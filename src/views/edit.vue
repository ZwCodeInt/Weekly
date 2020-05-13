<template>
    <div class = "edit">
        <div class="edit-header conheader">
            <div>
                <router-link to="/search" class="lastPage">
                    <img src="../assets/last.png">
                </router-link>
            </div>
            <div>
                <router-link to="/" style="color: white;">
                    回到首页
                </router-link >
            </div>
        </div>
        <div class="edit-content" >
            <div class="edit-title">编辑</div>
            <div style="cursor: no-drop;">
                {{recordDate}}({{recordDay}})
            </div>
            <div class="work">
                <div>工作内容：</div>
                <textarea name="" class="workContent" type="text" v-model="workContent">
                </textarea>
            </div>
            <div class="word-progress">
                <div>工作进度：<span style="color: #9c27b0;">{{ProgressValue}}%</span></div>
                <div class="range"><input id="range" @change = 'changeProgress' type="range" max="100" min="0" ref="getValue" :value="ProgressValue" step="5"></div>
            </div>
            <div class="btns">
                <Button @click = "cancle" type="info" >取消</Button>
                <Button @click ="saveClick" type="error" >保存</Button>
            </div>
            <Button class="delete" @click ="confirm">删除这条记录</Button>
            
            <!-- <div class="delete" @click ="deleteFun" >删除这条记录</div> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "searchEdit",
    data() {
        return {
            recordDate: this.$route.query.recordDate,
            recordDay: this.$route.query.recordDay,
            workContent: this.$route.query.workContent,
            ProgressValue: this.$route.query.progress,
            Id: this.$route.query.id
        }
    },
    mounted() {
        this.changeProgress();
    },
    methods: {
        confirm(){
            this.$Modal.confirm({
                title: '确定删除这条记录吗？',
                closable: true,
                fullscreen: true,
                content: '',
                onOk: () => {
                    axios({
                        method:"post",
                        //url: "http://localhost:58158/api/home/Remove",
                         url: "http://weekly/remove",
                        data:{
                            // removedDate: this.$route.query.recordDate,
                            Id: this.$route.query.id,
                        }
                    }).then((e)=>{
                        console.log(e);
                        if(e.data.isSuccess){ 
                            this.$Message.success('已经删除该条记录'); 
                        }
                        else{
                            this.$Message.error("删除失败");
                        }
                        setTimeout(()=>{
                            this.$router.push({path: '/search'});
                        }, 2000);
                    }); 
                    // alert("当前日期已经删除记录")
                },
                onCancel: () => {
                    this.$Message.info("已取消删除");
                    // console.log("已取消");
                }
            });
        },
        changeProgress(){
            // console.log(this.$refs.getValue.value);
            this.ProgressValue = this.$refs.getValue.value;
            let range = document.getElementById("range");
            range.style.background = 'linear-gradient(to right, #059CFA, #ebeff4 ' + this.ProgressValue + '%, #ebeff4)'
        },
        saveClick(){
            // let content = document.getElementsByClassName("workContent")[0].value;
            // let p = this.ProgressValue;
            // console.log(p,content);
            // if(this.workContent != this.$route.query.workContent || p != this.$route.query.progress){
                axios({
                    method:"post",
                   // url: "http://localhost:58158/api/home/Edit",
                    url: "http://weekly/edit",
                    data:{
                        editObj:{
                            editId: this.$route.query.id,
                            editWork: this.workContent,
                            editProgress: this.ProgressValue
                        },


                    }
                }).then((e)=>{
                    console.log(e.data.isSuccess);
                    // let showMessage = document.getElementsByClassName("mask")[0];                   
                    if(e.data.isSuccess) {
                        this.$Message.success({
                            // closable: true,
                            content: '修改成功'
                        });
                    }
                    else {
                        this.$Message.error({
                            // closable: true,
                            content: '修改失败'
                        });
                    }
                    setTimeout(()=>{
                        this.$router.push({path: '/search'});
                    }, 2000);
                })     
            // }
               
        },
        cancle (){
            this.$router.push({path: '/search'});
        }
    }
 }
</script>
<style scoped>
    .edit{
        /* background-image: url("~@/assets/xingkong11.jpg");
        background-repeat: no-repeat;
        background-size: 100% auto; 
       
        padding: 15% 10%;
        position: relative;*/
         width:100%;
        height: 100%;
        
    }
    .lastPage>img{
        width: 1.4rem;
        height: 1.4rem;
    }
    .lastPage {
        display: flex;
    }
    .edit-header{
        /* position: absolute;
        top: 0;
        left: 0 ;
        height: 8%; */
        color: white;
        display: flex;
        width: 100%;

        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        
    }
    .edit-content{
        height: 80vh;
        background: #e2e7f9;
        border-radius: 1rem;
        padding: 1rem 1.6rem;
        margin: 8% 5%;
    }
    .edit-title{
        height: 3rem;
        text-align: center;
        color: #a20f0f;
        line-height: 2rem;
        font-weight: bold;
        font-size: 1rem;
    }
    .workContent{
        width: 100%;
        text-align: justify;
        margin-top:.6rem;
        padding: .6rem;
        /* min-height: 7rem; */
        cursor: text;
        color: #9183a2;
        /* max-height: 20vh; */
        min-height: 15vh;
        max-height: 15vh;
    }
    .workContent ::-webkit-scrollbar{
        display: none;
    }
    .work {
        margin: 1rem 0;
    }
    .btns {
        display: flex;
        padding: 1rem 0;
        justify-content: space-around;
    }
    .range {
        padding: 2rem 0;
    }
    input[type="range"] {
        /* background-color: rgb(146, 195, 241); */
        background-color: #ebeff4;
        border-radius: 15px;
        width: 100%;
        -webkit-appearance: none; 
        border-color: white;
        height:1.4rem;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: default;
        top: 0px;
        height: 2rem;
        width: 2rem;
        /* transform: translateY(-4px); */
        background: none repeat scroll 0 0  #51a3e7;
        border-radius: 15px;
        -webkit-box-shadow: 0 -1px 1px black inset;
    }
    input[type="range"]:focus{
        outline: none!important;
    }
    .delete {
        text-align: center;
        color: #7d60e8;
        width: 100%;
        background: none;
        border: none;
        position: absolute;
        bottom: 15vh;
        left: 0;
    }
    
</style>