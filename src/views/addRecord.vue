<template>
    <div class="addcontent conContent">
        <div class= "addHeader conheader">
            <router-link to="/" class="toHome">
                <img src="@/assets/last.png">
            </router-link>
            <div>新增工作内容</div>
        </div>
        <div class="content">
            <div class="addDate">
                <label><span style="color: #7d332f;font-size: 1rem;">*</span> 日期：</label>
                <input class="input-con" type="date" name=""  @change="dates">
                <div id="errorDate" style="color: #ab003a;line-height: 2rem;"></div>
            </div>
            <div class="addWord">
                <label><span style="color: #7d332f;font-size: 1rem;">*</span> 工作内容：</label>
                <textarea class="input-con" @change="word" v-model="wordValue"/>
                <div id="errorWork" style="color: #ab003a;line-height: 2rem;"></div>
            </div>
            <div class="addProgress">
                <label><span style="color: #7d332f;font-size: 1rem;">*</span> 工作进度：</label>
                <select class="input-con" name="" @change="progressfun">
                    <option v-for="item in progress"  :key="item" :value="item">{{item}}%</option>
                </select>
            </div>  
            <div class="btnbox">
                <button class="btn" type="button">取消</button>
                <Button @click="isSuccess"  class="btn"  i-type="button">添加</Button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "AddRecord",
    data(){
        return{
            progress:[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],
            dateValue:"",
            dayValue:"",
            dayEnglish:"",
            wordValue:"",
            progressValue: 0,
            isOk: false
         
        }
    },
    methods: {
        check(){
            this.isOk = false;
            document.getElementById("errorDate").innerHTML = "";
            document.getElementById("errorWork").innerHTML = "";
            if(!this.dateValue){
                console.log("日期不能为空");
                document.getElementById("errorDate").innerHTML = "（日期不能为空且格式必须正确）" ;
            }
            else if(!this.wordValue) {
                console.log("工作内容不能为空");
                document.getElementById("errorWork").innerHTML = "（工作内容不能为空）"
            }
            else if(this.dateValue && this.wordValue){
                this.isOk = true;
                console.log(this.dateValue + this.wordValue);
                document.getElementById("errorDate").innerHTML = "";
                document.getElementById("errorWork").innerHTML = "";
                
            }

        },

        isSuccess () {
            this.check();
            console.log(this.isOk)
            if(this.isOk){
                axios({
                    method: "post",
                    // url: "http://localhost:58158/api/home/Add",
                    url: "http://weekly/add",
                    data: {
                        addObj:{
                            addDate: this.dateValue,
                            addDay: this.dayValue,
                            addWork: this.wordValue,
                            addProgress: this.progressValue    
                        }
                        
                    }
                }).then((e)=>{
                    // console.log(e.data.isSuccess,e.data.message);
                    if(e.data.isSuccess) {
                        this.$Message.success({
                            content: "添加成功"
                            // content: e.data.message
                        });
                        document.querySelector(".input-con").value = "";
                        this.wordValue = "";
                        document.querySelector("select").value = 0;
                    }
                    else{
                        this.$Message.error({
                            content: "添加失败"
                        });
                    };
                    
                });

            }
            // let nodesc = false;
            // if(nodesc){
            //     this.$Notice.success({
            //         title: '添加成功',
            //         desc: '',
            //         duration: 1 //1秒后自动关闭
            //     });
            // }
            // else{
            //     this.$Notice.success({
            //         title: '添加失败',
            //         desc: '',
            //         duration: 1 //1秒后自动关闭
            //     });
            // }
                            
        },
        dates(e){
            this.dateValue = e.target.value;
            let dt = new Date(e.target.value);
            let dd = dt.getDay();
            switch (dd) {
                case 0:
                    this.dayValue = "星期天";
                    // this.dayEnglish = "Sunday";
                    break;
                case 1:
                    this.dayValue = "星期一";
                    // this.dayEnglish = "Monday";
                    break;
                case 2:
                    this.dayValue = "星期二";
                    // this.dayEnglish = "Sunday";
                    break;
                case 3:
                    this.dayValue = "星期三";
                    // this.dayEnglish = "Sunday";
                    break;
                case 4:
                    this.dayValue = "星期四";
                    // this.dayEnglish = "Sunday";
                    break;
                case 5:
                    this.dayValue = "星期五";
                    //this.dayEnglish = "Sunday";
                    break;
                case 6:
                    this.dayValue = "星期六";
                    //this.dayEnglish = "Sunday";
                    break;
                
            }
            console.log(this.dateValue,this.dayValue);
        },
        word(e){
            this.wordValue = e.target.value;
            console.log(this.wordValue);
        },
        progressfun(e){
            this.progressValue = e.target.value;
            console.log(this.progressValue);
        },
        /*handler(){
           var pushobj2 = {
               "dayName": this.dayEnglish,
               "name": this.dayValue,
               "content": this.wordValue,
               "daydate": this.dateValue,
               "percentage": this.progressValue
           };
           console.log(pushobj2);
          
           this.$store.commit('changeRecord',pushobj2);
        }*/
    },
    
}
</script>

<style>
   .addcontent {
       height: 100vh;
   }
   .addHeader{
        color: white;
        padding: 0 3%;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .addHeader>a,.addHeader>div{
        display: block;
        height: 60px;
        line-height: 60px; 
        text-align: center;
    }
    .addHeader>a {
        width: 10%;
        left: 0;
        position: absolute;
    }
    .addHeader>div {
        width: 100%;
        
        
    }
    .content{
        width: 80%;
        height: 80vh;
        margin: 0 10%;
        margin-top:20px;
        background: rgb(255, 255, 255);
        border-radius: 5%;
    }
    .content>div{
        padding-left: 28px;
        padding-top: 30px;
    }
    .input-con{
        background: white;
        min-width:88%;
        display: block;
        max-width: 88%;
        padding: 5px;
        color: #859fa7;
        max-height: 100px;
    }
    .content label{
        color: #696868;
        width:100%;
        display: block;
        margin-bottom: 10px;
    }
    .addDate >input{
        height: 24px;
        line-height: 24px;
        padding:0 5px;
        border-width: 1px;
    }
    .addProgress{
        width:100%;
    }
    .addWord textarea{
        min-height: 50px;
    }
    .toHome img{
       width:20px;
       height:20px; 
    } 
    .btnbox>button{
        width: 80px;
        height: 30px;
        border-radius: 10px;
        background: rgb(89, 131, 152);
        border: 0;
        color: #ffffff;
    }
    .btnbox{
        padding: 30px 40px;
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
    }
    .errorDate {
        display: none;
    }
</style>