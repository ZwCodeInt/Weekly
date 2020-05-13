<template>
    <div class="onLogin">
        <div class="onloginHeader">
            <div style="color:white" @click="golast()">返回</div>
            <div style="font-size: 1.4rem;">登录</div>
            <router-link style="color:white" to="/register">注册</router-link>
        </div>
        <div>
            <img class="loginImage" src="@/assets/person.png" alt="头像" />
        </div>
        <div class="onloginInput onloginCon" >
            <label>账号</label>
            <input type="text" name="" placeholder = "请输入登录账号" v-model="account">
        </div>
        <div class="onloginInput2 onloginCon" >
            <label>密码</label>
            <div style="width:80%;display:inline-flex;font-size: 1.2rem;">
                <Input type="password" name="" password placeholder = "请输入密码" v-model="password" />
            </div>
        </div>
        <div>
            <!-- <router-link to="/person"> -->
            <Button style="width:86%;height: 40px;font-size: 18px;" type="info" @click.native="login">登录</Button>
            <!-- </router-link> -->
            <div style="padding-top:.4rem;color:#AABBCC;">忘记密码？</div>
        </div>
        <div style="padding-bottom: 0px;color: rgb(170, 187, 204);position: absolute;width: 100vw;bottom: 3%;">
            <div>_______其他方式登陆________</div>
            <div style="display:flex;justify-content: space-evenly;padding-top:1rem;">
                <div>
                    <img style="background:white;" src="@/assets/weibo.png"  width="42" alt="">
                </div>
                <div>
                    <img src="@/assets/wechat.png" width="42" alt="">
                </div>
                <div>
                    <img src="@/assets/QQ.png" width="42" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import '@/api/user'
export default {
    data(){
        return {
            account: '',
            password: ''
        }
    },
    methods: {
        golast(){
            this.$router.go(-1);
        },
        login() {
            if(this.account && this.password){
                console.log(this.account,this.password)
                axios({
                    method:"post",
                    url: 'https://weekly.com/login',
                    data: {account: this.account, password: this.password}
                }).then(x => {
                    let resp = x.data;
                    console.log(resp)
                    if(!resp.flag){
                        console.log(resp.message);
                        this.$Notice.error({
                            title: resp.message,
                            desc: '',
                            duration: 3 //1秒后自动关闭
                        });
                    }else{
                        localStorage.setItem('token','123');
                        alert('登录成功')
                        this.$router.push({
                            name: 'person'
                        })
                    }
                })    
            }

            
        }
    }
}
</script>
<style>
    /* 修改placeholder颜色 */
    input::-webkit-input-placeholder {
        color: #c5c8ce;
    }
    input::-moz-input-placeholder {
        color: #c5c8ce;
    }
    input::-ms-input-placeholder {
        color: #c5c8ce;
    } 
    .onLogin {
        background: #646980; 
        height: 100%;
        border: none;
        color: white;
    }
    .onLogin >div {
        text-align: center;
        padding: 1.4rem 1rem;
    }

    .loginImage {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
    }
    .onloginHeader {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1.2rem;
        font-size: 1rem;
    }
    .onloginCon {
        margin: 0 12%;
        border-bottom: 1px dotted #fff;
        font-size: 1.2rem;
        line-height: 3rem;
        height:3rem;
        padding: 0!important;
        /* text-align: left; */
    }
    .onloginCon label {
        display: inline-flex;
        width:20%;
        text-align:left;
    }
    .onloginCon input {
        width:80%;
        background: none;
        color: #e6e3f1;
        border: none;
    }
    /* 密码眼睛图标 */
    .onloginCon .ivu-icon-ios-eye-outline:before {
        color: white;
        font-size: 1.6rem;
    }
    .onloginCon .ivu-icon-ios-eye-off-outline:before {
        color: white;
        font-size: 1.6rem;
    }
    .onloginCon .ivu-input{
        outline: none;
        font-size: 1.2rem;
        width: 100%;
        padding: 0;
    }
    input{
        outline: none;
    }
</style>