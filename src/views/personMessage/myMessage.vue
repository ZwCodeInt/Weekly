<template>
    <div class="Message">
        <div class="messageTitle">
            <router-link to="/person" style="color:white;">
                <Icon type="ios-arrow-dropleft" size="38"/>
            </router-link>
            <div>我的资料</div>
            <div><Button shape="circle">保存</Button></div>
        </div>
        <div class="detailMessage">
            <div class="editImage">
                <div>头像修改</div>
                <div class="changeFile"><input type="file" id='check'></div>
                <div @click="showMark"><img ref="touxiang" src="@/assets/person.png" alt="头像" width="70" height="70" style="border-radius: 50%;"/></div>
            </div>
            <div class="detail">
                <div v-for="(item,i) in detailData" :key="i" >
                    <label>{{item.showKey}}</label>
                    <span v-if="item.isInput" @click="editName(i)">{{item.showValue}}</span>
                    <textarea :class="'input'+i"  @blur="updatedName(i)"  v-else-if="item.isInput == false" v-model="item.showValue" type="text" value="" ></textarea>
                </div>
            </div>
            <!--<div><label>昵称：</label><span v-if="isInput" @click="editName()">{{ name }}</span><input class="inputName"  @blur="updatedName" ref="inputName" v-else-if="!isInput" v-model="name" type="text" value="" /></div>
            <div></div> -->
        </div>
        <div class='mark'  @click = "hideMark()">
            <img ref="touxiang2"  alt="头像"/>  
        </div>
       
    </div>
</template>
<script>
export default {
    data() {
        return {
            detailData:[{
                isInput:true,
                showKey: "用户名",
                showValue: "刘伟薇"
            },{
                isInput:true,
                showKey: "昵称",
                showValue: "花非花 雾非雾"
            },{
                isInput:true,
                showKey: "性别",
                showValue: "女"
            },{
                isInput:true,
                showKey: "出生年月",
                showValue: "1997年7月"
            },{
                isInput:true,
                showKey: "联系电话",
                showValue: "13112361985"
            },{
                isInput:true,
                showKey: "邮箱",
                showValue: "2522594977@qq.com"
            },{
                isInput:true,
                showKey: "职位",
                showValue: "程序员"
            },{
                isInput:true,
                showKey: "现居城市",
                showValue: "珠海市"
            },{
                isInput:true,
                showKey: "薪资期望",
                showValue: "5k以上"
            },{
                isInput:true,
                showKey: "工作经验",
                showValue: "1年"
            },{
                isInput:true,
                showKey: "学历",
                showValue: "大专"
            },{
                isInput:true,
                showKey: "毕业院校",
                showValue: "广东科学技术职业学院珠海分校"
            }]
        }
    },
    methods: {
        editName(e) {
            this.detailData[e].isInput = false; 
            this.$nextTick(()=>{
                // this.$refs.input.focus();
                document.querySelector(`.input${e}`).focus();
            })  
            ;console.log(e);
        },
        updatedName(e) {
            this.detailData[e].isInput = true;
        },
        showMark(){
            let t = this.$refs.touxiang.src;
            console.log(t);
            this.$refs.touxiang2.src = t;
            console.log(this.$refs.touxiang2.src);
            document.querySelector(".mark").style.display = "flex";
        },
        hideMark(){    
            document.getElementsByClassName("mark")[0].style.display = "none";
        }
    },
}
</script>

<style>
    .Message {
        background: white; 
        height: 100%;
        border: none;
        position: relative ;
    }
    .messageTitle {
        height: 15rem;
        background: #8894c4;
        color: white;
        line-height: 5rem;
        font-size: 1.6rem;
        text-align: center;
        display: flex;
        padding: 0 1rem;
        justify-content: space-between;
    }
    .detailMessage {
        position: absolute;
        border: 1px solid #aabbcc;
        width: 90%;
        left: 5%;
        top: 6rem;
        color: red;
        background: white;
        border-radius: 10px;
        padding: 1.2rem;
        /* overflow-y: scroll;
        height: 80%; */
    }
    .detail>div,.editImage{
        color: #3672a3;
        /* height: 3rem; */
        font-size: 1rem;
        line-height: 3em;
        display: flex;
        border-bottom: 1px dotted #aabbcc;
    }
    .detailMessage div >label {
        display: inline-block;
        width: 30%;
        color: #888;

    }
    .editImage {
        justify-content: space-between;
        height: 5rem!important;
        position: relative;
    }
    .changeFile{
        width: 30%;
        position: absolute;
        left: 0;
        top: 0;
        height:3rem;  
        opacity: 0;
    }
    .changeFile input {
        width: 100%;
        height: 96%;

    }
    .editImage> div {
        height: 5rem;
        font-size: 1rem;
        line-height: 5em;
    }
    .detailMessage>div textarea {
        width: 70%;
        /* height: 90%; */
        border: none;
        color: #888888;
        min-height:3rem;
        height: 3rem;
    } 
    .detailMessage>div span{
        display: inline-flex;
        width: 70%;
        height: 100%;
        word-break: break-all;
    }
    .mark {
        width: 100%;
        height: 100%;
        background: #000000a1;
        position: fixed;
        left: 0;
        top: 0;
        display: none;
        align-items: center;
        justify-content: center;   
    }
    .mark img {
         max-width: 100vw;
         max-height: 100vh;
    }
</style>